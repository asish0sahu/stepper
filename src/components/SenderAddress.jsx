/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import { TextField, Button, ButtonGroup } from "@mui/material";

const SenderAddress = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const btnDisabled =
    sender.name.length > 0 &&
    sender.street.length > 0 &&
    sender.city.length > 0 &&
    sender.zipCode.length > 0 &&
    sender.state.length > 0;

  const handleChange = (field) => (event) => {
    value.setSenderInfo(field)(event);
  };

  return (
    <form className="space-y-4">
      <h4 className="text-lg font-semibold">Enter Sender Details</h4>
      <TextField
        label="Enter Full Name"
        className="w-full"
        margin="normal"
        required
        onChange={handleChange("name")}
        value={sender.name}
      />
      <TextField
        label="Enter Street Address"
        className="w-full"
        margin="normal"
        required
        onChange={handleChange("street")}
        value={sender.street}
      />
      <div className="flex space-x-4">
        <TextField
          required
          className="w-1/3"
          label="Enter City"
          onChange={handleChange("city")}
          value={sender.city}
        />
        <TextField
          required
          className="w-1/3"
          label="Enter State"
          onChange={handleChange("state")}
          value={sender.state}
        />
        <TextField
          required
          className="w-1/3"
          label="Enter ZipCode"
          type="number"
          onChange={handleChange("zipCode")}
          value={sender.zipCode}
        />
      </div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        className="mt-4"
      >
        <Button
          disabled={!btnDisabled}
          onClick={() => value.nextPage()}
          className="mx-6 bg-blue-500 text-white"
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default SenderAddress;
