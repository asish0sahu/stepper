/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import SenderAddress from "./components/SenderAddress";
import RecevierAddress from "./components/ReceiverAddress";
import Confirmation from "./components/Confirmation";
import GetWeight from "./components/GetWeight";
import ShippingOption from "./components/ShippingOption";
import PrintOnly from "./components/PrintOnly";
import { LabelContext } from "./labelDataContext";

const App = () => {
  const value = useContext(LabelContext);

  return (
    <div className="container mx-auto p-4">
      {value.page !== 5 && (
        <Stepper steps={value.steps} activeStep={value.page} />
      )}
      <div className="mt-8">
        {value.page === 0 && <SenderAddress />}
        {value.page === 1 && <RecevierAddress />}
        {value.page === 2 && <GetWeight />}
        {value.page === 3 && <ShippingOption />}
        {value.page === 4 && <Confirmation />}
        {value.page === 5 && <PrintOnly />}
      </div>
    </div>
  );
};

export default App;

