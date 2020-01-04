import Service from "./service";

export default class CreativeService extends Service {
    getCreative(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
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
                ]);
            }, 1000);
        })
    }
}