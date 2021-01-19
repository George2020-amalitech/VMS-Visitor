import React, { Component } from 'react';
import Logo from './Logo.png';

export class Home extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    } 
    
    render() {
        return (
            <a onClick={this.continue}> <div className="home">
            <nav className='nav'>
        <img src={Logo} alt="Logo" />
            </nav>
        <div className="main"> 
            <h1>Welcome To The</h1>
                <h1 className="ama">AMALIT<i id="icon" class="fas fa-bars"></i>CH VISITOR'S MANAGENEMT SYSTEM</h1>

        </div>

            <h3 className="start" ><i class="fas fa-mouse"></i> Click anywhere to start </h3>
        </div>
        </a>
        )
    }
}

export default Home
