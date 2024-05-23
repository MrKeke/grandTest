import React from "react";
import {Link} from "react-router-dom";
import {IItem} from "../app/interfaces";

export const Item: React.FC<IItem> = ({imgUrl, title, description,id}) => {
    return (
        <div className="flex flex-col h-[600px] shadow-xl w-[300px] lg:w-[385px]">
            <img className="rounded-t-2xl object-fill h-[288px] object-center" src={imgUrl} alt={title}/>
            <div className="flex flex-col gap-6 px-4 pt-4">
                <span className="text-2xl font-extrabold self-start">{title}</span>
                <span className=" overflow-ellipsis max-h-[200px] min-h-[140px] line-clamp-6">{description}</span>
                <Link to={`/blog/${id}`} className="p-2 rounded-2xl bg-[#1D1E32] text-white text-center">Подробнее</Link>
            </div>
        </div>
    )
};
