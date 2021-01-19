import React, { Component } from 'react'

export class Type extends Component {

      continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
      <section className='login'>
               
        <div className="loginContainer">       
        <form onSubmit={this.handleSubmit}>
          <h1>How can we help you?</h1>
        <label>
          I am: <br/>
          <select className='sel'>
            <option value="visitor">a visitor</option>
            <option value="a contractor">a contractor</option>
            <option value="delivery">making a delivery</option>
            <option value="signout">Sign Out</option>
          </select>
        </label>
        <button className="Next" onClick={this.continue}>
            Next <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </form>
      </div>
                
      </section>
            
        )
    }
}

export default Type
