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
    private LocalDate bestBeforeDate;

    @Column
    @Enumerated(EnumType.STRING)
    private FoodState foodState;

    public Food() {

    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("description", description)
                .append("amount", amount)
                .append("bestBeforeDate", bestBeforeDate)
                .append("foodState", foodState)
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

    public LocalDate getBestBeforeDate() {
        return bestBeforeDate;
    }

    public void setBestBeforeDate(LocalDate localDateTime) {
        this.bestBeforeDate = localDateTime;
    }

    public FoodState getFoodState() {
        return foodState;
    }

    public void setFoodState(FoodState foodState) {
        this.foodState = foodState;
    }
}
