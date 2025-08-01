import mongoose, { Schema, model, models } from 'mongoose'

const recipeSchema = new Schema({
  id: { type: Number, required: true },
  name: String,
  ingredients: [String],
  instructions: [String],
  prepTimeMinutes: Number,
  cookTimeMinutes: Number,
  servings: Number,
  difficulty: String,
  cuisine: String,
  caloriesPerServing: Number,
  tags: [String],
  userId: Number,
  image: String,
  rating: Number,
  reviewCount: Number,
  mealType: [String],
})

export default mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema)
