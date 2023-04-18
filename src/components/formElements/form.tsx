import React, { useEffect, useRef, useState } from "react";
import TextElement from "./textelements";
import SelectElement from "./selectElement";
import { CREATE, UPDATE, statusOptions } from "../../utils/constant";
import Button from "../button";
import { useDispatch, useSelector } from "react-redux";
import { addRow, updateRow } from "../../appStore/tableReducer";
import { useId } from "react";
import SimpleReactValidator from "simple-react-validator";
import { showModal } from "../../appStore/modalReducer";
import { RootState } from "../../appStore/store";

const TransactionForm: React.FC = () => {
  const [customerObj, setCustomerObj] = useState({
    id: useId(),
    name: "",
    date: "",
    price: 0,
    amount: 0,
    status: "",
    quantity: 0,
  });
  const simpleValidator = useRef(
    new SimpleReactValidator({ autoForceUpdate: this })
  );
  const [, forceUpdate] = useState<any>();
  const dispatch = useDispatch();
  const modalOption = useSelector(
    (state: RootState) => state.modalOpen.modalOption
  );
  const transactionInfo = useSelector(
    (state: RootState) => state.tableUpdates.transactionData
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      if (modalOption.activity === CREATE) {
        addTransaction();
      } else {
        updateTransaction();
      }
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };

  const addTransaction = () => {
    dispatch(addRow(customerObj));
    dispatch(showModal({ isOpen: false, activity: CREATE }));
  };

  const updateTransaction = () => {
    dispatch(updateRow(customerObj));
    dispatch(showModal({ isOpen: false, activity: UPDATE }));
  };

  useEffect(() => {
    if (modalOption.activity === UPDATE && transactionInfo.length > 0) {
      const tempObj = transactionInfo.find(
        (transaction) => transaction.id === modalOption.selectedTransaction
      );
      setCustomerObj(tempObj);
    }
  }, [modalOption.selectedTransaction, transactionInfo, modalOption.activity]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto my-4 p-6 bg-white rounded-lg"
    >
      <div className="mb-2">
        <TextElement
          labelName="Name"
          type="text"
          id="name"
          htmlFor="name"
          name="customerName"
          inputClassName="w-full border border-gray-400 p-2 rounded-lg"
          labelClassName="block text-gray-700 font-bold mb-2"
          value={customerObj.name}
          onChange={(e) =>
            setCustomerObj({ ...customerObj, name: e.target.value })
          }
        />
        {simpleValidator.current.message(
          "customerName",
          customerObj.name,
          "required|regex:^[a-zA-Z]*$",
          {
            messages: {
              regex: "Can only contain letter, spaces",
            },
          }
        )}
      </div>
      <div className="mb-2">
        <TextElement
          labelName="Date"
          type="date"
          id="date"
          name="transactionDate"
          htmlFor="date"
          inputClassName="w-full border border-gray-400 p-2 rounded-lg"
          labelClassName="block text-gray-700 font-bold mb-2"
          value={customerObj.date}
          onChange={(e) =>
            setCustomerObj({ ...customerObj, date: e.target.value })
          }
        />
        {simpleValidator.current.message(
          "transactionDate",
          customerObj.date,
          "required",
          {
            messages: {
              regex: "Date field required",
            },
          }
        )}
      </div>
      <div className="mb-2">
        <TextElement
          labelName="Price"
          type="number"
          id="price"
          name="price"
          htmlFor="price"
          inputClassName="w-full border border-gray-400 p-2 rounded-lg"
          labelClassName="block text-gray-700 font-bold mb-2"
          value={customerObj.price}
          onChange={(e) => {
            setCustomerObj({
              ...customerObj,
              price: e.target.value,
              amount: parseInt(e.target.value) * customerObj.quantity,
            });
          }}
        />
        {simpleValidator.current.message(
          "price",
          customerObj.price,
          "required|regex:^[0-9][0-9]*$",
          {
            messages: {
              regex: "Should contain positive numbers only",
            },
          }
        )}
      </div>
      <div className="mb-2">
        <TextElement
          labelName="Quantity"
          type="number"
          id="quantity"
          name="quantity"
          htmlFor="quantity"
          inputClassName="w-full border border-gray-400 p-2 rounded-lg"
          labelClassName="block text-gray-700 font-bold mb-2 text-[15px]"
          value={customerObj.quantity}
          onChange={(e) => {
            setCustomerObj({
              ...customerObj,
              quantity: e.target.value,
              amount: customerObj.price * parseInt(e.target.value),
            });
          }}
        />
        {simpleValidator.current.message(
          "quantity",
          customerObj.quantity,
          "required|regex:^[0-9][0-9]*$",
          {
            messages: {
              regex: "Should contain positive numbers only",
            },
          }
        )}
      </div>
      <div className="mb-2">
        <TextElement
          labelName="Amount"
          type="number"
          id="amount"
          htmlFor="amount"
          name="amount"
          inputClassName="w-full border border-gray-400 p-2 rounded-lg"
          labelClassName="block text-gray-700 font-bold mb-2"
          value={customerObj.amount}
          onChange={(e) =>
            setCustomerObj({ ...customerObj, amount: e.target.value })
          }
          disabled
        />
      </div>
      <div className="mb-2">
        <SelectElement
          htmlFor="status"
          labelName="Status"
          inputClassName="w-full border border-gray-400 p-2 rounded-lg"
          labelClassName="block text-gray-700 font-bold mb-2"
          onChange={(e) =>
            setCustomerObj({ ...customerObj, status: e.target.value })
          }
          value={customerObj.status}
          name="status"
          options={statusOptions}
          id="status"
        />
        {simpleValidator.current.message(
          "status",
          customerObj.status,
          "required|regex:^(?!.*select status).*$",
          {
            messages: {
              regex: "Please make a selection",
            },
          }
        )}
      </div>
      <Button
        name={modalOption.activity}
        className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        onClick={(e) => {}}
      />
    </form>
  );
};

export default TransactionForm;
