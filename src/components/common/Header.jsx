import React, {Component} from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import cart from './../../img/cart.png'

class Header extends Component {
    

    render() {
        const { loggedIn, onLogout } = this.props;
        return (
            <header>
                <nav>
                    <div className="left-container">
                        <ul>
                            <li><NavLink exact to={`/trips`}>Home</NavLink></li>                         
                            {!loggedIn() && <li><NavLink to={'/login'}>Login</NavLink></li>}
                            {!loggedIn() &&  <li><NavLink to={'/register'}>Register</NavLink></li>}
                        </ul>
                    </div>

                    <div className="right-container">
                        {this.props.loggedIn() && <span>Welcome, {localStorage.getItem('username')} </span>}
                        {this.props.loggedIn() && <a className="log-out" href="javascript:void(0)"
                                                     onClick={onLogout}>Logout</a>}
                        
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header)