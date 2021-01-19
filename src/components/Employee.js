import React, { Component } from 'react'

export class Employee extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
    <section className='login'>
        <div className="loginContainer">
            <form>
            <h1>Who are you visiting?</h1>

            <label>Please enter employee's name</label>
            <input className="input1" placeholder="Enter name here"></input>
            
        <button className="Back" onClick={this.back}>
        <i class="fa fa-arrow-left" aria-hidden="true"></i>Back
        </button>

        <button className="Next" onClick={this.continue}>
            Next <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>

        </form>
        </div>             
    </section>
        )
    }
}

export default Employee
