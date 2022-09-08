import React, { useState } from 'react'

const Colors = () => {
    const [colors, setColors] = useState(['red', 'blue', 'green']);
    const handleClick = () => {
        setColors([...colors, parseInt(Math.random() * 1000)])
        // setColors(prev => [...prev, parseInt(Math.random() * 1000)]) // previous state ile çalışır
    }

    return (
        <div>
            <h2>Colors</h2>
            {colors.map((color, i) => (<div key={i}>{color}</div>))
            }

            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Colors