export interface ListIHeaderOnely extends Array<IHeaderOnly> { }

export interface IHeaderOnly {
    code:        number;
    description: string;
    date:        Date;
    totalAmount: number;
    status:      boolean;
}

