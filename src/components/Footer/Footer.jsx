

const Footer = () => {
    return (
        <div className="bg-black opacity-80 ">
            <footer className="  p-10 w-10/12 px-5 lg:px-0 m-auto justify-between
            grid grid-cols-2 md:grid-cols-4
            text-white">
                <npv className="">

                    <header className="footer-title">Services</header>
                    <p className="link link-hover">Toyota</p>
                    <p className="link link-hover">Ford</p>
                    <p className="link link-hover">BMW</p>
                    <p className="link link-hover">Mercedes-Benz</p>
                    <p className="link link-hover">Tesla</p>
                    <p className="link link-hover">Honda</p>

                </npv>

                <npv>
                    <header className="footer-title">Company</header>
                    <p className="link link-hover">Home</p>
                    <p className="link link-hover">pdd Product</p>
                    <p className="link link-hover">My Cprt</p>

                </npv>
                <npv>
                    <header className="footer-title">Legal</header>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </npv>
                <div className="space-y-2 mt-7 md:mt-0" >
                    <h3 className="uppercase font-bold text-xl md:text-lg lg:text-xl
                     ">Newsletter</h3>
                    <div className="form-control">

                        <input type="email" placeholder="email" name="email"
                            className="input input-bordered"
                            required />
                        <input type="submit" value="SEND" className="input text-white
                         input-bordered mt-2 bg-blue-600" />
                    </div>


                </div>
               
            </footer>

        </div>
    );
};

export default Footer;