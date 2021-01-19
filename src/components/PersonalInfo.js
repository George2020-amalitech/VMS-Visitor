import React, { Component,useState,useEffect} from 'react';



export class PersonalInfo extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {

        const {handleChange} = this.props;

        return (
    <section className='login'>
        <div className="loginContainer">
            <form>
            <h1>Visitor's Detail</h1>

                <label>First Name</label>
                <input 
                    className="input1" 
                    type="text" 
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleChange('firstName')}>
                </input>

                <label>Last Name</label>
                <input 
                    className="input1" 
                    type="text"
                    name="lastName" 
                    placeholder="Last Name"
                    onChange={handleChange('firstName')}>
                </input>

                <label>Email</label>
                <input 
                    className="input1" 
                    type="text"
                    name="email" 
                    placeholder="Email"
                    onChange={handleChange('firstName')}>
                </input>

                <label>Phone Number</label>
                <input 
                    className="input1" 
                    type="text"
                    name="phoneNum"
                    placeholder="Phone Number"
                    onChange={handleChange('firstName')}>
                </input>
            
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

export default PersonalInfo;
