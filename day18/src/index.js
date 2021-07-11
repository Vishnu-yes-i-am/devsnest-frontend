import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import Card from './card';

function App(){
    return (<div class="container"> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
    </div>)
}
ReactDom.render(<App/>,document.getElementById('root'));