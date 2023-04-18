import { ReactNode } from "react";

export interface TextElementI {
  id: string;
  labelClassName: string;
  htmlFor: string;
  labelName: string;
  inputClassName: string;
  value: string;
  onChange: (e: any) => void;
  options: any;
  name:string;
}

export interface ImageUploadI{
    getImage: (image: string) => void;
}

export interface TableCellI {
  children: ReactNode;
  className: string;
}

export interface ButtonI {
  name: string;
  onClick: (e: any) => void;
  className?: string;
}

export interface modalInterface {
        isOpen: boolean;
        activity: string;
        selectedTransaction?: string;
}
export interface customerAction {
  id?: string;
  name?: string;
  date?: string;
  price?: string;
  amount?: string;
  status?: string;
  quantity?: string;
  profileImage?: string;
}
export interface transactionDataInterface {
  id?: string;
  name?: string;
  date?: string;
  price?: string;
  amount?: string;
  status?: string;
  quantity?: string;
  profileImage?: string;
}
