package com.gragasfiora.fridgeboi.assembler;

import com.gragasfiora.fridgeboi.controller.FoodController;
import com.gragasfiora.fridgeboi.model.Food;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class FoodModelAssembler implements RepresentationModelAssembler<Food, EntityModel<Food>> {
    @Override
    public EntityModel<Food> toModel(Food entity) {
        String idString = entity.getId().toString();
        return EntityModel.of(entity)
                .add(linkTo(methodOn(FoodController.class).one(idString)).withSelfRel())
                .add(linkTo(methodOn(FoodController.class).all()).withRel("foods"));
    }
}
