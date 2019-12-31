import React from "react";
import Grid from '@material-ui/core/Grid';

const QuestionTitle = ({ title }) => (
    <h3>{title}</h3>
)

const QuestionOption = ({ type, option }) => (
    <li><input type={type} value="cheese" /><label>{option.description}</label></li>
)


class Question extends React.Component {

    constructor(props) {
        super(props);
    }

    renderOption(option) {
        return (<QuestionOption type={this.props.question.type} option={option} />)
    }

    render() {
        return (
            <div className="question">
                <div className="questionTitle">
                    <QuestionTitle title={this.props.question.title} />
                </div>
                <div>
                    <ul>
                        {this.props.question.options.map(o => this.renderOption(o))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Question;