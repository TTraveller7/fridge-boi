package com.gragasfiora.fridgeboi.service;

import com.gragasfiora.fridgeboi.model.Food;
import com.gragasfiora.fridgeboi.model.FoodState;

import java.util.List;

public interface FoodService {
    Food findFoodById(Long id);

    List<Food> findAll();

    Food save(Food food);

    void deleteById(Long id);

    Food replaceOrSave(Long id, Food newFood);

    Food finishFoodById(Long id);

    Food throwFoodById(Long id);

    Food storeFoodById(Long id);
}
