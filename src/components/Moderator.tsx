import {Input, MenuItem, Select, TextareaAutosize} from "@mui/material";
import {
    addCountry,
    addItem,
    getComments,
    removeCountry,
    removeItem,
    getItems, removeComment
} from "../features/items/itemsSlice";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IModeratorOption} from "../app/interfaces";

export const OptionAddItem: React.FC<IModeratorOption> = ({handleCloseModal, setOption}) => {
    const items = useAppSelector(getItems)
    const countries = Object.keys(items)
    const [activeCountry, setActiveCountry] = useState(countries[0])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const dispatch = useAppDispatch();
    const handleAddItem = () => {
        dispatch(addItem({country: activeCountry, info: {title, imgUrl, description}}))
        setTitle('')
        setDescription('')
        setImgUrl('')
        handleCloseModal()
    }

    const isDisable = !title.trim() || !description.trim() || !imgUrl.trim()
    return (
        <>
            <div className="flex flex-col gap-10 ">
                <ArrowBackIcon onClick={() => setOption(0)} className="cursor-pointer"/>
                <Select
                    variant="standard"
                    value={activeCountry}
                    onChange={(e) => setActiveCountry(e.target.value)}
                >
                    {countries.map((country, i) => {
                        return <MenuItem key={country + i} value={country}>{country}</MenuItem>
                    })}
                </Select>
                <Input placeholder="Заголовок" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <TextareaAutosize onChange={(e) => setDescription(e.target.value)} value={description} minRows={4}
                                  className="w-full p-2 border-solid border-black border rounded-2xl resize-none"
                                  placeholder="Текст статьи"/>
                <Input placeholder="ссылка на изображение" value={imgUrl}
                       onChange={(e) => setImgUrl(e.target.value)}/>
                {imgUrl.length > 0 &&
                    <img className="object-cover max-h-[500px]" src={imgUrl} alt="Загрузка не удалась"/>}
                <button disabled={isDisable} onClick={handleAddItem}
                        className="p-2 disabled:bg-gray-400 rounded-2xl bg-[#1D1E32] text-white text-center">Добавить
                </button>
            </div>
        </>
    )
}

export const OptionRemoveItem: React.FC<IModeratorOption> = ({handleCloseModal, setOption}) => {
    const store = useAppSelector(getItems)
    const items = Object.values(store).flat()
    const [activeItem, setActiveItem] = useState(-1)
    const dispatch = useAppDispatch();
    const handleRemoveItem = () => {
        if (activeItem !== -1) {
            dispatch(removeItem(activeItem))
            handleCloseModal()
        }
    }
    const isDisable = activeItem === -1
    return (
        <>
            <div className="flex flex-col gap-10 ">
                <ArrowBackIcon onClick={() => setOption(0)} className="cursor-pointer"/>
                <span>Выберете статью для удаления</span>
                <Select
                    variant="standard"
                    value={activeItem}
                    onChange={(e) => setActiveItem(Number(e.target.value))}
                >
                    {items.map((item) => {
                        return <MenuItem key={item.title} value={item.id}>{item.title}</MenuItem>
                    })}
                </Select>
                <button onClick={handleRemoveItem}
                        disabled={isDisable}
                        className="p-2 rounded-2xl disabled:bg-gray-400 bg-[#1D1E32] text-white text-center"> Удалить
                </button>
            </div>
        </>
    )
}

export const OptionAddCountry: React.FC<IModeratorOption> = ({handleCloseModal, setOption}) => {
    const [country, setCountry] = useState('')
    const dispatch = useAppDispatch();
    const handleAddCountry = () => {
        if (country.length !== 0) {
            dispatch(addCountry(country))
            handleCloseModal()
        }
    }
    const isDisabled = !country.trim()
    return (
        <>
            <div className="flex flex-col gap-10 ">
                <ArrowBackIcon onClick={() => setOption(0)} className="cursor-pointer"/>
                <span>Введите название категории</span>
                <Input className="text-xl" value={country} onChange={(e) => setCountry(e.target.value)}/>
                <button disabled={isDisabled} onClick={handleAddCountry}
                        className="p-2 rounded-2xl disabled:bg-gray-400 bg-[#1D1E32] text-white text-center">Добавить
                </button>
            </div>
        </>
    )
}

export const OptionRemoveCountry: React.FC<IModeratorOption> = ({handleCloseModal, setOption}) => {
    const store = useAppSelector(getItems)
    const countries = Object.keys(store)
    const [category, setCategory] = useState("")
    const dispatch = useAppDispatch();
    const handleRemoveItem = () => {
        if (category.length !== 0) {
            dispatch(removeCountry(category))
            handleCloseModal()
        }
    }
    const isDisabled = !category.trim()
    return (
        <>
            <div className="flex flex-col gap-10 ">
                <ArrowBackIcon onClick={() => setOption(0)} className="cursor-pointer"/>
                <span>Выберете категорию для удаления</span>
                <Select
                    variant="standard"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {countries.map((country) => {
                        return <MenuItem key={country} value={country}>{country}</MenuItem>
                    })}
                </Select>
                <button disabled={isDisabled} onClick={handleRemoveItem}
                        className="p-2 rounded-2xl disabled:bg-gray-400 bg-[#1D1E32] text-white text-center"> Удалить
                </button>
            </div>
        </>
    )
}
export const OptionRemoveComment: React.FC<IModeratorOption> = ({handleCloseModal, setOption}) => {
    const itemStore = useAppSelector(getItems)
    const comments = useAppSelector(getComments)
    const items = Object.values(itemStore).flat()
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState(-1)
    const [activeComment, setActiveComment] = useState(-1)
    const handleRemoveComment = () => {
        console.log(activeComment)
        dispatch(removeComment(activeComment))
        handleCloseModal()
    }
    const isDisabled = activeComment === -1
    return (
        <>
            <div className="flex flex-col gap-10 ">
                <ArrowBackIcon onClick={() => setOption(0)} className="cursor-pointer"/>
                <span>Выберете статью</span>
                <Select
                    variant="standard"
                    value={category}
                    onChange={(e) => setCategory(Number(e.target.value))}
                >
                    {items.map((item) => {
                        return <MenuItem key={item.imgUrl} value={item.id}>{item.title}</MenuItem>
                    })}
                </Select>
                {category !== -1 && (
                    <>
                    <span>Выберете комментарий</span>
                        <Select
                            variant="standard"
                            value={activeComment}
                            onChange={(e) => setActiveComment(Number(e.target.value))}
                        >
                            {comments.filter((comment)=> comment.parentId === category).map((comment) => {
                                return <MenuItem key={comment.author + comment.id} value={comment.id}>{comment.author}</MenuItem>
                            })}
                        </Select>
                    </>
                )}
                <button disabled={isDisabled} onClick={handleRemoveComment}
                        className="p-2 rounded-2xl disabled:bg-gray-400 bg-[#1D1E32] text-white text-center"> Удалить
                </button>
            </div>
        </>
    )
}
