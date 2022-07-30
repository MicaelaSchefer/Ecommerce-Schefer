import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer= ({title}) => {

        return(
            <div>
             <img src="/assets/rcKitten.png" alt="Imagen producto"/>
             <p>{title}</p>
             <spam>$1000 kg</spam>  
             <ItemCount/> 
             <button>Comprar</button>
            


            </div>


        )




}

export default ItemListContainer;