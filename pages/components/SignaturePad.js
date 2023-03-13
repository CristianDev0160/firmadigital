import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const styles = {
  border: "1px solid black",
  width: "90%",
  height: "600px",
};

function Signature() {
  const canvasRef = useRef(null);

  const handleClear = () => {
    canvasRef.current.clear();
  };

  const handleSavePNG = () => {
    const data = canvasRef.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "signature.png";
    link.href = data;
    link.click();
  };

  return (
    <>
      <SignatureCanvas
        ref={canvasRef}
        penColor="black"
        canvasProps={{ style: styles }}
      />
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSavePNG}>Save PNG</button>
      </div>
    </>
  );
}

export default Signature;
