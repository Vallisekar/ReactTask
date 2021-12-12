import  React,{ Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../data.json';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id:'',
            maths: '',
            physics: '',
            chemistry: '',
            biology: '',
            english: ''
        }
        this.totalPercentage = 0;
    }

    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleMathsChange = (event) => {
        this.setState({
            maths: event.target.value
        });
    }

    handlePhysicsChange = (event) => {
        this.setState({
            physics: event.target.value
        })
    }

    handleChemistryChange = (event) => {
        this.setState({
            chemistry: event.target.value
        })
    }

    handleBiologyChange = (event) => {
        this.setState({
            biology: event.target.value
        })
    }

    handleEnglishChange = (event) => {
        this.setState({
            english: event.target.value
        })
    }

    getData = (event) =>  {
        let newState = {maths: '', physics: '', chemistry: '', biology: '', english: ''};
        let id = this.state.id;

        Object.keys(Data).forEach(function(key) {
            if (Data[key]['id'] == id)
                newState = Data[key];
        });
        this.setState(newState);
        this.totalPercentage = (newState.maths + newState.physics + newState.chemistry + newState.biology + newState.english) /5;

        if (this.totalPercentage >= 90) {
            this.message = 'success';
            this.status = 'Success';
        }
        else if (this.totalPercentage >= 70 && this.totalPercentage < 90) {
            this.message = 'info';
            this.status = 'Average';
        }
        else if (this.totalPercentage > 30 && this.totalPercentage < 70) {
            this.message = 'warning';
            this.status = 'Pass';
        }
        else if (this.totalPercentage <= 30) {
            this.message = 'danger';
            this.status = 'Fail';
        }
    }

    render() {
        return (
            <form>
                <div>
                    <label>Calculate the percentage level of a Person's mark</label>
                </div>
                <div>
                   <input type='text' value={this.state.id} onChange={this.handleIdChange} placeholder='Student ID'/>
                </div>
                <div>
                   <button type='button' onClick={this.getData}>Get Data From Server</button>
                </div>
                <div>
                    <label>Subject Percentage</label>
                </div>
                <div>
                   <input type='text' value={this.state.maths} onChange={this.handleMathsChange} placeholder='maths%'/>
                </div>
                <div>
                   <input type='text'  value={this.state.physics} onChange={this.handlePhysicsChange} placeholder='physics%'/>
                </div>
                <div>
                   <input type='text' value={this.state.chemistry} onChange={this.handleChemistryChange} placeholder='chemistry%'/>
                </div>
                <div>
                   <input type='text' value={this.state.biology} onChange={this.handleBiologyChange} placeholder='biology%'/>
                </div>
                <div>
                   <input type='text' value={this.state.english} onChange={this.handleEnglishChange} placeholder='english%'/>
                </div>
                <div>
                    <label>Total Percentage</label>
                </div>
                <div className="progressBar">
                    <ProgressBar striped variant={this.message} now={this.totalPercentage} label={`${this.totalPercentage}% Complete(${this.status})`}/>
                </div>
            </form>
        )
    }
} 

export default Form;