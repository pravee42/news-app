import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import bookmark from '../../icons/dark_nav_bar_icons/bookmark.png';
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
    const [theme, setTheme] = useState("");
    const get = async() => {
        // await SwiperCore.use([EffectCards]);
        await axios.get("https://newsapi-abipravi.herokuapp.com/news").then(res => setNews(res.data))
        console.log("Got!!!")
    }
    useEffect(() => {
        get()
    }, [])

    useEffect(() => async () =>{
        await setTheme(localStorage.getItem("theme"))
    }, [localStorage.getItem("theme")]);


    return (
        <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
            {theme === "dark" ? 
                news.length === 0 ? <p className="swiper-slide">Loadinfo</p> : (
                <div>
                    {
                        news.map(data => {
                            return(
                                <SwiperSlide className="swiper-slide-dark">
                                        <img src={data.image} class="image_card_1" alt={data.link} />
                                        <p className="h6">{data.news}</p>
                                </SwiperSlide>        
                            )
                        })
                    }
                </div>
            ) : news.length === 0 ? <p className="swiper-slide">Loadinfo</p> : (
                <div>
                    {
                        news.map(data => {
                            return(
                                <SwiperSlide className="swiper-slide-light">
                                        <img src={data.image} class="image_card_1" alt={data.link} />
                                    <p className="h6">{data.news}</p>
                                    <div>
                                        <img src={bookmark} />
                                    </div>
                                </SwiperSlide>        
                            )
                        })
                    }
                </div>
           )}
        </Swiper>
    )
}
