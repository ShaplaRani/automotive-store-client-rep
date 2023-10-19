import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Cart = () => {
    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState( loadedCarts);
    console.log(carts);

    const handleDelete = id => {
        console.log(id);
        fetch(`https://automotive-store-server-2np4zgyhp-shapla-sarkers-projects.vercel.app/cart/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // if(data.deletedCount > 0){
            //     console.log('deleted successfully');
            //     const remainingCart = carts.filter(cart => cart._id !== id);
            //     setCarts(remainingCart);
            // }
        })
       
    }
    
  
    return (
        <div className="w-10/12  m-auto">
          <div className="w-7/12 m-auto   mt-20">
            {
            carts?.map(cart =>  <p className="border mt-5" key={cart._id}>{cart.name} 
              <button onClick={() => handleDelete(cart._id)} className='btn'>X</button>
             </p>)
           }
          </div>
        </div>
    );
};

export default Cart;