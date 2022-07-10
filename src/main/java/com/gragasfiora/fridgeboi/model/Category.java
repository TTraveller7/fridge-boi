package com.gragasfiora.fridgeboi.model;

import org.apache.commons.lang3.builder.ToStringBuilder;

import javax.persistence.*;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String description;

    @Column
    private Integer maxStoreDays;

    public Category() {

    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("description", description)
                .append("maxStoreDays", maxStoreDays)
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

    public Integer getMaxStoreDays() {
        return maxStoreDays;
    }

    public void setMaxStoreDays(Integer maxStoreDays) {
        this.maxStoreDays = maxStoreDays;
    }
}
