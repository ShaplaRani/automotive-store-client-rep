import { useEffect, useState } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      fetch("/gallery.json")
      .then(res => res.json())
      .then(data => setImages(data))
    },[])
    console.log(images);
    return (
        <div className="mt-20">
            <h2 className="text-center mb-6 text-2xl font-semibold">Gallery </h2>
            <div className="grid grid-cols-4 gap-5 w-full ">
                {
                    images?.map(image => <div key={image.ig}>
                        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="h-80" src={image.image} alt= "" /></figure>
  
</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;

