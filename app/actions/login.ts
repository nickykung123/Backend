'use server'

import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {

    const rawFormData = {
        username: formData.get('username'),
        password: formData.get('password'),

    }

    console.log(rawFormData, rawFormData.username == 'nickykung123' && rawFormData.password == '123456789')

    //Call database
    if (rawFormData.username == 'nickykung123' && rawFormData.password == '123456789'){
        console.log('test')
        redirect('/')
    } else {
        return { message: "Username and password is not correct"}
    }

}