export class Quote {
    constructor(
        public id: number,
        public category: string,
        public text: string,
        public author: string,
        public liked: boolean,
        public disliked: boolean
    ){}
}