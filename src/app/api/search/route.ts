import { NextResponse } from 'next/server'
import { searchRecipes} from '@/src/lib/recipeService'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') || ''
  const recipes = q ? await searchRecipes(q) : []
  return NextResponse.json(recipes)
}
