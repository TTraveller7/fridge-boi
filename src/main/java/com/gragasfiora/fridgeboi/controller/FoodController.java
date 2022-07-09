package com.gragasfiora.fridgeboi.controller;

import com.gragasfiora.fridgeboi.exception.FoodNotFoundException;
import com.gragasfiora.fridgeboi.model.Food;
import com.gragasfiora.fridgeboi.service.FoodService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class FoodController {

    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @ResponseBody
    @GetMapping("/foods")
    public List<Food> all() {
        return foodService.findAll();
    }

    @ResponseBody
    @GetMapping("/foods/{id}")
    public Food one(@PathVariable String id) {
        return foodService.findFoodById(Long.valueOf(id));
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(FoodNotFoundException.class)
    public String handelFoodNotFound(FoodNotFoundException foodNotFoundException) {
        return foodNotFoundException.getMessage();
    }
}
