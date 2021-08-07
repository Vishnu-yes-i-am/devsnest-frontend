import { useState } from "react";

const Counter=(props)=>{
    const [count,setCount]=useState(0);
return(<div style={{backgroundColor:props.color,display:"inline-block",margin:'4px'}} className="counter" onClick={()=>{const value=count+1;
    setCount(value);
console.log("done");}}>{count}</div>)
}
export default Counter 