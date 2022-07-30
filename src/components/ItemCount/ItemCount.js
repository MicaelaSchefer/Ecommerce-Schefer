import {useState} from 'react'

const  ItemCount = () =>{

   const [count,setCount]= useState(1)
   const addProduct = () => {
       setCount(count + 1)
   }

   const addProductremove =() =>{
       setCount (count -1)

   }
    return(
        <div>
        <button onClick={addProductremove}>-</button>
        <p>{count}</p>
        <button onClick={addProduct}>+</button>
        
        
        </div>


    )
}

export default ItemCount;