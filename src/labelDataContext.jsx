/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [labelInfo, setLabelInfo] = useState({
    sender: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    recevier: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    weight: "",
    shippingOption: "1"
  });

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleChange = (prop) => (event) => {
    setLabelInfo((prevLabelInfo) => ({
      ...prevLabelInfo,
      [prop]: event.target.value,
    }));
  };

  const setSenderInfo = (prop) => (event) => {
    setLabelInfo((prevLabelInfo) => ({
      ...prevLabelInfo,
      sender: { ...prevLabelInfo.sender, [prop]: event.target.value },
    }));
  };

  const setRecevierInfo = (prop) => (event) => {
    setLabelInfo((prevLabelInfo) => ({
      ...prevLabelInfo,
      recevier: { ...prevLabelInfo.recevier, [prop]: event.target.value },
    }));
  };

  const steps = [
    { title: "Get Sender address" },
    { title: "Get Receiver address" },
    { title: "Get Weight" },
    { title: "Get Shipping Option" },
    { title: "Confirm" }
  ];

  return (
    <LabelContext.Provider
      value={{
        page,
        steps,
        nextPage,
        prevPage,
        labelInfo,
        handleChange,
        setSenderInfo,
        setRecevierInfo,
      }}
    >
      {children}
    </LabelContext.Provider>
  );
};
