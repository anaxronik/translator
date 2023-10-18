type Props = { a?: number };
import React, { useState } from "react";
import { useVirtual } from "react-virtual";
import styles from "./Table.module.scss";

const Table = (props: Props) => {
  const columns = [];
  const [data, setData] = useState([]);

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: 100,
    overscan: 10,
  });
  const { virtualItems } = rowVirtualizer;

  const rows: {
    id: string;
    getVisibleCells: () => [];
  }[] = [];

  return (
    <div
      ref={tableContainerRef}
      style={{ maxHeight: "500px", height: "500px" }}
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>asd</th>
            <th>asd</th>
            <th>asd</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>asda</td>
            <td>asda</td>
            <td>asda</td>
          </tr>
          {virtualItems.map((virtualRow, rowIdx) => {
            return (
              <tr key={rowIdx}>
                <td>asd</td>
                <td>asd</td>
                <td>
                  <pre>{JSON.stringify(virtualRow)}</pre>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
