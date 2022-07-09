package com.gragasfiora.fridgeboi.controller;

import com.gragasfiora.fridgeboi.exception.FoodNotFoundException;
import com.gragasfiora.fridgeboi.model.Food;
import com.gragasfiora.fridgeboi.service.FoodService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FoodController {

    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("/foods")
    public List<Food> all() {
        return foodService.findAll();
    }

    @GetMapping("/foods/{id}")
    public Food one(@PathVariable String id) {
        return foodService.findFoodById(Long.valueOf(id));
    }

    @PostMapping("/foods")
    public Food newFood(@RequestBody Food food) {
        return foodService.save(food);
    }

    @PutMapping("/foods/{id}")
    public Food replaceFood(@PathVariable String id, @RequestBody Food newFood) {
        return foodService.replaceOrSave(Long.valueOf(id), newFood);
    }

    @DeleteMapping("/foods/{id}")
    public void deleteFood(@PathVariable String id) {
        foodService.deleteById(Long.valueOf(id));
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(FoodNotFoundException.class)
    public String handelFoodNotFound(FoodNotFoundException foodNotFoundException) {
        return foodNotFoundException.getMessage();
    }
}
