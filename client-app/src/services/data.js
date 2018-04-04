import _ from 'lodash'

const names = [
    'Wesley',
    'Kenji',
    'Mil Grau',
    'Patrick',
    'Kevin',
    'Jonathan',
    'Nay',
    'Gabriel'
]

const titles = [
    'Senaiano Front-end',
    'Senaiano Back-end',
    'Senaiano Front-end',
    'Senaiano Social Media',
    'Senaiano Front-end',
    'Senaiano Front-end',
    'Senaiano Front-end',
    'Senaiano Front-end', 
]

let idCount = 0

export const getApplicants = (length) => {
    return Array(length).fill({}).map(() => {
        const id = idCount++;
        return {
            id: `applicant-${id}`,
            name: names[id],
            title: titles[id],
            createdAt: '4 days ago',
            grade: _.random(0,10, true).toFixed(1),
            like: _.random(0,15),
            comments: _.random(0,10),
            messages: _.random(0,10),
        }
    })
}