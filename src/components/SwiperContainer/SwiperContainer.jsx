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
import ConceptCard from '../ConceptCard/ConceptCard';
import PlaceholderCard from '../PlaceholderCard/PlaceholderCard';

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperContainer = ({ data, isProject, isVariant }) => {

    const [items, setItems] = useState(data);
    const [swiper, setSwiper] = useState(null);

    const [paginationEl, paginationRef] = useSwiperRef();

    useEffect(() => {
        setItems(data);
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

    return (
        <div className="SwiperContainer">

            <Swiper {...params} onSwiper={(sw) => setSwiper(sw)}>
            
                {items.length === 0 ? 
                 <PlaceholderCard data={placeholder} isVariant={isVariant}/>
                : ''}

                {items.map((item) => (
                    <SwiperSlide key={item.id} >
                        { isProject ? <ProjectCard data={item} /> : <ConceptCard data={item} />}
                        
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