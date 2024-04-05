import React, { useState } from "react";
import Editor from "@monaco-editor/react";
function Practice() {
  const [code, setCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runCode = () => {
    try {
      // Clear console before executing new code
      setConsoleOutput([]);

      // Capture console output
      const oldConsoleLog = console.log;
      console.log = (message) => {
        setConsoleOutput((prevOutput) => [...prevOutput, message]);
        //   oldConsoleLog.apply(console, arguments);
      };

      eval(code);

      // Restore console.log
      console.log = oldConsoleLog;
    } catch (error) {
      console.error("Error:", error.message);
      setConsoleOutput((prevOutput) => [
        ...prevOutput,
        "Error: " + error.message,
      ]);
    }
  };
  return (
    <div>
      <div className="editor">
        <Editor
          height="60vh"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={code}
          onChange={(value) => setCode(value)}
        />
      </div>
      <button onClick={runCode} style={{backgroundColor:"white" ,color:"black", padding:"5px 20px",borderRadius:"5px", fontWeight:"bold",margin:"10px 0px"
    }}>Run</button>
      <div className="console" style={{ color: "white",border:"1px dotted white", height:"30vh"}}>
        {consoleOutput.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default Practice;
