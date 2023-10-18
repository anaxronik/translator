import { observer } from "mobx-react-lite";
import React from "react";

interface IProps {
  onUploadJson: (value: object) => void;
}

const JsonUploader: React.FC<IProps> = observer((props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      Object.values(files)?.forEach((file: Blob) => {
        const fileReader = new FileReader();
        fileReader.readAsText(file, "UTF-8");
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
      });
    }
  };
  return (
    <input
      type="file"
      onChange={handleFileChange}
      accept="application/JSON"
      multiple
    />
  );
});

export default JsonUploader;
