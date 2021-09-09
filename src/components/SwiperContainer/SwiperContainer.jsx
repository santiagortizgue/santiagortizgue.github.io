import React, { useState, useEffect } from 'react';
import './SwiperContainer';

// Import Swiper components
import { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import ProjectCard from '../ProjectDard/ProjectCard';

const SwiperContainer = ({ data }) => {

    const [items, setItems] = useState(data);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        setItems(data);
    }, [data]);

    return (
        <div className="SwiperContainer">

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(sw) => setSwiper(sw)}
                loop={true}>
                {items.map((item) => (
                    <ProjectCard key={item.id} data={item} />
                ))}

            </Swiper>

        </div>
    );
}

export default SwiperContainer;