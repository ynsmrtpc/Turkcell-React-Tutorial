import React from 'react'
import PropTypes from 'prop-types'

function User({ name, surname, age, country }) {
    return (
        <div>
            <h1>Users</h1>
            <div>İsim: {name}</div>
            <div>Soyisim: {surname}</div>
            <div>Yaş: {age}</div>
            <div>Şehir: {country}</div>
            {/* <h4>Arkadaşları</h4>
            {
                friends.map((friend, index) => <li key={index}><b>{friend}</b></li>)
            } */}
            <hr />
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
}

export default User