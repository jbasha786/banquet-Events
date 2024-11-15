import { BaseModel } from "../shared/_models/headerModel"

export interface RegisterModel extends BaseModel {
    fullName: string
    firstName: string
    lastName: string
    email: string
    relatie: string
    phone: string
    password1: string
    password2: string
}


export function prepareRegisterRequest(registerData: any) {
    return {
        fullName: registerData.fullName,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        relatie: registerData.relatie,
        phone: JSON.stringify(registerData.phone),
        password1: registerData.password,
        password2: registerData.confirmPassword
    }
}