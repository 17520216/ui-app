import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import "antd/dist/antd.min.css";
import UIinput from "./component/UIInput";
import UIOutput from "./component/UIOutput";

function App() {
  const [option, setOption] = useState(-1);

  return (
    <div className="App">
      <header className="App-header">UI App</header>
      <div className="main">
        <UIinput option={(param) => setOption(param)} />
        <UIOutput option={option} />
      </div>
    </div>
  );
}

export default App;
