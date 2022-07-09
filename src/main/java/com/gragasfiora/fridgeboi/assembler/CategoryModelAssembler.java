package com.gragasfiora.fridgeboi.assembler;

import com.gragasfiora.fridgeboi.controller.CategoryController;
import com.gragasfiora.fridgeboi.model.Category;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class CategoryModelAssembler implements RepresentationModelAssembler<Category, EntityModel<Category>> {
    @Override
    public EntityModel<Category> toModel(Category entity) {
        String id = entity.getId().toString();
        return EntityModel.of(entity)
                .add(linkTo(methodOn(CategoryController.class).all()).withRel("categories"))
                .add(linkTo(methodOn(CategoryController.class).one(id)).withSelfRel());
    }
}
