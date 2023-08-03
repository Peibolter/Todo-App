import { TODO_FILTERS } from "./consts"

export interface Todo { //declaro primero una estructura base
    id:string
    title:string
    completed:boolean
}

export type TodoId= Pick<Todo,'id'>
export type TodoTitle= Pick<Todo,'title'>
export type TodoCompleted= Pick<Todo,'completed'>

export type ListOfTodos= Todo[] //su array

export type FILTER_VALUE = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
