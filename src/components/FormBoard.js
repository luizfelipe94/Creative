import React from "react";
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";

import Question from "./Question";

const questions = [
    {
        title: 'Pergunta 1 de 2',
        type: 'checkbox',
        options: [
            {
                description: '1',
            },
            {
                description: '2',
            }
        ]
    },
    {
        title: 'Pergunta 2 de 2',
        type: 'radio',
        options: [
            {
                description: '1',
            },
            {
                description: '2',
            }
        ]
    },
];

const styles = {
    root: {}
};

const FormBoard = ({ children, classes }) => (
    <Container className={classes.root} alignItems="center" justify="center">
        {questions.map(q => <Question question={q} />)}
    </Container>
)

// class FormBoard extends React.Component {

//     constructor(props){
//         super(props);
//         this.questions = questions;
//     }
// }

export default withStyles(styles)(FormBoard);