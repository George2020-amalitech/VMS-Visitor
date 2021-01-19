import React, { Component } from 'react';
import Home from './Home';
import Type from './Type';
import PersonalInfo from './PersonalInfo';
import Employee from './Employee';
import Webcam from './Webcam';
import Info from './Info';
import Success from './Success'

export class Main extends Component {

    state = {
        step: 1,   
        //step 2
        iAm:'',

        //step 3
        fullname: '',
        email: '',
        company: '',
        phoneNum: '',
        

        //step 4
        employee: '',

        
    }


        //next page
    nextStep = () => {
        const {step} = this.state;

        this.setState({
            step: step + 1
        });
    }

        //go back
    prevStep = () => {
        const {step} = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

   showStep = () => {
            const {step} = this.state;
            
            if(step === 1)
                return (
                <Home 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                />);

            if(step === 2)
                return (
                <Type 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                />);

            if(step === 3)
                return (
                <PersonalInfo 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                />);

            if(step === 4)
                return (
                <Employee 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                />);

            if(step === 5)
                return (
                <Webcam 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                />);

            if(step === 6)
                return (
                <Info 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                />);

            if(step === 7)
                return (
                <Success 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                />);
    }
    render() {
        const {step} = this.state;
        return (
            <div>
                
                {this.showStep()}
            </div>
        );
    }
}

export default Main;