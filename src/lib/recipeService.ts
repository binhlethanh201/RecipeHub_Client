import RecipeModel from '@/src/models/Recipe'
import { connectDB } from '@/src/lib/db'
import {Recipe} from '@/src/types/recipe'
import slugify from 'slugify'

export async function getAllRecipes() {
  await connectDB()
  const recipes = await RecipeModel.find().lean()  
  return recipes.map((r) => ({
    id: r.id.toString(),  
    slug: r.slug, 
    name: r.name,
    image: r.image,
    rating: r.rating,
    tags: r.tags || []
  }))
}

export async function searchRecipes(query: string): Promise<Recipe[]> {
  await connectDB()
  const results = await RecipeModel.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { cuisine: { $regex: query, $options: 'i' } },
      { tags: { $in: [new RegExp(query, 'i')] } },
      { mealType: { $in: [new RegExp(query, 'i')] } },
      { ingredients: { $in: [new RegExp(query, 'i')] } }
    ]
  })
  return results.map((r) => ({
    id: r._id.toString(),
  slug: r.slug,
  name: r.name,
  image: r.image,
  rating: r.rating,
  tags: r.tags || [],
  ingredients: r.ingredients || [],
  instructions: r.instructions || []
  }))
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  await connectDB()
  const r = await RecipeModel.findOne({ slug }).lean() as any
  if (!r) return null
  return {
    id: r._id.toString(),
    slug: r.slug,
    name: r.name,
    image: r.image,
    rating: r.rating,
    tags: r.tags || [],
    ingredients: r.ingredients || [],
    instructions: r.instructions || []
  }
}

export async function getAllSlugs() {
  await connectDB()
  return await RecipeModel.find({}, { slug: 1, _id: 0 }) 
}

export async function createRecipe(data: any) {
  await connectDB()
  const last = await RecipeModel.findOne().sort({ id: -1 }).limit(1)
  const nextId = last ? last.id + 1 : 1
  const slug = slugify(data.name, { lower: true })

  return await RecipeModel.create({ ...data, id: nextId, slug })
}

