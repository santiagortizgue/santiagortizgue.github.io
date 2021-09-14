import React, { useState, useEffect, useContext } from 'react';
import './SwiperGallery.scss';

import AppContext from '../../context/AppContext';

import { ButtonLeftSolid, ButtonRightSolid } from '../SwiperActions/SwiperActions';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const SwiperGallery = ({ gallery }) => {
    const { state } = useContext(AppContext);
    const { API } = state;

    const [items, setItems] = useState(gallery);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        setItems(gallery);
    }, [gallery]);

    const params = {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true
    }

    return (
        <div className="SwiperGallery">
            <Swiper {...params} onSwiper={(sw) => setSwiper(sw)} className="SwiperGallery-container">
                {items.map((item) => (
                    <SwiperSlide key={item.id} >
                        <img className="SwiperGallery-img" src={`${API}${item.url}`} alt="slider muck up from gallery" />
                    </SwiperSlide>
                ))}

                <ButtonLeftSolid swiper={swiper} />
                <ButtonRightSolid swiper={swiper} />
            </Swiper>
        </div>
    );
}

export default SwiperGallery;