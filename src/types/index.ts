export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
} 
//heredar y extender un type

/*
 Utility Types

export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
    quantity: number
}
export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
    quantity: number
}
*/
