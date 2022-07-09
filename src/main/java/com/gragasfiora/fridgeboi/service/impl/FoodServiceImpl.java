package com.gragasfiora.fridgeboi.service.impl;

import com.gragasfiora.fridgeboi.exception.FoodNotFoundException;
import com.gragasfiora.fridgeboi.model.Food;
import com.gragasfiora.fridgeboi.repository.FoodRepository;
import com.gragasfiora.fridgeboi.service.FoodService;
import org.springframework.stereotype.Service;

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
}
