import classNames from "classnames";
import { observer } from "mobx-react-lite";
import JsonUploader from "../components/JsonUploader/JsonUploader";
import { appStore as store } from "../stores/AppStore/AppStore";
import styles from "./App.module.scss";

const App = observer(() => {
  const width = window.innerWidth;
  const cellWidth = width / (store.files.length + 1) - 20;

  return (
    <div className={styles.app}>
      {width}
      <div>
        <JsonUploader onUploadJson={store.addJson} />
      </div>
      <div>
        <table>
          <tbody>
            {store.keys.map((key) => {
              return (
                <tr key={key}>
                  <td
                    className={classNames(styles.cell, styles.first)}
                    style={{
                      maxWidth: cellWidth + "px",
                    }}
                  >
                    {key}
                  </td>
                  {store.files.map((file, fileIdx) => {
                    return (
                      <td
                        className={styles.cell}
                        key={fileIdx}
                        style={{
                          maxWidth: cellWidth + "px",
                        }}
                      >
                        {file[key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default App;
