import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

export class Webcam extends Component {
    
    
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
            <div className="camera">
            
            </div>


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

export default Webcam
