import React from 'react';
import Form from "../components/Form";
import Listagem from "../components/List";
import style from './App.module.scss'

function App() {
    return (
        <div className={style.AppStyle}>
            <Form/>
            <Listagem/>
        </div>
    );
}

export default App;
