import React from "react";
import "./range.scss"
type RangeType = {
    onChange: (value: number) => void
    text: string
    minValue: number
    maxValue: number
    step: number
    rangeValue: number
}

export const Range = React.memo(function  ({onChange, text, maxValue, minValue, step, rangeValue}: RangeType) {
    return <div>
        <div className="container">
            <div className="range-slider">
                <span id="rs-bullet" className="rs-label">{rangeValue}</span>
                <input onChange={(event)=>onChange(+event.currentTarget.value)} id="rs-range-line" className="rs-range" type="range" value={rangeValue} min={minValue} max={maxValue}/>
            </div>

            <div className="box-minmax">
                <span>{minValue}</span><span>{maxValue}</span>
            </div>

        </div>

    </div>

})

