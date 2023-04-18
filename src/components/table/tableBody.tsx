import { useDispatch } from "react-redux";
import { transactionDataInterface } from "../../interface";
import Button from "../button";
import GetActiveStatus from "../statusGlow/getActiveStatus";
import TableCell from "./tableCell";
import { showModal } from "../../appStore/modalReducer";
import { DELETE, NO_TRANSACTION, UPDATE } from "../../utils/constant";
import { formatDate } from "../../utils/formatDate";

const TableBody: React.FC<{ transactionInfo: transactionDataInterface[] }> = ({
  transactionInfo,
}) => {
  const dispatch = useDispatch();
  
  const editAction = (transactionId: string, activity: string) => {
    dispatch(showModal({isOpen: true, activity, selectedTransaction: transactionId}));
  };

  return (
    <tbody className="bg-slate-950 dark:bg-slate-800">
      {transactionInfo.length > 0 ? (
        transactionInfo.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <TableCell className="pl-8">
                <p>{transaction.id}</p>
                <p className="text-white font-bold">{transaction.name}</p>
              </TableCell>
              <TableCell className="pr-8">{formatDate(transaction.date)}</TableCell>
              <TableCell className="pr-8">{transaction.price}</TableCell>
              <TableCell className="pr-8">{transaction.quantity}</TableCell>
              <TableCell className="pr-8">{transaction.amount}</TableCell>
              <TableCell className="pr-8">
                <GetActiveStatus status={transaction.status} />
                {transaction.status}
              </TableCell>
              <TableCell className="">
                <Button
                  name="Delete"
                  className="mr-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-slate-950"
                  onClick={() => editAction(transaction.id, DELETE)}
                />
                <Button
                  name="Edit"
                  className="text-green-500 border-green-500 hover:bg-green-500 hover:text-slate-950"
                  onClick={() => editAction(transaction.id, UPDATE)}
                />
              </TableCell>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={7} className="text-center text-[20px] text-slate-500 p-4">
            {NO_TRANSACTION}
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
