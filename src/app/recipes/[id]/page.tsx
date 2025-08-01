import { getRecipeById } from '@/src/lib/recipeService'

type PageProps = {
  params: { id: string }
}

export default async function RecipeDetail(props: PageProps) {
  const { id } = await props.params  
  const recipe = await getRecipeById(id)

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
