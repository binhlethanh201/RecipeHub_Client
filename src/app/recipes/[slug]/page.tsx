import { getRecipeBySlug, getAllSlugs } from '@/src/lib/recipeService'

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs() 
  return slugs.map(({ slug }) => ({ slug }))
}

export default async function RecipeDetail({ params }: PageProps) {
  const recipe = await getRecipeBySlug(params.slug)

  if (!recipe) return <div>Recipe not found</div>

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} width={300} />
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong></p>
      <ol>
        {recipe.instructions.map((step: string, i: number) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  )
}
