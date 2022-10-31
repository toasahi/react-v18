import './App.css'

import {AutoBatchEventHandler} from "./components/AutoBatchEventHandler";
import {AutoBatchOtherHandler} from "./components/AutoBatchOtherHandler";
import {Transition} from "./components/Transition";


function App() {

    return (
        <div className="App">
            <AutoBatchEventHandler/>
            <AutoBatchOtherHandler/>
            <Transition/>
        </div>
    )
}

export default App
