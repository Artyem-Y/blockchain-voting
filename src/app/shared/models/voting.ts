import * as moment from 'moment';
import {Deserializable} from './interfaces';

export class Voting implements Deserializable {
    id: number;
    title: string;
    items: Array<object>;
    createdate: object;
    lastchanged: object;

    constructor() { }


    deserialize(input: any) {
        Object.assign(this, input);
        this.createdate = moment(input.createdate, 'YYYY-MM-DD HH:mm:ss');
        this.lastchanged = moment(input.lastchanged, 'YYYY-MM-DD HH:mm:ss');
        return this;
    }
}
