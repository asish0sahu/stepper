/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../labelDataContext";
import { TextField, InputAdornment, Button, ButtonGroup } from "@mui/material";
import { upper } from "../common/normalization";

const PrintOnly = () => {
  const value = useContext(LabelContext);
  const [shippingCoast, setShippingCoast] = useState(0);

  useEffect(() => {
    const weight = value.labelInfo.weight;
    const shippingOption = value.labelInfo.shippingOption;

    const shippingRate = 0.4;
    const shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    setShippingCoast(shippingTotal);
  }, [value.labelInfo.weight, value.labelInfo.shippingOption]);

  return (
    <>
      <h6 className="text-lg font-semibold">Sender Information</h6>
      <div className="space-y-4">
        <div className="space-y-2">
          <TextField
            className="w-full"
            label="Full Name"
            value={upper(value.labelInfo.sender.name)}
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            label="Street Address"
            className="w-full"
            margin="normal"
            value={upper(value.labelInfo.sender.street)}
            InputProps={{
              readOnly: true
            }}
          />
          <div className="flex space-x-4">
            <TextField
              required
              className="w-1/3"
              label="City"
              value={upper(value.labelInfo.sender.city)}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              required
              className="w-1/3"
              label="State"
              value={upper(value.labelInfo.sender.state)}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              required
              className="w-1/3"
              label="ZipCode"
              value={value.labelInfo.sender.zipCode}
              InputProps={{
                readOnly: true
              }}
            />
          </div>
        </div>
        <h6 className="text-lg font-semibold">Receiver Information</h6>
        <div className="space-y-2">
          <TextField
            label="Full Name"
            className="w-full"
            value={upper(value.labelInfo.recevier.name)}
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            className="w-full"
            label="Street Address"
            margin="normal"
            value={upper(value.labelInfo.recevier.street)}
            InputProps={{
              readOnly: true
            }}
          />
          <div className="flex space-x-4">
            <TextField
              required
              className="w-1/3"
              label="City"
              value={upper(value.labelInfo.recevier.city)}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              required
              className="w-1/3"
              label="State"
              value={upper(value.labelInfo.recevier.state)}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              required
              className="w-1/3"
              label="ZipCode"
              value={value.labelInfo.recevier.zipCode}
              InputProps={{
                readOnly: true
              }}
            />
          </div>
        </div>
        <h6 className="text-lg font-semibold">Shipping Information</h6>
        <div className="flex space-x-4">
          <TextField
            required
            className="w-1/3"
            label="Weight **lbs"
            value={value.labelInfo.weight}
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            required
            className="w-1/3"
            label="Shipping Type"
            value={value.labelInfo.shippingOption === "1" ? "GROUND" : "PRIORITY"}
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            required
            className="w-1/3"
            label="Shipping Cost"
            value={shippingCoast}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">INR.</InputAdornment>
              ),
              readOnly: true
            }}
          />
        </div>
        <ButtonGroup
          color="secondary"
          aria-label="text primary button group"
          className="mt-4"
        >
          <Button onClick={() => value.prevPage()} className="mx-6">
            Go Back
          </Button>
          <Button onClick={() => window.print()} className="mx-8">
            Print Info
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default PrintOnly;
