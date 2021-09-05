import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/upload-files.component";

function App() {
  return (
    <div className="container">
      
      <h4>React Image Upload with Preview</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;
