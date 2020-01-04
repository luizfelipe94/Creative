import React, { Component } from 'react';
import Checkbox from './Checkbox';

class CheckboxQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onClick(event) {
        this.setState({ value: event.target.checked });
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
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
                <label type="text" value={!this.state.value} onClick={this.onClick}>{this.props.question.title}</label>
                {this.createCheckboxes()}
            </div>
        );
    }
}

export default CheckboxQuestion