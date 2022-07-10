package com.gragasfiora.fridgeboi.model;

import javax.persistence.*;
import java.time.LocalDate;

import org.apache.commons.lang3.builder.ToStringBuilder;

@Entity
public class Food {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column
    private String description;

    @Column
    private Integer amount;

    @Column
    private LocalDate startStoreDate;

    @Column
    @Enumerated(EnumType.STRING)
    private FoodState foodState;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    public Food() {

    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("description", description)
                .append("amount", amount)
                .append("startStoreDate", startStoreDate)
                .append("foodState", foodState)
                .append("category", category)
                .toString();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public LocalDate getStartStoreDate() {
        return startStoreDate;
    }

    public void setStartStoreDate(LocalDate startStoreDate) {
        this.startStoreDate = startStoreDate;
    }

    public FoodState getFoodState() {
        return foodState;
    }

    public void setFoodState(FoodState foodState) {
        this.foodState = foodState;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
