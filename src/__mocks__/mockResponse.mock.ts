import { Response } from 'express'

export type mockResponse<Tresult> = Response & {
    state:{
        status?:number,
        json?:Tresult | unknown
    }
}

export function makeMockResponse<Tresult> () {
    const response = {
        state: {}
    } as mockResponse<Tresult>

    response.status = (status:number) => {
        response.state.status = status
        return response
    }

    response.json = (json:Tresult) => {
        response.state.json = json
        return response
    }

    return response
}

