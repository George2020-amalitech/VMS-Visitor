import React, { Component } from 'react';



export class Success extends Component {

    

    render() {
        return (
    <section className='login'>
        
        <div className="loginContainer">
            <form>
                <h1>THANK YOU FOR YOUR TIME</h1>
                    <h3>*Please come and sign out when you are done</h3>


            
        <button className="Next" onClick={this.back}>
        Return to Homepage <i class="fa fa-home" aria-hidden="true"></i>
        </button>

        
        </form>
        </div>             
    </section>
        )
    }
}

export default Success
