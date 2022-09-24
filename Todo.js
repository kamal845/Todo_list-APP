import React from "react";
import { useState } from "react";
const Todo = () => {
    const[inputData, setInputData] = useState("");
    const[items,setItems] = useState([]);
    const deleteItem=(id)=>{
    const updatedItems = items.filter((elem,ind)=>{
    return ind !== id;
})
setItems(updatedItems);
    }
    const addItem=()=>{
if(!inputData){

}   else {setItems([inputData,...items]);
        setInputData('')
    }
}
const removeAll=()=>{
    setItems([]);
}
    return ( 
    <>
    <div className="remove">
        <button className="hide" onClick={removeAll}>Reset</button>
    </div>
        <h2> My Todo App </h2> 
        <div className = "Main_div">
          <div className = "add_items">
           <input type = "text" placeholder = "&#9997;Add items" className = "got" value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
           <i className="fa fa-plus" aria-hidden="true" onClick={addItem}> </i> 
          </div>
          <div className="show_item">
            {items.map((elem,ind)=>{
return(
     <div className="each_item" key={ind}>
                <h3 className="roll">{elem}<i className="fa fa-trash add-btn"aria-hidden="true" title="Delete item" onClick={()=>deleteItem(ind)}> </i> </h3>
            </div>
)
            })}
          </div>
        </div> 
        </>
    )
}
export default Todo;