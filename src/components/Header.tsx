import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ModalModerator} from "./ModalModerator";

export const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);




    return (
        <>
            <div className="flex bg-[#1D1E32] px-10 lg:px-[100px] py-4 items-center justify-between ">
                <Link  to="/">
                    <img className="select-none" src="/img/logo.png" alt="logo" width={"122px"} height={"54px"}/>
                </Link>
                <button onClick={handleOpenModal} className="text-[#F6DBBB] text-xl">Модерация</button>
            </div>
            <ModalModerator open={open} handleCloseModal={handleCloseModal}/>
        </>

    )
}
