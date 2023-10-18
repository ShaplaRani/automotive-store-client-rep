import swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        

      const newProduct = {name, brand, type,price,description,rating,photo}
      console.log(newProduct);

      //send data to the server
      fetch('http://localhost:5000/automotive', {
        method:"POST",
        headers: {
            'content-type' : " application/json"
        },
        body:JSON.stringify(newProduct)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
            swal.fire({
                title: 'Success!',
                text: 'Coffee added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      })
    }
    return (
        <div>

<div className="">
             <div className="my-14">
               <h3 className="text-2xl md:text-3xl  text-center font-medium md:font-semibold
                 text-gray-800 "> Add new product</h3>
             </div>
               <div className="w-5/6 lg:w-2/5 bg-orange-200 rounded-lg shadow-md py-20 m-auto
                mt-10 mb-40">
                   
                  
                <form onSubmit={handleAddProduct} className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto">
                    {/* image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 ">Image:</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered"
                         required />
                    </div>
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 "> Name:</span>
                        </label>
                        <input type="text" placeholder="Name" name="name"
                         className="input input-bordered"
                         required />
                    </div>
                    {/* brand name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 ">Brand Name:</span>
                        </label>
                        <input type="text" placeholder="Enter your brand name" name="brand"
                         className="input input-bordered"
                         required />
                    </div>
                    {/* type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 ">Type:</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="type"
                         className="input input-bordered"
                         required />
                    </div>
                    {/* price */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 ">Price:</span>
                        </label>
                        <input type="number" placeholder="Price" name="price"
                         className="input input-bordered"
                         required />
                    </div>
                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 ">Description:</span>
                        </label>
                       
                        <input type="text" placeholder="Description" name="description"
                         className="input input-bordered"
                         required />
                    </div>
                    {/* rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 ">Rating:</span>
                        </label>
                        {/* <input type="number" name="rating" min="1" max="5" step="0.1" required><br> */}
                        <input type="number" placeholder="rating" name="rating" min="1" max="5" step="0.1"
                         className="input input-bordered"
                         required />
                    </div>

                    
                    <div className="form-control mt-6">
                        <button className="btn text-xl font-semibold bg-orange-600
                         text-white">Submit</button>
                    </div>
                </form>
               
            </div>
        </div>

            
        </div>
    );
};

export default AddProduct;