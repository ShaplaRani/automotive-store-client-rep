import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const AutomotiveBrand = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
       fetch('brand.json')
       .then(res => res.json())
       .then(data => setBrands(data))
    },[])
    return (
        <div className="w-11/12 lg:w-10/12 m-auto">
            <div className="text-center">
            <h2 className="text-center mb-4 text-2xl font-semibold"> Our <span className="text-blue-600">Brands</span> </h2>
            <p className="text-lg font-medium max-w-xl m-auto text-center mb-10"> 
               Explore the top car brands known for style, performance and information on our platform
             </p>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                brands?.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard> )
            }
        </div>
        </div>
       
    );
};

export default AutomotiveBrand;