import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jfif'
import banner3 from '../../img/banner3.jpg'
import Button from 'react-bootstrap/Button';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Why donate blood?</h3>
                        <Button variant="light"><a
                            href="https://unb.com.bd/category/Lifestyle/why-to-give-blood-know-the-benefits-of-blood-donation/53021"
                            target="_blank">Learn from here</a></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>When to donate blood?</h3>
                        <Button variant="light"><a
                            href="https://www.redcrossblood.org/donate-blood/how-to-donate/eligibility-requirements/eligibility-criteria-alphabetical.html#:~:text=You%20must%20be%20at%20least,or%20limitations%20to%20your%20activities."
                            target="_blank">Learn from here</a></Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>When not to donate blood?</h3>
                        <Button variant="light"><a
                            href="https://www.doh.gov.ph/node/1436"
                            target="_blank">Learn from here</a></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;