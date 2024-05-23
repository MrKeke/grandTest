import { Item } from "./Item";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {IItemWrapper} from "../app/interfaces";



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1444 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1444, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const ItemWrapper: React.FC<IItemWrapper> = ({ items, title }) => {
    return (
        <div className="flex flex-col gap-5 py-10 px-5 lg:px-20 justify-center">
            <h2 className="text-5xl font-bold mb-4">{title}</h2>
            <Carousel
                responsive={responsive}
                containerClass=" max-h-[700px]"
            >
                {items.map((item,index) => (
                    <Item key={`${index}${item.imgUrl}`} {...item} />
                ))}
            </Carousel>
        </div>
    );
};
