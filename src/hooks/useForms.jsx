import React, { useState } from "react";

const useForm = (initialInfo) => {
    const [info, setInfo] = useState(initialInfo)

    const changeData = (key, value) => {
        setInfo({
            ...info,
            [key]: value
        })
    };

    const resetData = () => {
        setInfo(initialInfo)
    }

    return {
        changeData,
        resetData,
        info,
        ...info
    }
}

export default useForm;