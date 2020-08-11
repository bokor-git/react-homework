import React from 'react'
import {JuniorPlusPage} from "./JuniorPlusPage";
import "../App.css"
import {ReduxStoreProviderDecorator} from "./../stories/decorators/ReduxStoreProviderDecorator";
import {NavLinkDecorator} from "./../stories/decorators/NavLinkDecorator";

export default {
    title: 'Junior Page',
    component: JuniorPlusPage,
    decorators:[ReduxStoreProviderDecorator, NavLinkDecorator]

}

export const JuniorPageExample = () => {
    return (<div className={"App"}>
        <JuniorPlusPage/>
    </div>)
}