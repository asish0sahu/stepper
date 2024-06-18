/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import { TextField, InputAdornment, Button, ButtonGroup } from "@mui/material";

const GetWeight = (props) => {
  const value = useContext(LabelContext);
  const weight = value.labelInfo.weight;
  const btnDisabled = weight.length > 0;

  return (
    <form className="space-y-4">
      <h4 className="text-lg font-semibold">Enter Weight Details</h4>
      <TextField
        id="standard-full-width"
        label="Enter Weight **Numbers Only"
        className="w-full"
        margin="normal"
        type="number"
        required
        onChange={value.handleChange("weight")}
        value={weight}
        InputProps={{
          startAdornment: <InputAdornment position="start">lbs:</InputAdornment>
        }}
      />
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        className="mt-4"
      >
        <Button onClick={() => value.prevPage()} className="mx-6">
          Previous
        </Button>
        <Button
          disabled={!btnDisabled}
          onClick={() => value.nextPage()}
          className="mx-6"
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default GetWeight;
