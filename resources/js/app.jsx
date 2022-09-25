import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import { Fragment } from 'react';

function App() {
    return (
    <Fragment>
        <h1>こんにちは！react!</h1>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">aaa</div>
            </div>
        </div>
    </Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);