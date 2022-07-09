package com.gragasfiora.fridgeboi.service;

import com.gragasfiora.fridgeboi.model.Food;

import java.util.List;

public interface FoodService {
    Food findFoodById(Long id);

    List<Food> findAll();

    Food save(Food food);

    void deleteById(Long id);

    Food replaceOrSave(Long id, Food newFood);
}
