import React, {useState} from "react";
import {Link, useNavigate,} from "react-router-dom";
import {ModalModerator} from "./ModalModerator";
import {Autocomplete, TextField} from "@mui/material";
import {useAppSelector} from "../app/hooks";
import {getItems} from "../features/items/itemsSlice";
import {IItem} from "../app/interfaces";

export const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<IItem | null>(null);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const store = useAppSelector(getItems)
    const items = Object.values(store).flat()

    return (
        <>
            <div className="flex bg-[#1D1E32] px-10 lg:px-[100px] py-4 items-center justify-between text-[#F6DBBB]">
                <Link to="/">
                    <img className="select-none" src="/img/logo.png" alt="logo" width={"122px"} height={"54px"}/>
                </Link>
                <div className="flex gap-10">
                    <Autocomplete
                        value={value}
                        className="select-none"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            if (newValue) {
                                navigate(`/blog/${newValue.id}`)
                                setValue(null)
                                
                            }
                        }}
                        inputValue={inputValue}
                        onInputChange={(e, newInputValue) => {
                            setInputValue(newInputValue.trim());
                        }}
                        componentsProps={{
                            clearIndicator: {
                                sx: { display: 'none' },
                            },
                        }}
                        options={items}
                        getOptionLabel={(item) => item.title}
                        sx={{
                            width: 300,
                            '& .MuiInputBase-root': {
                                backgroundColor: '#2D2F45',
                                color: '#F6DBBB',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F6DBBB',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F6DBBB',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#F6DBBB',
                            },
                            '& .MuiAutocomplete-popupIndicator': {
                                color: '#F6DBBB',
                            },
                            '& .MuiAutocomplete-clearIndicator': {
                                color: '#F6DBBB',
                            },
                            '& .MuiAutocomplete-option': {
                                backgroundColor: '#2D2F45',
                                color: '#F6DBBB',
                            },
                            '& .MuiAutocomplete-option:hover': {
                                backgroundColor: '#1D1E32',
                            },
                            '& .MuiAutocomplete-listbox': {
                                backgroundColor: '#2D2F45',
                                color: '#F6DBBB',
                            }
                        }} // Стилизация
                        renderInput={(params) => <TextField {...params} label="Поиск" />}
                    />
                    <button onClick={handleOpenModal} className=" text-xl">Модерация</button>
                </div>

            </div>
            <ModalModerator open={open} handleCloseModal={handleCloseModal}/>
        </>

    )
}
