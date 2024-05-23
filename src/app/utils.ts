export const calcWords = (text: string): number => text.split(' ').map(word => word.trim()).length
export const calcSymbols = (text: string): number => text.split('').map((word)=>word.trim()).filter(word => word.length !== 0).length
