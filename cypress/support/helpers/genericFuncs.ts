export const genericUsername = (name: string) => {
    return `${name}${genericString()}`
}

export const genericEmail = (name: string) => {
    return `${name}${genericString()}@test.com`
}

export const genericString = () => {
    return `${Math.floor(Math.random() * 1000000)}`
}

