const mapFoodToSimpleFood = (food) => ({
    id: food.id,
    name: food.name,
    description: food.description,
    origin: food.origin,
    privince: food.province,
    image: food.image,
    created_at: food.created_at,
});
  
module.exports = { mapFoodToSimpleFood };
  