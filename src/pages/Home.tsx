import {Intro} from "../components/Intro";
import {ItemWrapper} from "../components/ItemWrapper";
import React from "react";
import {useAppSelector} from "../app/hooks";
import {Stats} from "../components/Stats";
import {getItems} from "../features/items/itemsSlice";

export const Home: React.FC = () => {
    const items = useAppSelector(getItems)
    const countries = Object.keys(items)
    return (
        <>
            <Intro/>
            {countries.map((country) => {
                return <ItemWrapper key={country} items={items[country]} title={country}/>
            })}
            <Stats/>
        </>
    )
}
