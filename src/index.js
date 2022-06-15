import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss'
import App from "./App";

const title = 'Title 4';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <App title={title}/>
);

// ReactDOM.render(
//     <App title={title}/>,
//     document.getElementById('app')
// )

module.hot.accept()