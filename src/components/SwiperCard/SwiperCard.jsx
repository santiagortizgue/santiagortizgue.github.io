import React, { useState, useEffect } from 'react';
import ContextTag from '../ContextTag/ContextTag';

import useSwiperRef from '../../hooks/useSwiperRef';

import { ButtonLeft, ButtonRight } from '../SwiperActions/SwiperActions';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import './SwiperCard.scss';

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperCard = ({ text, gallery }) => {
    const [items, setItems] = useState(gallery);
    const [swiper, setSwiper] = useState(null);

    const [paginationEl, paginationRef] = useSwiperRef();

    useEffect(() => {
        setItems(gallery);
    }, [gallery]);

    const params = {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: { clickable: false, el: paginationEl },
        loop: true
    }

    return (
        <div className="SwiperCard">
            <ContextTag text={text} />

            <div className="SwiperCard-container">
                <Swiper className="SwiperCard-swiper" {...params} onSwiper={(sw) => setSwiper(sw)} >

                    {items && items.map((item) => (
                        <SwiperSlide key={item.id} className="SwiperCard-slide">
                            <img src={item.url} alt="slide that presents me" />
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </SwiperSlide>
                    ))}

                </Swiper>

                <div className="SwiperCard-controllers">
                    <ButtonLeft swiper={swiper} />
                    <div ref={paginationRef} className="SwiperContainer-pagination"></div>
                    <ButtonRight swiper={swiper} />
                </div>
            </div>
        </div>
    );
}

export default SwiperCard;