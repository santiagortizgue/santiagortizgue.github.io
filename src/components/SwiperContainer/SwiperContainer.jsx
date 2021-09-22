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
    const [slidesPerView, setSlidesPerView] = useState(1);

    const [paginationEl, paginationRef] = useSwiperRef();

    useEffect(() => {
        handleOnWindowChange();
        window.addEventListener("resize", handleOnWindowChange);

        return () => {
            window.removeEventListener('resize', handleOnWindowChange);
        }
    }, []);

    useEffect(() => {
        setItems(data);
    }, [data]);

    const params = {
        spaceBetween: 20,
        slidesPerView: slidesPerView,
        pagination: { clickable: false, el: paginationEl },
        loop: true
    }

    const handleOnWindowChange = () => {
        if (window.innerWidth > 1440) {
            setSlidesPerView(4);
            return;
        }

        if (window.innerWidth > 1024) {
            setSlidesPerView(3);
            return;
        }

        if (window.innerWidth > 768) {
            setSlidesPerView(2);
            return;
        }

        setSlidesPerView(1);
    }

    return (
        <div className="SwiperContainer">

            <Swiper {...params} onSwiper={(sw) => setSwiper(sw)}>
                {items.map((item, index) => (
                    <SwiperSlide key={index} >
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