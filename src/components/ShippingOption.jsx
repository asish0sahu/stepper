/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import { FormControlLabel, Radio, RadioGroup, Button, ButtonGroup } from "@mui/material";

const GetShippingOption = (props) => {
  const val = useContext(LabelContext);
  const [shipping, setShipping] = useState("");
  const setId = (event) => {
    event.preventDefault();
    setShipping(event.target.value);
  };
  const btnDisabled = shipping.length > 0;

  return (
    <form className="space-y-4">
      <h4 className="text-lg font-semibold">Select Shipping Option</h4>
      <RadioGroup
        aria-label="weight"
        name="weight"
        value={shipping}
        className="form"
        onChange={setId}
      >
        <FormControlLabel
          control={<Radio />}
          label="Ground"
          value="1"
          onChange={val.handleChange("shippingOption")}
          className="mb-2"
        />
        <FormControlLabel
          control={<Radio />}
          label="Priority"
          value="2"
          onChange={val.handleChange("shippingOption")}
          className="mb-2"
        />
      </RadioGroup>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        className="mt-4"
      >
        <Button onClick={() => val.prevPage()} className="mx-6 bg-blue-500 text-white">
          Previous
        </Button>
        <Button
          disabled={!btnDisabled}
          onClick={() => val.nextPage()}
          className="mx-6  bg-blue-500 text-white"
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default GetShippingOption;
