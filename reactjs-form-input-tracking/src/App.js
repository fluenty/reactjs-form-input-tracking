import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input/Input";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Checkbox from "./components/Checkbox/Checkbox";
import ReactGA from "react-ga4";
import { v4 as uuidv4 } from "uuid";

const TRACKING_ID = "G-23D0T176JV";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    // Use uuid to generate unique string.
    const session_id = uuidv4(); 
    window.sessionStorage.setItem("session_id", session_id);
  }, []);

  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "3rem",
        }}
      >
        <Checkbox label="Check box 1" name={"Checkbox1"} />
        <MultiSelect
          name={"MultiSelect1"}
          options={[
            { label: "Option 1", value: "opt1" },
            { label: "Option 2", value: "opt2" },
            { label: "Option 3", value: "opt3" },
          ]}
          onChange={(selectedOptions) => console.log(selectedOptions)}
        />
        <Input label="input 1" inputName="input1" />
        <Input label="input 2" inputName="input2" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "3rem",
        }}
      >
        <Checkbox label="Check box 2" name={"Checkbox2"} />
        <MultiSelect
          name={"MultiSelect2"}
          options={[
            { label: "Option 1", value: "opt1" },
            { label: "Option 2", value: "opt2" },
            { label: "Option 3", value: "opt3" },
          ]}
          onChange={(selectedOptions) => console.log(selectedOptions)}
        />
        <Input label="input 3" inputName="input3" />
        <Input label="input 4" inputName="input4" />
      </div>
    </div>
  );
}

export default App;
