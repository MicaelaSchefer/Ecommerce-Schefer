

const ItemList =(dataProducts)=>{
     return(
        <>
        {dataProducts.map( (product)=>
            { return <ItemList key={product.id} data={product} /> 

            })}
            
        </>
     )

}

export default ItemList