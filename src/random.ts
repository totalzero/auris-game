export function randomInteger(min: number, max: number): number {
return Math.floor(Math.random() * (max - min) + min)
}

export function randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

export function randomBoolean(): boolean {
 let rnd = Math.random()    * (5 - 1) + 1
 return rnd <= 2.5
}