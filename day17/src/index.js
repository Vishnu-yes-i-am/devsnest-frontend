import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import Card from './card';

function App(props){
    const [currcard,setcurrcard]=useState(Card)
    return (<div class="container">
        <Card title="pizza" info="you have consumed 120 calories"/>
        <Card title="burger" info="you have consumed 150 calories"/>
        <Card title="chocolate" info="you have consumed 80 calories"/>
        <Card title="juice" info="you have consumed 100 calories"/>
        <Card title="apple" info="you have consumed 350 calories"/>
    </div>)
}
ReactDom.render(<App/>,document.getElementById('root'));