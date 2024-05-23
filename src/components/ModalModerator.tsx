import {MenuItem, Modal, Select} from "@mui/material";
import React, {useState} from "react";
import {OptionAddCountry, OptionAddItem, OptionRemoveComment, OptionRemoveCountry, OptionRemoveItem} from "./Moderator";
import {IModal} from "../app/interfaces";




export const ModalModerator: React.FC<IModal> = ({open, handleCloseModal}) => {
    const [option, setOption] = useState(0)
    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
        >
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lg:w-[600px] p-5 rounded-2xl">
                {option === 0 && (
                    <>
                        <span className=" text-xl">Выберете действие:</span>
                        <Select displayEmpty className="w-full" onChange={(e) => {
                            setOption(Number(e.target.value))
                        }} value={option}>
                            <MenuItem value={1}>Добавить статью</MenuItem>
                            <MenuItem value={2}>Удалить статью</MenuItem>
                            <MenuItem value={3}>Добавить категорию</MenuItem>
                            <MenuItem value={4}>Удалить категорию</MenuItem>
                            <MenuItem value={5}>Удалить комментарий</MenuItem>
                        </Select>
                    </>
                )}
                {option === 1 && <OptionAddItem handleCloseModal={handleCloseModal} open={open} setOption={setOption}/>}
                {option === 2 && <OptionRemoveItem setOption={setOption} open={open} handleCloseModal={handleCloseModal}/>}
                {option === 3 && <OptionAddCountry setOption={setOption} open={open} handleCloseModal={handleCloseModal}/>}
                {option === 4 && <OptionRemoveCountry setOption={setOption} open={open} handleCloseModal={handleCloseModal}/>}
                {option === 5 && <OptionRemoveComment setOption={setOption} open={open} handleCloseModal={handleCloseModal}/>}
            </div>
        </Modal>
    )
}
