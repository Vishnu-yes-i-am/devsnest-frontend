import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import Card from './card';

function App(){
    return (<h1>Hello World!</h1>)
}
ReactDom.render(<Card />,document.getElementById('root'));