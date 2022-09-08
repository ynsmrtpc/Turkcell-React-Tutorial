import React, { useState } from 'react'

const Form = () => {
    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
    // const [gender, setGender] = useState("0");

    const [form, setForm] = useState({
        name: "",
        surname: "",
        gender: "0"
    });

    const hadleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <br />
            <div>
                İsim:  <input type="text" name="name" placeholder='İsim' value={form.name} onChange={hadleChange} />
            </div>
            <br />
            <div>
                Soyisim:  <input type="text" name="surname" placeholder='Soyisim' value={form.surname} onChange={hadleChange} />
            </div>
            <br />
            <div>Cinsiyet:
                <select value={form.gender} name="gender" onChange={hadleChange}>
                    <option value='0'>Erkek</option>
                    <option value='1'>Kadın</option>
                </select>
            </div>
            <hr />
            <h3>Bilgiler</h3>
            <strong >{form.gender === '0' ? 'Erkek' : 'Kadın'}</strong> - <p style={{ display: 'inline' }}>{form.name} {form.surname} </p>
        </div>
    )
}

export default Form