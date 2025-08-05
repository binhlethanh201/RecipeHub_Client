export interface Recipe{
    id: string,
    slug: string,
    name: string,
    image: string,
    rating: number,
    tags: string[],
    ingredients: string[],
    instructions: string[]
}