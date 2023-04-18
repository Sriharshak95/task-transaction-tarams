import React from "react";
import Button from "./button";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow } from "../appStore/tableReducer";
import { showModal } from "../appStore/modalReducer";
import { CONFIRM_DELETE_MESSAGE, CREATE } from "../utils/constant";
import { RootState } from "../appStore/store";
const DeleteTransaction: React.FC = (props) => {
  const dispatch = useDispatch();
  const transactionData = useSelector(
    (state: RootState) => state.tableUpdates.transactionData
  );
  const modalOption = useSelector(
    (state: RootState) => state.modalOpen.modalOption
  );

  const deleteTransaction = () => {
    const tempObj = transactionData.find(
      (transaction) => transaction.id === modalOption.selectedTransaction
    );
    dispatch(deleteRow(tempObj));
    dispatch(showModal({ isOpen: false, activity: CREATE }));
  };

  return (
    <React.Fragment>
      <div className="p-4 rounded-md">
        <p className="text-red-700">
          {CONFIRM_DELETE_MESSAGE}
        </p>
        <div className="mt-4 flex justify-between">
          <Button
            name="Confirm"
            className="text-red-500 border-red-500"
            onClick={() => deleteTransaction()}
          />
          <Button name="Cancel" className="text-lime-500 border-lime-500 hover:bg-lime-500 hover:text-white" onClick={(e) => {}} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeleteTransaction;
