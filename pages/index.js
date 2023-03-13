import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import SignaturePad from "./components/SignaturePad";
import SketchCanvas from "./components/SketchCanvas";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //Esto es del Signature
  const handleSave = (dataUrl) => {
    console.log(dataUrl);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <SketchCanvas />
        {/* <SignaturePad onSave={handleSave} /> */}
      </div>
    </>
  );
}
