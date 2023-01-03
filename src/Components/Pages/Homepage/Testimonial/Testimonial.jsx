import React from 'react';
import peopleOne from '../../../../Assets/assets/images/people1.png'
import peopleTwo from '../../../../Assets/assets/images/people1.png'
import peopleThree from '../../../../Assets/assets/images/people1.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winsone Harry',
            from: 'california',
            image: peopleOne
        },
        {
            id: 2,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winsone Harry',
            from: 'california',
            image: peopleTwo
        },
        {
            id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winsone Harry',
            from: 'california',
            image: peopleThree
        },
        {
            id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winsone Harry',
            from: 'california',
            image: peopleThree
        },
        {
            id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winsone Harry',
            from: 'california',
            image: peopleThree
        },
    ]

    return (
        <div className='mt-16'>
            <p className='text-xl text-teal-400'>Testimonial</p>
            <p className='text-2xl'>What Our Patients Says</p>
                <Swiper
                      
                      breakpoints={
                        {
                            0:{
                                slidesPerView:1,
                                spaceBetween:10
                            },
                            480:{
                                slidesPerView:2,
                                spaceBetween:10
                            },
                            768:{
                                slidesPerView:3,
                                spaceBetween:10
                            },
                            1024:{
                                slidesPerView:4,
                                spaceBetween:10
                            },
                            
                        }
                      }
                >
                    {
                        testimonialData.map(card =>{
                             return <SwiperSlide><TestimonialCard key={card.id} card={card}></TestimonialCard></SwiperSlide>
                            
                            })
                    }
                    
                </Swiper>
        </div>
    );
};

export default Testimonial;