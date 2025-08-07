import React from 'react';
import Brand from '../../assets/icons/Hekto.svg'

const footer = () => {
    return (
        <>
        <footer className='footer_bg'>
            <div className="container">
                <div className="footer">
                    <div className="foot_navigate">
                        <img src={Brand} alt="" />
                        <div className='input_foot'>
                            <input type="text" placeholder='Enter Email Address' />
                            <button>Sign Up</button>
                        </div>
                        <p>Contact Info</p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="foot_navigate">
                        <h3>Catagories</h3>
                        <p>Laptops & Computers</p>
                        <p>Cameras & Photography</p>
                        <p>Smart Phones & Tablets</p>
                        <p>Video Games & Consoles</p>
                        <p>Waterproof Headphones</p>
                    </div>
                    <div className="foot_navigate">
                        <h3>Customer Care</h3>
                        <p>My Account</p>
                        <p>Discount</p>
                        <p>Returns</p>
                        <p>Orders History</p>
                        <p>Order Tracking</p>
                    </div>
                    <div className="foot_navigate">
                        <h3>Pages</h3>
                        <p>Blog</p>
                        <p>Browse the Shop</p>
                        <p>Category</p>
                        <p>Pre-Built Pages</p>
                        <p>Visual Composer Elements</p>
                        <p>WooCommerce Pages</p>
                    </div>
                </div>
            </div>
        </footer>
            
        </>
    );
};

export default footer;