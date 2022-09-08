import React, { useState } from 'react'

const User = () => {
    const [user, setUser] = useState({
        name: "Yunus Emre",
        surname: "Topçu",
    })
    return (
        <div>
            <h2>User</h2>
            {user.name} {user.surname}

            <br /> <br />
            <div>
                <button onClick={() => setUser((prev) => ({ ...prev, name: "Ahmet" }))}>İsmi Değiştir</button> {/* previous state ile çalışır */}
                <button onClick={() => setUser({ ...user, surname: "Kaya" })}>Soyismi Değiştir</button>
            </div>
        </div>
    )
}

export default User