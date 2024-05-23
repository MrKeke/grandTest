import React from "react";
import {IComment} from "../app/interfaces";

export const Comment: React.FC<IComment> = ({author, date, text}) => {
    date = new Date(date)
    // из-за синхронизации localstorage и редакса приходит не Date, а string

    return (
        <div className="w-full flex flex-col rounded-xl border-opacity-40 border border-black gap-5 p-5">
            <span className=" w-full border-b-2 border-black">{author}</span>
            <span className="">{text}</span>
            <span className="self-end">{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</span>
        </div>
    )
}
