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
        <div className="mt-24">
            <h2 className="text-center mb-4 text-2xl font-semibold"> Our <span className="text-blue-600">Gallery</span> </h2>
            <p className="text-lg font-medium max-w-3xl m-auto text-center mb-10">  Explore our captivating Gallery for a visual journey through the world of automobiles. From sleek supercars to vintage classics and off-road adventures, our curated collection showcases the beauty and innovation of the automotive industry</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full ">
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

