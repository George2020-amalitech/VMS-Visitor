import React, { Component } from 'react'

export class Info extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    

    render() {

        const { firstName,lastName,occupation} = this.props;

        return (
    <section className='login'>
        <div className="loginContainer">
    <form>
          <h1>Please check if information provided is RIGHT!!!</h1>
          <h2>I am : {lastName} </h2>
          <h2>My name is : {firstName} </h2>
          <h2>I am from : {occupation}</h2>

          <h3><i class="far fa-check-circle"></i> Looks good, sign me in!</h3>  
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

export default Info
