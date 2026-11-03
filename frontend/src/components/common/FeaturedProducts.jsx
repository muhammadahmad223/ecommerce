import React from 'react'
import ProductImg5 from '../../assets/images/five.jpg';
import ProductImg6 from '../../assets/images/six.jpg';
import ProductImg7 from '../../assets/images/seven.jpg';
import ProductImg8 from '../../assets/images/eight.jpg';

const FeaturedProducts = () => {
  return (
    <section className='section-2 py-5'>
        <div className='container'>
            <h2>Featured Products</h2>
            <div className='row mt-4'>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={ProductImg5} alt="Product" className='w-100' />
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
                            <img src={ProductImg6} alt="Product" className='w-100' />
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
                            <img src={ProductImg7} alt="Product" className='w-100' />
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
                            <img src={ProductImg8} alt="Product" className='w-100' />
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
                            <img src={ProductImg5} alt="Product" className='w-100' />
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
                            <img src={ProductImg6} alt="Product" className='w-100' />
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
                            <img src={ProductImg7} alt="Product" className='w-100' />
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
                            <img src={ProductImg8} alt="Product" className='w-100' />
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
export default FeaturedProducts