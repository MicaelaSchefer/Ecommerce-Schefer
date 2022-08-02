import {useState, useEffect} from 'react'
import product from '../../utils/product.mock';
import ItemDetail from '../../ItemDetail/ItemDetail';


const ItemDetailContainer= ({section}) => {
    const [listProduct, setProduct] =useState([])
    const getProduct = new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(product)
        }, 2000)
    })
      
    useEffect(() => {
          getProduct
               .then((res) => {
                 setProduct(res)
               })
               .catch((error) =>{
                 console.log("no found")
               })
               .finally((done) => {})
               },[])
   


        return(
            <div>
             
             <ItemDetail dataProduct= {listProduct}/>
            </div>


        )




}

export default ItemDetailContainer;