import { TableCellI } from "../../interface";

const TableCell: React.FC<TableCellI> = ({ children, className }) => {
  return (
    <td className={`border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 ${className}`}>
        {children}
    </td>
  );
};

export default TableCell;
