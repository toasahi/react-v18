import './App.css'

import {AutoBatchEventHandler} from "./components/AutoBatchEventHandler";
import {AutoBatchOtherHandler} from "./components/AutoBatchOtherHandler";

function App() {

    return (
        <div className="App">
            <AutoBatchEventHandler/>
            <AutoBatchOtherHandler/>
        </div>
    )
}

export default App
