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
        <div className="w-10/12 m-auto">
               <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                brands?.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard> )
            }
        </div>
        </div>
       
    );
};

export default AutomotiveBrand;