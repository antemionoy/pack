import * as React from "react"
import * as ReactDOM from "react-dom"
import './assets/styles/index.scss'
import App from "./App";

const title = 'Title 4';

ReactDOM.render(
    <App title={title}/>,
    document.getElementById('app')
)

module.hot.accept()