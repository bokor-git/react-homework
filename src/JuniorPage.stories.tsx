import React from 'react'
import {JuniorPage} from "./JuniorPage";
import "./App.css"
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {NavLinkDecorator} from "./NavLinkDecorator";

export default {
    title: 'Junior Page',
    component: JuniorPage,
    decorators:[ReduxStoreProviderDecorator, NavLinkDecorator]

}

export const JuniorPageExample = (props: any) => {
    return (<div className={"App"}>
        <JuniorPage/>
    </div>)
}