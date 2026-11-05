import React from 'react';
import ProductImg from '../../assets/images/two.jpg';
import ProductImg3 from '../../assets/images/five.jpg';
import ProductImg4 from '../../assets/images/four.jpg';
import ProductImg5 from '../../assets/images/eight.jpg';
import { Link } from 'react-router-dom';
const LatestProducts = () => {
    return (
      <section className='section-2 pt-5'>
    <div className='container'>
        <h2>New Arrivals</h2>
        <div className='row mt-4'>
            <div className='col-md-3 col-6'>
                <div className='product card border-0'>
                    <div className='card-img'>
                        <Link to="/shop">
                            <img src={ProductImg} alt="Product" className='w-100' />
                        </Link>
            
                    </div>
                    <div className='card-body'>
                        <a href="#">Red Check Shirt for Mens</a>
                        <div className='price'>
                            $50 <span className='text-decoration-line-through'>$80</span>
                        </div>
                    </div>
                </div>
            </div>
                
                  <div className='col-md-3 col-6'>
                <div className='product card border-0'>
                    <div className='card-img'>
                          <Link to="/shop">
                            <img src={ProductImg3} alt="Product" className='w-100' />
                        </Link>
                    </div>
                    <div className='card-body'>
                        <a href="#">Red Check Shirt for Mens</a>
                        <div className='price'>
                            $50 <span className='text-decoration-line-through'>$80</span>
                        </div>
                    </div>
                </div>
            </div>
                 <div className='col-md-3 col-6'>
                <div className='product card border-0'>
                    <div className='card-img'>
                          <Link to="/shop">
                            <img src={ProductImg4} alt="Product" className='w-100' />
                        </Link>
                    </div>
                    <div className='card-body'>
                        <a href="#">Red Check Shirt for Mens</a>
                        <div className='price'>
                            $50 <span className='text-decoration-line-through'>$80</span>
                        </div>
                    </div>
                </div>
            </div>
                   <div className='col-md-3 col-6'>
                <div className='product card border-0'>
                    <div className='card-img'>
                          <Link to="/product">
                            <img src={ProductImg5} alt="Product" className='w-100' />
                        </Link>
                    </div>
                    <div className='card-body'>
                        <a href="#">Red Check Shirt for Mens</a>
                        <div className='price'>
                            $50 <span className='text-decoration-line-through'>$80</span>
                        </div>
                    </div>
                </div>
            </div>
                 
                
                 
        </div>
    </div>   {/* yeh missing tha: container band */}
</section>        
    )
}
export default LatestProducts;