import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
};

export default function SketchCanvas() {
  const canvasRef = useRef();

  const handleSavePNG = () => {
    canvasRef.current.exportImage("png", false, "#FFFFFF00").then((data) => {
      console.log(data);
    });
  };

  const handleSaveSVG = () => {
    canvasRef.current.exportSvg().then((data) => {
      console.log(data);
      const blob = new Blob([data], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      // Crear el enlace de descarga
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "signature.svg";

      // Agregar el enlace al DOM y disparar un evento click para iniciar la descarga
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Eliminar el enlace del DOM después de la descarga
      document.body.removeChild(downloadLink);
    });
  };

  const handleClear = () => {
    canvasRef.current.clearCanvas();
  };

  return (
    <>
      <ReactSketchCanvas
        ref={canvasRef}
        style={styles}
        width="90%"
        height="400px"
        strokeWidth={3}
        strokeColor="black"
        backgroundColor="transparent"
      />
      <div>
        <button onClick={handleSavePNG}>Save PNG</button>
        <button onClick={handleSaveSVG}>Save SVG</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <img id="svg-image" src="" alt="" />
    </>
  );
}
