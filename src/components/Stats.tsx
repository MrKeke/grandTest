import React from "react";
import {useAppSelector} from "../app/hooks";
import {getComments, getItems} from "../features/items/itemsSlice";
import {calcSymbols, calcWords} from "../app/utils";

export const Stats:React.FC = () => {

    const items = useAppSelector(getItems)
    const comments = useAppSelector(getComments)
    const onlyItems = Object.values(items).flat()
    const words = onlyItems.map(item => calcWords(item.description))
    const symbols = onlyItems.map(item => calcSymbols(item.description))
    const totalWords = words.reduce((a, b) => a + b, 0)
    const totalSymbols = symbols.reduce((a, b) => a + b, 0)
    return (
        <div className="flex flex-col items-end justify-end p-10">
            <span>Количество статей: {onlyItems.length}</span>
            <span>Количество слов: {totalWords}</span>
            <span>Количество символов: {totalSymbols}</span>
            <span>Количество комментариев: {comments.length}</span>
        </div>
    )
}
