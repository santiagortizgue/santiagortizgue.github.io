import React, { useState, useEffect } from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';
import { ButtonLeft, ButtonRight } from '../SwiperActions/SwiperActions';

import ConceptCard from '../ConceptCard/ConceptCard';
import PlaceholderCard from '../PlaceholderCard/PlaceholderCard';

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
        setItems(data);

        window.addEventListener("resize", handleOnWindowChange);

        return () => {
            window.removeEventListener('resize', handleOnWindowChange);
        }
    }, [data]);

    const placeholder = {
        name: 'Coming soon',
        about: 'I am building this section. It will be available soon!',
        id: 0,
    };

    const params = {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: { clickable: false, el: paginationEl },
        loop: true
    }

    const handleOnWindowChange = () => {
        console.log(window.innerWidth);
    }

    return (
        <div className="SwiperContainer">

            <Swiper {...params} onSwiper={(sw) => setSwiper(sw)}>

                {items.length === 0 ?
                    <PlaceholderCard data={placeholder} isVariant={isVariant} />
                    : ''}

                {items.map((item) => (
                    <SwiperSlide key={item.id} >
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