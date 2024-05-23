import React from "react";

export interface IItem {
    imgUrl: string;
    title: string;
    description: string;
    id: number
}
export interface IItemWrapper {
    items: IItem[];
    title: string;
}
export interface IModal {
    open: boolean
    handleCloseModal: () => void
}
export interface IModeratorOption extends IModal {
    setOption: React.Dispatch<React.SetStateAction<number>>
}

export interface IMountains {
    [country: string]: IItem[] | []
}
export interface IComment {
    text: string;
    author: string;
    date: Date;
    id: number;
    parentId: number
}


export interface CounterState {
    items: IMountains
    comments: IComment[] | []
}

export interface IAddItem {
    country: string
    info: Omit<IItem, "id">
}
