import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Counter from './counter';
import './styles.css';
function App(props){
    return (<div><Counter color='red'></Counter>
        <Counter color='blue'></Counter>
        <Counter color='yellow'></Counter>
        <Counter color='green'></Counter></div>
    )
}
ReactDom.render(<App/>,document.getElementById('root'));