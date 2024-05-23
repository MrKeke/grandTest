import React, {useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {addComment, getCommentsById, getItemById} from "../features/items/itemsSlice";
import {calcSymbols, calcWords} from "../app/utils";
import {Input, TextareaAutosize} from "@mui/material";
import {Comment} from "../components/Comment";

export const CurrentItem:React.FC = () =>{
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')
    const { id = -1 } = useParams();
    const item = useAppSelector(getItemById(Number(id)))
    const comments = useAppSelector(getCommentsById(Number(id)))
    const dispatch = useAppDispatch()
    if(!item || id === -1){
        return <Navigate to="/" replace />;
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(addComment({text,author, date: new Date(), parentId:Number(id), id: 0}))
    }
    const isDisabled =!author.trim() || !text.trim();
    return (
        <div className="flex flex-col gap-10 p-2 lg:p-36">
            <img className="w-full " src={item.imgUrl} alt={item.title}/>
            <span className="font-extrabold text-6xl">{item.title}</span>
            <p className="text-3xl w-1/2 leading-[150%]">{item.description}</p>
            <div className="self-end">
                <p>Количество слов в статье: {calcWords(item.description)}</p>
                <p>Количество символов в статье: {calcSymbols(item.description)}</p>
            </div>
            <div className="flex flex-col gap-5 ">
                <span className="text-3xl font-bold">Комментарии</span>
                <Input value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Представьтесь"/>
                <TextareaAutosize value={text} onChange={(e)=>setText(e.target.value)} className="resize-none" placeholder="Ваш комментарий" minRows="3" />
                <button disabled={isDisabled} onClick={handleSubmit} className="p-2 w-1/4 self-center rounded-2xl disabled:bg-gray-400 bg-[#1D1E32] text-white text-center">Отправить</button>
            </div>
            <div className="flex flex-col gap-2">
                {comments.map((comment)=>{
                    console.log(comment)
                    return <Comment {...comment}/>
                })}
            </div>
        </div>
    )
}
