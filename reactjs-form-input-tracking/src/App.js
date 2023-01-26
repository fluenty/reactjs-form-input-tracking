import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input/Input";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
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
        <Checkbox label="Check box 1" />
        <MultiSelect
          options={[
            { label: "Option 1", value: "opt1" },
            { label: "Option 2", value: "opt2" },
            { label: "Option 3", value: "opt3" },
          ]}
          onChange={(selectedOptions) => console.log(selectedOptions)}
        />
        <Input label="input 1" />
        <Input label="input 2" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "3rem",
        }}
      >
        <Checkbox label="Check box 2"/>
        <MultiSelect
          options={[
            { label: "Option 1", value: "opt1" },
            { label: "Option 2", value: "opt2" },
            { label: "Option 3", value: "opt3" },
          ]}
          onChange={(selectedOptions) => console.log(selectedOptions)}
        />
        <Input label="input 3" />
        <Input label="input 4" />
      </div>
    </div>
  );
}

export default App;
