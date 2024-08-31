import React, { useState } from "react";
import Barcode from "react-barcode";

function BarcodeGnr() {
  const [text, setText] = useState();
  const [barcode, setBarcode] = useState();
  const generateBarcode = () => {
    setBarcode(text);
  };
  return (
    <div className="d-flex flex-column align-items-center w-75 mx-auto">
      <span className="w-100">
        <h2 className="text-center text-white bg-success py-3 px-4">
          Barcode generator
        </h2>
      </span>
      <div className="w-100 mt-3 d-flex">
        <input
          type="text"
          className="form-control me-2 flex-grow-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn btn-primary px-4 py-2 rounded"
          onClick={generateBarcode}
        >
          Generate barcode
        </button>
      </div>
      <div className="row">
        {" "}
        <Barcode value={barcode} />
      </div>
    </div>
  );
}

export default BarcodeGnr;
