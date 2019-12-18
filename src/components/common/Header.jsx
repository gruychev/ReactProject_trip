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
                        {loggedIn() && <span>Welcome, {localStorage.getItem('username')} </span>}
                        {loggedIn() && <a className="log-out" href="javascript:void(0)"
                                                     onClick={onLogout}>Logout</a>}
                        {loggedIn() &&  <NavLink to={'/cart'}><img src={cart} alt="" className="cart"/></NavLink>}
                        
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header)