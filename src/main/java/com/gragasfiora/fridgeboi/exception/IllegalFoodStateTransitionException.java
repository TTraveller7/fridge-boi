package com.gragasfiora.fridgeboi.exception;

import com.gragasfiora.fridgeboi.model.FoodState;

public class IllegalFoodStateTransitionException extends RuntimeException {
    public IllegalFoodStateTransitionException(FoodState initialFoodState, FoodState desiredFoodState) {
        super("Cannot transit from " + initialFoodState + " to " + desiredFoodState);
    }
}
