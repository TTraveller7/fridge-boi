package com.gragasfiora.fridgeboi.service.impl;

import com.gragasfiora.fridgeboi.model.Category;
import com.gragasfiora.fridgeboi.repository.CategoryRepository;
import com.gragasfiora.fridgeboi.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> findAll() {
        List<Category> categories = new ArrayList<>();
        for (Category category : categoryRepository.findAll()) {
            categories.add(category);
        }

        return categories;
    }

    @Override
    public Category findById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException());
    }
}
