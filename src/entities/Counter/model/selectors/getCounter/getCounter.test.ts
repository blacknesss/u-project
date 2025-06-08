import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";
import { Draft } from "@reduxjs/toolkit";

describe( 'getCounter', () => {
    test( 'should return counter value', () => {
        const state: Partial<Draft<StateSchema>> = {
            counter: {value: 10}
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})