import React, { Component } from 'react';
import Checkbox from './Checkbox';

class CheckboxQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            questionId: "",
            questionOptions: "",
            selectedOptions: []
        };
    }

    onClick(event) {
        this.setState({ value: event.target.checked });
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    getQuestion(){
        return {
            questionId: this.props.question.id,
            questionOptions: this.props.question.options
        }
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
            this.setState({ selectedOptions: this.selectedCheckboxes, ...this.getQuestion() });
        } else {
            this.selectedCheckboxes.add(label);
            this.setState({ selectedOptions: this.selectedCheckboxes, ...this.getQuestion() });
        }
        console.log(this.state);
    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )

    createCheckboxes = () => (
        this.props.question.options.map(o => this.createCheckbox(o.description))
    )

    render() {
        return (
            <div className="container">
                <label type="text" value={!this.state.value} >{this.props.question.title}</label>
                {this.createCheckboxes()}
            </div>
        );
    }
}

export default CheckboxQuestion