import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
/*     recipe: {type: String, required: false}, */
    image: {type: String, required: true},
    category: {type: String, required: true},
    difficulty: {type: String, required: true},
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;