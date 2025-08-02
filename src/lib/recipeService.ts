import Recipe from '@/src/models/Recipe'
import { connectDB } from '@/src/lib/db'

export async function getAllRecipes() {
  await connectDB()
  const recipes = await Recipe.find().lean()  
  return recipes.map((r) => ({
    id: r.id.toString(),   
    name: r.name,
    image: r.image,
    rating: r.rating,
  }))
}


export async function getRecipeById(id: string) {
    await connectDB()
    const recipe = await Recipe.findOne({ id: Number(id) }).lean()
    return JSON.parse(JSON.stringify(recipe))
}

export async function createRecipe(data: any) {
  await connectDB()
  const last = await Recipe.findOne().sort({ id: -1 }).limit(1)
  const nextId = last ? last.id + 1 : 1
  return await Recipe.create({ ...data, id: nextId })
}

export async function updateRecipe(id: string, data: any) {
  await connectDB()
  return await Recipe.findOneAndUpdate({ id: Number(id) }, data, { new: true })
}

export async function deleteRecipe(id: string) {
  await connectDB()
  return await Recipe.findOneAndDelete({ id: Number(id) })
}
