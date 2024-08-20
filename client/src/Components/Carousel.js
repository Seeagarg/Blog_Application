import React from 'react'
// import SwiperCore, {Autoplay } from 'swiper'
import { Swiper, SwiperSlide,} from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
import classes from './Carousel.module.css'


const Carousel = () => {
    
  return (
    <div>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 1000 }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/assets/b4.jpg" alt="" className={classes.img} />
            <div className={classes.data}>
            <div>
            <p>User Name</p>
            </div>
            <div className={classes.action}>
            <span>Like</span>
            <span>Comment</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/b2.jpg" alt="" className={classes.img} />
            <div className={classes.data}>
            <div>
            <p>User Name</p>
            </div>
            <div className={classes.action}>
            <span>Like</span>
            <span>Comment</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/b3.webp" alt="" className={classes.img} />
            <div className={classes.data}>
            <div>
            <p>User Name</p>
            </div>
            <div className={classes.action}>
            <span>Like</span>
            <span>Comment</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/b4.jpg" alt="" className={classes.img} />
            <div className={classes.data}>
            <div>
            <p>User Name</p>
            </div>
            <div className={classes.action}>
            <span>Like</span>
            <span>Comment</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/b6.png" alt="" className={classes.img} />
            <div className={classes.data}>
            <div>
            <p>User Name</p>
            </div>
            <div className={classes.action}>
            <span>Like</span>
            <span>Comment</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/b3.webp" alt="" className={classes.img} />
            <div className={classes.data}>
            <div>
            <p>User Name</p>
            </div>
            <div className={classes.action}>
            <span>Like</span>
            <span>Comment</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/b2.jpg" alt="" className={classes.img}/>
            <div className={classes.data}>
            <div>
            <p>User Name</p>
            </div>
            <div className={classes.action}>
            <span>Like</span>
            <span>Comment</span>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
     
      
    </div>
  )
}

export default Carousel
