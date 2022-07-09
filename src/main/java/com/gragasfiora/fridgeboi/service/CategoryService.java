package com.gragasfiora.fridgeboi.service;

import com.gragasfiora.fridgeboi.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> findAll();

    Category findById(Long id);
}
