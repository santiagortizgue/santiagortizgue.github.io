import React, { useState, useEffect } from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';
import { ButtonLeft, ButtonRight } from '../SwiperActions/SwiperActions';

import ConceptCard from '../ConceptCard/ConceptCard';

import useSwiperRef from '../../hooks/useSwiperRef';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import './SwiperContainer.scss';

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperContainer = ({ data, isProject, isVariant }) => {

    const [items, setItems] = useState(data);
    const [swiper, setSwiper] = useState(null);

    const [paginationEl, paginationRef] = useSwiperRef();

    useEffect(() => {
        if (swiper) swiper.updateSlides();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    useEffect(() => {
        setItems(data);
    }, [data]);

    const params = {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: { clickable: false, el: paginationEl },
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 28
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    }
    return (
        <div className="SwiperContainer">

            <Swiper {...params} onSwiper={(sw) => setSwiper(sw)}>
                {items.map((item) => (
                    <SwiperSlide key={item.uid} >
                        {isProject ? <ProjectCard data={item} /> : <ConceptCard data={item} />}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="SwiperContainer-controllers">
                <ButtonLeft swiper={swiper} />
                <div ref={paginationRef} className="SwiperContainer-pagination"></div>
                <ButtonRight swiper={swiper} />
            </div>

        </div>
    );
}

export default SwiperContainer;