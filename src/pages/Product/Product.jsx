import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";



const Product = () => {
    // const [products, setProducts] = useState([])
    const[uniqueProducts, setUniqueProducts] = useState([])
    const brands = useLoaderData()
    const {id} = useParams()
   const brand = brands.find(brand => brand.id == id);
    // console.log(brand);
   const {brand_name} = brand;
   useEffect(() => {
    fetch('https://automotive-store-server-2np4zgyhp-shapla-sarkers-projects.vercel.app/automotive')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // setProducts(data);
        // Filter products based on brand_name
        const uniqueProduct = data.filter(product => product.brand.toLowerCase() === brand_name.toLowerCase())
        console.log(uniqueProduct);
        setUniqueProducts(uniqueProduct)
    } )
   },[brand_name])
   
   console.log(uniqueProducts.length);
    return (
        <div className="w-11/12 lg:w-10/12 m-auto mt-14">

       
<div className="carousel w-full h-[70vh]">
  <div id="slide1" className="carousel-item relative w-full h-[70vh]">
    <img src="https://i.ibb.co/D8TzZZY/IMG-20231019-WA0014.jpg" className="w-full h-[70vh]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/424Jky2/IMG-20231019-WA0017.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qsB7N8J/IMG-20231019-WA0015.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/pQz7FJx/IMG-20231019-WA0024.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


         <h2 className=" mt-16 mb-8 text-3xl font-semibold text-center">
             Product of <span className="text-orange-600">{brand_name}</span> brand
         </h2>

            
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-20 ">
            {
                uniqueProducts.length > 0 ?
                 uniqueProducts?.map(product =>
                     <ProductCard key={product._id} product={product}></ProductCard> ): 
                     <p className=" text-blue-800 my-40 items-center grid col-span-2 text-4xl font-extrabold text-center">No Data Found
                      <img src="" alt="" />
                     </p>
            }
           </div>
        </div>
    );
};

export default Product;