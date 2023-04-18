import { useSelector } from "react-redux";
import { tableRows } from "../../utils/constant";
import { RootState } from "../../appStore/store";
import TableBody from "./tableBody";

const Table = () => {
  const transactionData = useSelector(
    (state: RootState) => state.tableUpdates.transactionData
  );
  return (
    <table className="border-collapse table-auto w-full text-sm bg-slate-950">
      <thead>
        <tr>
          {tableRows.map((rows) => {
            return (
              <th
                key={rows}
                className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
              >
                {rows}
              </th>
            );
          })}
        </tr>
      </thead>
      <TableBody transactionInfo={transactionData} />
    </table>
  );
};

export default Table;
