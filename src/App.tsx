import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {Preloader} from "./common/Preloader/Preloader";
import {JuniorPlusPage} from "./pages/JuniorPlusPage";
import {PreJuniorPage} from "./pages/preJuniorPage";
import {JuniorPage} from "./pages/JuniorPage";

function App() {

    const darkMode = useSelector<AppRootStateType, boolean>(state => state.pageMode.darkMode)
    let loading = useSelector<AppRootStateType, boolean>(state => state.juniorPage.loading)

    return (
        <HashRouter>
            <div className={darkMode ? "App dark-mode" : "App"}>
                <Switch>
                    <Route exact path={"/"} render={() => (<PreJuniorPage/>)}/>
                    <Route path="/preJunior/" render={() => (<PreJuniorPage/>)}/>
                    {!loading ? <Route path="/Junior/" render={() => (<JuniorPage/>)}/> : <Preloader/>}
                    <Route path="/Junior+/" render={() => (<JuniorPlusPage/>)}/>
                </Switch>
            </div>
        </HashRouter>
    );
}


export default App;

