import "./App.css";
import React from "react";
import QRCode from "react-qr-code";

function App() {
  return (
    <div>
      <QRCode
        size={200}
        bgColor="white"
        fgColor="black"
        value="https://github.com/1am-programmer?tab=repositories"
      />
      <p className="scan">Scan QR code to view my github Repository</p>
    </div>
  );
}

export default App;
