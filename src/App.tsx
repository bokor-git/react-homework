import React from 'react';
import './App.css';
import {MessageList} from "./Messenger";
import {TaskList} from "./TaskList";

function App() {
    return (
        <div className="App">
            {/*<MessageList/>*/}
            <TaskList/>
        </div>
    );
}

export default App;
