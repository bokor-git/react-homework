import React from 'react'
import {HashRouter} from "react-router-dom";


export const NavLinkDecorator = (storyFn: any) => (
    <HashRouter>
        {storyFn()}
    </HashRouter>)
