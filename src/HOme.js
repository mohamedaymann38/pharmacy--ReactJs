import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Footer from './Footer'
const Home = () => {
  return (
    <>
    <section className='sec1'>
<Container>
  <Row>
    <Col md={7} sm={12} className='sec1text'>
      <h1>
        
The <span>easiest</span> way to <br></br>
refill your pharmacy’s
medications list
      </h1>
    </Col>
    <Col md={5} sm={12} className='sec1img'>
      <img src="/Images/background_1-a90d39d2-removebg-preview.png"/>
    </Col>
    
  </Row>
</Container>
<Form className=' searchbar justify-content-center d-flex  bd-highlight me-1'>
  <Container>
    <Row>
<Col md={7} sm={12}className=' searchbarmain ' >
<Form.Control className='me-2'
              type="search"
              placeholder="Search"
              // className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Find a Product</Button>
</Col>
    </Row>
  </Container>
</Form>
    </section>
    {/* start sec 2 cards */}
  <section className='cardssection '>
  <div class="row">
  <div class="col-sm-4">
    <div class="card ">
      <div class="card-body">
        <img src='Images\icon-ListHiFi-fdf8594e.svg'/>
        <h5 class="card-title">Never Let Shortages control Your Day</h5>
        <p class="card-text">Dawaamarts will help you to plan ahead and organize the shortage list. Searching many suppliers to secure it for you.</p>
        <a href="#" class="btn btn-primary">Start an order
</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card">
      <div class="card-body">
      <img src='Images\icon-Offer-410f4300.svg'/>

        <h5 class="card-title">Exclusive unmatched offers</h5>
        <p class="card-text">We brings the best offers from all suppliers in you region. Bringing your daily supplies at minimum price from multiple locations.</p>
        <a href="#" class="btn btn-primary">View more</a>

      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card">
      <div class="card-body">
      <img src='Images\icon-SuppliesHiFi-63c3c41f.svg'/>

        <h5 class="card-title">Plan now, order later</h5>
        <p class="card-text">We are your is your daily companion, Add all your needed supplies to your favorites list, and search for them at any time.</p>
        <a href="#" class="btn btn-primary">Create a list</a>
      </div>
    </div>
  </div>
</div>
 
  </section>
  <section className='swipersection'>
  <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><h1>Drugs</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Baby Care</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Men Care</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Women Care</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Gomla</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Home Care</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Flash Offer</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Hair Care </h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
        <SwiperSlide><h1>Fitness & Nutrition</h1><img src='/Images/DAWAA PNG.png' /></SwiperSlide>
      </Swiper>
  </section>
  <section className='section3 '>
  <h2>
The <span>first </span> online pharmacy 
supplies platform in Egypt
</h2>
    <Container>
      <Row>
        <Col md={4} sm={12} className='divRight'>
<div>
  <img src='\Images\featured_1-673c1273.svg'/>
  <h4>Get your pharmacy supplies, easier</h4>
  <p>Get the highest discounts, Reach for Shortage medications and <br/> View offers from different warehouses with convenience. All in <br/> one place</p>
</div>
        </Col>
        <Col md={4} sm={12} className='divRight '>
        <div className='me-2'>
          <img src='\Images\featured_2-4944812d.svg'/>
          <h4>Faster & convenient ordering process</h4>
          <p>We deliver your order from different Warehouses within 24 hours. <br/> Same day delivery if order is placed before 2:00 PM</p>
        </div>
        </Col>
        <Col md={4} sm={12} className='divRight'>
         <div> 
          <img src='/Images/featured_3-f2e4047b.svg'/>
          <h4>We are your daily companion</h4>
          <p>Helping you grow everyday. All pharmacymarts services are <br/>free, No registration or delivery fees. Saving time and money.</p></div>
        </Col>
      </Row>
    </Container>
  </section>
 <Footer/>
  </>
  )
}

export default Home