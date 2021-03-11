import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import Switch from './utils/Switch';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        return(
            <header>
                <Navbar>
                        <div className="nav-logo-title">
                            <p>Where in the world?</p>
                        </div>
                       <Switch />                       
                </Navbar>
            </header>
        );
    }
}

export default Header;