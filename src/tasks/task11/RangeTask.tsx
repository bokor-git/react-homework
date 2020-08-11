import React, {useCallback, useState} from "react";
import {Range} from "../../common/Range/Range";

export function RangeTask() {

    let [rangeValue, setRangeValue] = useState<number>(0)
    const onRangeChange = useCallback((value: number) => setRangeValue(value), [setRangeValue])

    return <Range rangeValue={rangeValue} onChange={onRangeChange} text={"Value"} step={1} maxValue={50}
                  minValue={0}/>
}