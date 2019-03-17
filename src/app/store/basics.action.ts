import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { Quote } from '../models/quote.model';

export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_QUOTE = 'ADD_QUOTE';
export const ADD_QUOTES = 'ADD_QUOTES';

export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload: User) {}
}

export class LoginUser implements Action {
    readonly type = LOGIN_USER;

    constructor(public payload: boolean) {}
}

export class AddQuote implements Action {
    readonly type = ADD_QUOTE;

    constructor(public payload: Quote) {}
}

export class AddQuotes implements Action {
    readonly type = ADD_QUOTES;

    constructor(public payload: Quote[]) {}
}

export type basicsAction = AddUser | LoginUser | AddQuote | AddQuotes;