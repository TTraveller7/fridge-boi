package com.gragasfiora.fridgeboi.controller;

import com.gragasfiora.fridgeboi.assembler.FoodModelAssembler;
import com.gragasfiora.fridgeboi.model.Food;
import com.gragasfiora.fridgeboi.service.FoodService;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/api")
public class FoodController {

    private final FoodService foodService;

    private final FoodModelAssembler foodModelAssembler;

    public FoodController(FoodService foodService, FoodModelAssembler foodModelAssembler) {
        this.foodService = foodService;
        this.foodModelAssembler = foodModelAssembler;
    }

    // aggregate root
    @GetMapping("/foods")
    public CollectionModel<EntityModel<Food>> all() {
        List<EntityModel<Food>> foodModels = foodService.findAll().stream()
                .map(foodModelAssembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(foodModels)
                .add(linkTo(methodOn(FoodController.class).all()).withSelfRel());
    }

    // single object
    @GetMapping("/foods/{id}")
    public EntityModel<Food> one(@PathVariable String id) {
        Food food = foodService.findFoodById(Long.valueOf(id));
        return foodModelAssembler.toModel(food);
    }

    @PostMapping("/foods")
    @ResponseStatus(HttpStatus.CREATED)
    public EntityModel<Food> newFood(@RequestBody Food food) {
        Food savedFood = foodService.save(food);
        return foodModelAssembler.toModel(savedFood);
    }

    @PutMapping("/foods/{id}")
    public EntityModel<Food> replaceFood(@PathVariable String id, @RequestBody Food newFood) {
        Food savedFood = foodService.replaceOrSave(Long.valueOf(id), newFood);
        return foodModelAssembler.toModel(savedFood);
    }

    @DeleteMapping("/foods/{id}")
    public void deleteFood(@PathVariable String id) {
        foodService.deleteById(Long.valueOf(id));
    }

    // handle state transition
    @GetMapping("/foods/{id}/finish")
    public EntityModel<Food> finishFood(@PathVariable String id) {
        Food food = foodService.finishFoodById(Long.valueOf(id));
        return foodModelAssembler.toModel(food);
    }

    @GetMapping("/foods/{id}/throw")
    public EntityModel<Food> throwFood(@PathVariable String id) {
        Food food = foodService.throwFoodById(Long.valueOf(id));
        return foodModelAssembler.toModel(food);
    }
}
