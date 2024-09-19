export interface EAnswer {
  text: string
  correct: boolean
}
export interface EQuestion {
  question: string
  answers: EAnswer[]
}
