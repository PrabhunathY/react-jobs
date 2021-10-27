import React from 'react'
import logo from '../../logo.svg';

const Header = (props) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span></span>
            <span>{props.name}</span>
        </header>
    )
}

export default Header
