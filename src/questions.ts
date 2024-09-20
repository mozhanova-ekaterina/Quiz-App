import { EQuestion } from "./models";

export const questions: EQuestion[] = [
    {
        question: 'Что носит дьявол в известном фильме?',
        answers: [
            { text: 'Christian Dior', correct: false },
            { text: 'Prada', correct: true },
            { text: 'Rolex', correct: false },
            { text: 'Gucci', correct: false }
        ]
    },
    {
        question: 'Сколько километров в одной миле?',
        answers: [
            { text: '1,3км', correct: false },
            { text: '1км', correct: false },
            { text: '1,6км', correct: true },
            { text: '2,6км', correct: false }
        ]
    },
    {
        question: 'Как переводится с французского языка слово «фуршет»?',
        answers: [
            { text: 'Стол', correct: false },
            { text: 'Бокал', correct: false },
            { text: 'Вилка', correct: true },
            { text: 'Ложка', correct: false }
        ]
    },
];