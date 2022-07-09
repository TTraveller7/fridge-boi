package com.gragasfiora.fridgeboi.service.impl;

import com.gragasfiora.fridgeboi.exception.FoodNotFoundException;
import com.gragasfiora.fridgeboi.model.Food;
import com.gragasfiora.fridgeboi.repository.FoodRepository;
import com.gragasfiora.fridgeboi.service.FoodService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;

    public FoodServiceImpl(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @Override
    public Food findFoodById(Long id) {
        return foodRepository.findById(id)
                .orElseThrow(() -> new FoodNotFoundException(id));
    }

    @Override
    public List<Food> findAll() {
        List<Food> foods = new ArrayList<>();
        for (Food food : foodRepository.findAll()) {
            foods.add(food);
        }

        return foods;
    }

    @Override
    public Food save(Food food) {
        return foodRepository.save(food);
    }

    @Override
    public void deleteById(Long id) {
        foodRepository.deleteById(id);
    }

    @Override
    public Food replaceOrSave(Long id, Food newFood) {
        newFood.setId(id);
        return foodRepository.save(newFood);
    }
}
