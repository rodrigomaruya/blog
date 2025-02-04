"use client";
import { createContext, ReactNode, useState } from "react";

interface ModalContextData {
  visible: boolean;
  handleVisibleModal: () => void;
  details: CardProps | undefined;
  handleTakeProperty: (
    url: string,
    title: string,
    description: string,
    data: string,
    slug: string
  ) => void;
}

interface CardProps {
  url: string;
  title: string;
  description: string;
  data: string;
  slug: string;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState<CardProps | undefined>();

  function handleTakeProperty(
    url: string,
    title: string,
    description: string,
    data: string,
    slug: string
  ) {
    setDetails({
      url: url,
      title: title,
      description: description,
      data: data,
      slug: slug,
    });
  }

  function handleVisibleModal() {
    setVisible(!visible);
  }

  return (
    <ModalContext
      value={{ visible, handleVisibleModal, details, handleTakeProperty }}
    >
      {children}
    </ModalContext>
  );
};
