const add1 = require('add-1-to-a-number');

export function add(num: number | string): number | string {
    try {
        let val = add1(add1(num));
        return val;
    }
    catch (ex) {
        return ex;
    }
}
