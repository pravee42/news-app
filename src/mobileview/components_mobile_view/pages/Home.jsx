import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards"

import SwiperCore, {
  EffectCards
} from 'swiper';


import './home.css'

// // import Swiper core and required modules
// import SwiperCore, {
//   EffectCards
// } from 'swiper';

SwiperCore.use([EffectCards]);

export default function Home() {
    const [news, setNews] = useState([]);
    const get = async() => {
        // await SwiperCore.use([EffectCards]);
        await axios.get("https://newsapi-abipravi.herokuapp.com/news").then(res => setNews(res.data))
        console.log("Got!!!")
    }
    useEffect(() => {
        get()
    }, [])


    return (
        <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
            {news.length === 0 ? <p>Loadinfo</p> : (
                <div>
                    {
                        news.map(data => {
                            return(
                                <SwiperSlide >
                                    <p>{data.news}</p>
                                    <p>{data.shortnews}</p>
                                </SwiperSlide>        
                            )
                        })
                    }
                </div>
           )}
        </Swiper>
    )
}
