import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));

declare global {
    interface Window{
        ethereum: any;
        web3: any;
        updateWeb3Modal: any;
    }
}

const elemRoot = document.getElementById('root');
if(!elemRoot) {
    throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(elemRoot);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
