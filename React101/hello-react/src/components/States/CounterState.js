import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Arttır</button>
            <button onClick={() => setCount(count - 1)}>Azalt</button>
            <button onClick={() => setCount(count + 2)}>İkişerli Arttır</button>
            <button onClick={() => setCount(count - 2)}>İkişerli Azalt</button>
            <button onClick={() => setCount(count * count)}>Üstünü Al</button>
            <br /> <br />
            <button onClick={() => setCount((prev) => prev + amount)}> <b>Amount Kadar <br /> Arttır</b> </button>  {/* previous state ile çalışır */}
            <button onClick={() => setCount(count - amount)}> <b>Amount Kadar <br /> Azalt</b> </button> <br /><br />
            <button onClick={() => setCount(0)}>Sıfırla</button>

            <hr />
            <h4>Arttırma-Azaltma Hızı: {amount}</h4>
            <button onClick={() => setAmount(1)}>1</button>
            <button onClick={() => setAmount(3)}>3</button>
            <button onClick={() => setAmount(10)}>10</button>
        </div>
    )
}

export default Counter