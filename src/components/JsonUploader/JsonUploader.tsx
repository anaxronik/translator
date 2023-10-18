import { observer } from "mobx-react-lite";
import React from "react";

interface IProps {
  onUploadJson: (value: object) => void;
}

const JsonUploader: React.FC<IProps> = observer((props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        const file = e.target?.result;
        if (file) {
          try {
            const json = JSON.parse(file as string);
            props.onUploadJson(json);
          } catch (error) {
            console.error("Ошибка при парсинге json");
          }
        }
      };
    }
  };
  return (
    <input type="file" onChange={handleFileChange} accept="application/JSON" />
  );
});

export default JsonUploader;
