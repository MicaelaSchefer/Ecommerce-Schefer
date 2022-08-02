import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
    return(
        <div>
             <h5>{product.id}</h5>
               <p>{product.price}</p>
               <ItemCount/>
        </div>
    );
};


export default ItemDetail;