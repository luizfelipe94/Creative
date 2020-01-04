import React from 'react';
import { FormBoard } from "../../components";

const questions = [
    {
        id: '111',
        title: 'Pergunta 1 de 3',
        type: 'checkbox',
        options: [
            {
                description: '1 - 1',
                selected: false
            },
            {
                description: '1 - 2',
                selected: false
            }
        ]
    },
    {
        id: '222',
        title: 'Pergunta 2 de 3',
        type: 'check',
        options: [
            {
                description: '2 - 1',
                selected: false
            },
            {
                description: '2 - 2',
                selected: false
            }
        ]
    },
    {
        id: '333',
        title: 'Pergunta 3 de 3',
        type: 'check',
        options: [
            {
                description: '3 - 1',
                selected: false
            },
            {
                description: '3 - 2',
                selected: false
            }
        ]
    },
];

const FormPage = () => (
    <FormBoard questions={questions}></FormBoard>
)

export default FormPage;