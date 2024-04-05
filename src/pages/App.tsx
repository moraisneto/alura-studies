import React from 'react';
import Form from "../components/Form";
import Listagem from "../components/List";
import style from './App.module.scss'
import Chronometer from "../components/Chronometer";

function App() {
    return (
        <div className={style.AppStyle}>
            <Form/>
            <Listagem/>
            <Chronometer />
        </div>
    );
}

export default App;
