import { useState } from "react";

const Card=(props)=>{
    const [state,setState]=useState('inline-block');
    const t=props.title;
    const i=props.info;
    return (<div className="card" style={{display:state}}>
        <h1 className="title">{t}</h1>
        <h2 className="info">{i}</h2>
        <button style={{margin:'auto'}} onClick={()=>{
            setState('none')
        }}>Delete </button>
    </div>);
    };
export default Card;