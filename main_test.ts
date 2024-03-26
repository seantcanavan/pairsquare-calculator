// * Write a function that takes a list of integers and returns the two integers that have the highest product.

import {assertEquals} from 'https://deno.land/std@0.220.0/assert/assert_equals.ts';
import {CalculateProduct, SliceSquarePair, SquarePair} from './main.ts';

Deno.test("test SliceSquarePair", async (t: Deno.TestContext): Promise<void> => {
    await t.step("test empty array", (): void => {
        const pair: SquarePair = SliceSquarePair(new Array<number>);
        assertEquals(pair.hasZero, false)
        assertEquals(pair.pos.length, 0);
        assertEquals(pair.neg.length, 0);
    });

    await t.step("test array of 1 value", (): void => {
        const pair: SquarePair = SliceSquarePair([1]);
        assertEquals(pair.hasZero, false)
        assertEquals(pair.pos.length, 0);
        assertEquals(pair.neg.length, 0);
    });

    await t.step("test array of 2 positive values", (): void => {
        const pair: SquarePair = SliceSquarePair([2, 1]);
        assertEquals(pair.hasZero, false);
        assertEquals(pair.pos[0], 2);
        assertEquals(pair.pos[1], 1);
        assertEquals(pair.neg.length, 0);
    });

    await t.step("test array of 2 positive values", (): void => {
        const pair: SquarePair = SliceSquarePair([-2, -1]);
        assertEquals(pair.hasZero, false);
        assertEquals(pair.neg[0], -1);
        assertEquals(pair.neg[1], -2);
        assertEquals(pair.pos.length, 0);
    });

    await t.step("test array of 2 positive 1 negative 1 zero value", (): void => {
        const pair: SquarePair = SliceSquarePair([-1, 2, 1, 0]);
        assertEquals(pair.neg[0], -1);
        assertEquals(pair.pos[0], 2);
        assertEquals(pair.pos[1], 1);
        assertEquals(pair.hasZero, true)
    });
});

Deno.test("test CalculateProduct", async (t: Deno.TestContext): Promise<void> => {
    await t.step("test array of 2 positive values", (): void => {
        const pair: SquarePair = SliceSquarePair([2, 1]);
        const product: number = CalculateProduct(pair);
        assertEquals(2, product)
    });

    await t.step("test array of 3 positive values", (): void => {
        const pair: SquarePair = SliceSquarePair([2, 3, 1]);
        const product: number = CalculateProduct(pair);
        assertEquals(6, product)
    });

    await t.step("test array of 3 positive values and 1 zero", (): void => {
        const pair: SquarePair = SliceSquarePair([2, 3, 0, 1]);
        const product: number = CalculateProduct(pair);
        assertEquals(6, product)
    });

    await t.step("test array of 2 negative values", (): void => {
        const pair: SquarePair = SliceSquarePair([-2, -1]);
        const product: number = CalculateProduct(pair);
        assertEquals(2, product)
    });

    await t.step("test array of 3 negative values", (): void => {
        const pair: SquarePair = SliceSquarePair([-2, -3, -1]);
        const product: number = CalculateProduct(pair);
        assertEquals(6, product)
    });

    await t.step("test array of 3 negative values and 1 zero", (): void => {
        const pair: SquarePair = SliceSquarePair([-2, -3, 0, -1]);
        const product: number = CalculateProduct(pair);
        assertEquals(6, product)
    });

    await t.step("test one positive one negative", (): void => {
        const pair: SquarePair = SliceSquarePair([-2, 1]);
        const product: number = CalculateProduct(pair);
        assertEquals(-2, product)
    });

    await t.step("test one positive one zero", (): void => {
        const pair: SquarePair = SliceSquarePair([2, 0]);
        const product: number = CalculateProduct(pair);
        assertEquals(0, product)
    });

    await t.step("test one negative one zero", (): void => {
        const pair: SquarePair = SliceSquarePair([-2, 0]);
        const product: number = CalculateProduct(pair);
        assertEquals(0, product)
    });

    await t.step("test one positive one negative one zero", (): void => {
        const pair: SquarePair = SliceSquarePair([-2, 1, 0]);
        const product: number = CalculateProduct(pair);
        assertEquals(0, product)
    });

    await t.step("test 10 positive, 10 negative, 10 zeros", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        const product: number = CalculateProduct(pair);
        assertEquals(90, product)
    });

    await t.step("test 10 zeros", (): void => {
        const pair: SquarePair = SliceSquarePair([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        const product: number = CalculateProduct(pair);
        assertEquals(0, product)
    });

    await t.step("test 2 zeros", (): void => {
        const pair: SquarePair = SliceSquarePair([0, 0]);
        const product: number = CalculateProduct(pair);
        assertEquals(0, product)
    });

    await t.step("test 2 sets of positive and negative values of the same magnitude", (): void => {
        const pair: SquarePair = SliceSquarePair([-5, -5, 5, 5]);
        const product: number = CalculateProduct(pair);
        assertEquals(25, product)
    });
});

Deno.test("test known cases", async (t: Deno.TestContext): Promise<void> => {
    await t.step("test known case 1 - [10, 10]", (): void => {
        const pair: SquarePair = SliceSquarePair([10, 10]);
        const product: number = CalculateProduct(pair);
        assertEquals(100, product)
    });

    await t.step("test known case 2 - [-10, 10]", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, 10]);
        const product: number = CalculateProduct(pair);
        assertEquals(-100, product)
    });

    await t.step("test known case 3 - [-10, -10]", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, -10]);
        const product: number = CalculateProduct(pair);
        assertEquals(100, product)
    });

    await t.step("test known case 4 - [-10, 1, 10]", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, 1, 10]);
        const product: number = CalculateProduct(pair);
        assertEquals(10, product)
    });

    await t.step("test known case 4 - [-10, -1, 10]", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, -1, 10]);
        const product: number = CalculateProduct(pair);
        assertEquals(10, product)
    });

    await t.step("test known case 5 - [-10, -2, 10, 2, -3]", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, -2, 10, 2, -3]);
        const product: number = CalculateProduct(pair);
        assertEquals(30, product)
    });

    await t.step("test known case 6 - [-10, -3, -2, 2, 10]", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, -3, -2, 2, 10]);
        const product: number = CalculateProduct(pair);
        assertEquals(30, product)
    });

    await t.step("test known case 7 - [-10, 0, 10, 0]", (): void => {
        const pair: SquarePair = SliceSquarePair([-10, 0, 10, 0]);
        const product: number = CalculateProduct(pair);
        assertEquals(0, product)
    });

    await t.step("test known case 8 - [0, 0, 0, 0]", (): void => {
        const pair: SquarePair = SliceSquarePair([0, 0, 0, 0]);
        const product: number = CalculateProduct(pair);
        assertEquals(0, product)
    });
})
