import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
    return(
        <div>
             <h5>{product.name}</h5>
               <p>{product.precio}</p>
               <ItemCount/>
        </div>
    );
};


export default ItemDetail;