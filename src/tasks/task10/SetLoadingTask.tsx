import {useDispatch} from "react-redux";
import {Button} from "../../common/Button/Button";
import React from "react";

export function SetLoadingTask() {
    let dispatch = useDispatch()
    const setLoading = () => {
        dispatch({type: "SET_LOADING", loading: true})
        setTimeout(() => dispatch({type: "SET_LOADING", loading: false}), 3000)
    }
    return <Button onClick={setLoading} text={"Start loading..."}/>

}