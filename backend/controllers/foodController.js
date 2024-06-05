import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item to the database
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
     /*    recipe: req.body.recipe, */
        image: image_filename,
        category: req.body.category,
        difficulty: req.body.difficulty,
    })
    try {                       // using this method, food will be saved in the database
        await food.save()
        res.json({success:true, message:"Food added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to add food"})
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export {addFood,listFood, removeFood}