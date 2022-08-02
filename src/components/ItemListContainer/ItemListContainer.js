import {useState, useEffect} from 'react'
import products from '../../utils/products.mock';
import ItemList from '../../ItemList/ItemList';


const ItemListContainer= ({section}) => {
    const [listProducts, setListProducts] =useState([])
    const getProducts = new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })
      
    useEffect(() => {
          getProducts
               .then((res) => {
                 setListProducts(res)
               })
               .catch((error) =>{
                 console.log("no found")
               })
               .finally((done) => {})
               },[])
   


        return(
            <div>
             
             <ItemList dataProducts= {listProducts}/>
            </div>


        )




}

export default ItemListContainer;