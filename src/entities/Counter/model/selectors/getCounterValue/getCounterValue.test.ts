import { StateSchema } from "app/providers/StoreProvider"
import { getCounterValue } from "./getCounterValue"
import { Draft } from "@reduxjs/toolkit"

describe('', () => {
    test('', () => {
        const state: Partial<Draft<StateSchema>> = {
            counter: {value: 10}
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})