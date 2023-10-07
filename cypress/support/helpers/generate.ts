export const generateUsername = (name: string) => {
    return `${name}${Math.floor(Math.random() * 10000)}`
}

export const generateEmail = (name: string) => {
    return `${name}${Math.floor(Math.random() * 10000)}@test.com`
}

export const generatePassword = () => {
    return `${Math.floor(Math.random() * 1000000)}`
}

