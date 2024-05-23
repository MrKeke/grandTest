import React from "react";
import {Link} from "react-router-dom";

export const Intro: React.FC = () => {

    return (
        <>
            <div className="relative hidden xl:block">
                <img  src="/img/img.png" alt="mountions"/>
                <div className="flex absolute top-16 left-16 flex-col text-white gap-5 lg:w-[600px] select-none">
                    <span className="uppercase text-3xl 2xl:text-6xl font-extrabold">Покоряем новую для себя высоту</span>
                    <span className=" text-2xl 2xl:text-4xl 2xl:leading-[60px]">В одном путешествии я объединил активный отдых и курортный чилл, собрали самые знаменитые виды Кабардино-Балкарии и ее дикую часть, Северную часть Эльбруса, а также 2 прекрасных города Кавказа.</span>
                    <Link to="/blog/0" className="text-black rounded-full p-4 text-xl :text-3xl bg-white self-center">Подробнее</Link>
                </div>
            </div>
            <div className="2xl:flex  gap-[93px] px-[100px] py-20 bg-[#1D1E32] text-white hidden ">
                <img className="h-[700px]" src="/img/photo.png" alt="myFace"/>
                <div className="flex flex-col gap-10 items-center">
                    <p className="uppercase 2xl:text-6xl font-extrabold">Почему я выбрал это?</p>
                    <span className=" text-5xl leading-[60px]">В одном путешествии я объединили активный отдых и курортный чилл, собрали самые знаменитые виды Кабардино-Балкарии и ее дикую часть, Северную часть Эльбруса, а также 2 прекрасных города Кавказа.</span>
                </div>

            </div>
        </>

    )
}
