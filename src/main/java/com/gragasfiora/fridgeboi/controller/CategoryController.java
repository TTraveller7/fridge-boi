package com.gragasfiora.fridgeboi.controller;

import com.gragasfiora.fridgeboi.assembler.CategoryModelAssembler;
import com.gragasfiora.fridgeboi.model.Category;
import com.gragasfiora.fridgeboi.service.CategoryService;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api")
public class CategoryController {

    private final CategoryService categoryService;

    private final CategoryModelAssembler categoryModelAssembler;

    public CategoryController(CategoryService categoryService, CategoryModelAssembler categoryModelAssembler) {
        this.categoryService = categoryService;
        this.categoryModelAssembler = categoryModelAssembler;
    }

    @GetMapping("/categories")
    public CollectionModel<EntityModel<Category>> all() {
        List<EntityModel<Category>> categoryModels = categoryService.findAll().stream()
                .map(categoryModelAssembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(categoryModels)
                .add(linkTo(methodOn(FoodController.class).all()).withSelfRel());
    }

    @GetMapping("/categories/{id}")
    public EntityModel<Category> one(@PathVariable String id) {
        Category category = categoryService.findById(Long.valueOf(id));
        return categoryModelAssembler.toModel(category);
    }
}
