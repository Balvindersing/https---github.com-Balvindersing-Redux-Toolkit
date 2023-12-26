import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {AddCount} from '../store/ReduxStoreSlices'
const ChildComponent = () => {
    const useSelectorHook = useSelector(state => {
        console.log(state.value)
        return state.value;
    });
    const dispatch = useDispatch();
    const dispatchHandler = (e) => {
        e.preventDefault();
        dispatch(AddCount(1));
    };

    return (
        <>
            <h3>Child Component</h3>
            Count Value:  {useSelectorHook}
            <br/>
            <button className="button-18" onClick={dispatchHandler}>Increment Count</button>
        </>
    )
}
export default ChildComponent;