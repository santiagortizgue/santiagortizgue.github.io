import React, { useState, useEffect, useRef } from 'react';
import './SwiperContainer.scss';

import ProjectCard from '../ProjectCard/ProjectCard';
import { ButtonLeft, ButtonRight } from '../SwiperActions/SwiperActions';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperContainer = ({ data }) => {

    const [items, setItems] = useState(data);
    const [swiper, setSwiper] = useState(null);

    const [paginationEl, paginationRef] = useSwiperRef();

    useEffect(() => {
        setItems(data);
    }, [data]);

    const params = {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: { clickable: false, el: paginationEl },
        loop: true
    }

    return (
        <div className="SwiperContainer">

            <Swiper {...params} onSwiper={(sw) => setSwiper(sw)}>
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProjectCard data={item} />
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


//custom hook
const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        setWrapper(ref.current);
    }, []);

    return [
        wrapper,
        ref
    ]
};