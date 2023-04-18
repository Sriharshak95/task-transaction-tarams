import React, { ReactNode } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../appStore/store";
import { showModal } from "../appStore/modalReducer";

const Modal: React.FC<{ children: ReactNode }> = (props) => {
  const isOpen = useSelector((state: RootState) => state.modalOpen.modalOption.isOpen);
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center h-full">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="relative bg-white w-full max-w-lg p-8 overflow-auto">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button className="text-[20px]" onClick={() => dispatch(showModal({isOpen:false, activity: 'create', selectedTransaction:''}))}>&times;</button>
              </div>
              <div className="h-full">{props.children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

