import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Route} from "react-router-dom";
import App from "./App.jsx";

import "./assets/less/index.less"

ReactDOM.render(<Route><App /></Route>,document.getElementById("outerLayer"));