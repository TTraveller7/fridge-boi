package com.gragasfiora.fridgeboi.model;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    private LocalDateTime localDateTime;

    public Food() {

    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("description", description)
                .append("amount", amount)
                .append("localDateTime", localDateTime)
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

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }
}
