// * Write a function that takes a list of integers and returns the two integers that have the highest product.

const sortNumbers = (a: number, b: number): number => {
    return b - a;
}

export class SquarePair {
    pos: Array<number>
    neg: Array<number>
    hasZero: boolean = false;

    constructor(pos: Array<number>, neg: Array<number>, hasZero: boolean) {
        this.pos = pos;
        this.neg = neg;
        this.hasZero = hasZero;
    }
}

export function SliceSquarePair(numbers: Array<number>): SquarePair {
    let hasZero: boolean = false;

    // using an array of values bounded with a max of length 2 helps handle the case of 0 or more values either positive or negative
    let pos: Array<number> = new Array<number>();
    let neg: Array<number> = new Array<number>();

    if (numbers.length < 2) {
        return new SquarePair(pos, neg, hasZero);
    }

    for (let x: number = 0; x < numbers.length; x++) {
        const current: number = numbers[x];

        if (current === 0) {
            hasZero = true;
        } else if (current < 0) {
            if (neg.length < 2) {
                neg.push(current);
                neg.sort(sortNumbers); // sorting 0, 1, or 2 values is O(1) runtime
            } else if (neg[0] < x) {
                neg.push(current);
                neg.sort(sortNumbers);
                neg = neg.slice(1, 3); // ensures we only keep the 2 smallest numbers
            }
        } else {
            if (pos.length < 2) {
                pos.push(current);
                pos.sort(sortNumbers);
            } else if (pos[1] > x) {
                pos.push(current);
                pos.sort(sortNumbers); // sorting 0, 1, or 2 values is O(1) runtime
                pos = pos.slice(0, 2); // ensures we only keep the 2 largest numbers
            }
        }
    }

    // return 0 to 2 of the smallest negative numbers
    // return 0 to 2 of the largest positive numbers
    // return a boolean if we had one or more zeros.
    return new SquarePair(pos, neg, hasZero)
}

export function CalculateProduct(pair: SquarePair): number {
    if (pair.neg.length < 2) { // can't get a number bigger than both positives so check for double pos or neg * pos
        if (pair.pos.length > 1) { // if we have only one negative and more than 1 positive then our largest must be 2 positive numbers
            return pair.pos[0] * pair.pos[1];
        } else if (pair.neg.length === 0 || pair.pos.length === 0 || pair.hasZero) { // edge case where 1 or fewer negative, 1 or fewer positive, and 0 or more zeros
            return 0;
        } else { // edge case where only one positive, one negative, and no zero values
            return pair.neg[0] * pair.pos[0];
        }
    } else if (pair.pos.length < 2) { // can't guarantee positive number with only one positive so check for double negatives or zero
        if (pair.neg.length > 1) {
            return pair.neg[0] * pair.neg[1]; // multiply negatives together to get a positive number
        } else if (pair.hasZero) { // otherwise, settle for 0 if there is one
            return 0;
        } else { // final edge case - array size is two and one is positive and one is negative
            return pair.pos[0] * pair.neg[0]; // only 1 pos and 1 negative value
        }
    } else { // original array had 2 positive and 2 negative numbers
        const biggestPos: number = pair.pos[0] * pair.pos[1]
        const biggestNeg: number = pair.neg[0] * pair.neg[1]

        if (biggestPos > biggestNeg) {
            return biggestPos
        } else {
            return biggestNeg
        }
    }
}
