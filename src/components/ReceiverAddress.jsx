/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import { TextField, Button, ButtonGroup } from "@mui/material";

const RecevierAddress = (props) => {
  const value = useContext(LabelContext);
  const recevier = value.labelInfo.recevier;
  const btnDisbaled =
    recevier.name.length > 0 &&
    recevier.city.length > 0 &&
    recevier.zipCode.length > 0 &&
    recevier.state.length > 0;

  return (
    <form className="space-y-4">
      <h4 className="text-lg font-semibold">Enter Recevier Details</h4>
      <TextField
        label="Enter Full Name"
        className="w-full"
        margin="normal"
        required
        onChange={value.setRecevierInfo("name")}
        value={recevier.name}
      />
      <TextField
        label="Enter Street Address"
        className="w-full"
        margin="normal"
        required
        onChange={value.setRecevierInfo("street")}
        value={recevier.street}
      />
      <div className="flex space-x-4">
        <TextField
          required
          className="w-1/3"
          label="Enter City"
          onChange={value.setRecevierInfo("city")}
          value={recevier.city}
        />
        <TextField
          required
          className="w-1/3"
          label="Enter State"
          onChange={value.setRecevierInfo("state")}
          value={recevier.state}
        />
        <TextField
          required
          className="w-1/3"
          label="Enter ZipCode"
          type="number"
          onChange={value.setRecevierInfo("zipCode")}
          value={recevier.zipCode}
        />
      </div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        className="mt-4"
      >
        <Button onClick={() => value.prevPage()} className="mx-6 mr-3">
          Previous
        </Button>
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          className="mx-6"
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default RecevierAddress;
