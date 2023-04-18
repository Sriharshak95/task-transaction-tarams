import React from "react";
import "../App.css";
import Table from "../components/table/table";
import { AppDispatch, RootState } from "../appStore/store";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../appStore/modalReducer";
import Button from "../components/button";
import Modal from "../components/modal";
import { CREATE, DELETE, LATEST_TRANSACTION } from "../utils/constant";
import DeleteTransactionConfirmBox from "../components/deleteTransaction";
import TransactionForm from "../components/formElements/form";

const TransactionTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const activity = useSelector(
    (state: RootState) => state.modalOpen.modalOption.activity
  );
  return (
    <React.Fragment>
      <div className="flex items-center justify-center h-screen">
        <div className="relative bg-slate-950 rounded-xl overflow-hidden dark:bg-slate-800/25 mx-auto max-w-screen-lg p-4">
          <p className="text-white font-bold text-[20px]">{LATEST_TRANSACTION}</p>
          <div className="shadow-sm overflow-hidden my-8 w-full">
            <Table />
          </div>
          <div className="text-right">
            <Button
              name="Create Transaction"
              className="mr-4 text-[15px] text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-slate-950"
              onClick={() => {
                dispatch(showModal({ isOpen: true, activity: CREATE }));
              }}
            />
          </div>
        </div>
      </div>
      <Modal>
        {activity === DELETE ? (
          <DeleteTransactionConfirmBox />
        ) : (
          <TransactionForm />
        )}
      </Modal>
    </React.Fragment>
  );
};

export default TransactionTable;
