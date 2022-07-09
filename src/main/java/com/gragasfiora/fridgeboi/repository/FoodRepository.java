package com.gragasfiora.fridgeboi.repository;

import com.gragasfiora.fridgeboi.model.Food;
import org.springframework.data.repository.CrudRepository;

public interface FoodRepository extends CrudRepository<Food, Long> {
}
