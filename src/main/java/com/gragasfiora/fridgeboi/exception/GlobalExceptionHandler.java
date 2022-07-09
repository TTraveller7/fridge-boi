package com.gragasfiora.fridgeboi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(FoodNotFoundException.class)
    public String handelFoodNotFound(FoodNotFoundException e) {
        return e.getMessage() + "\n";
    }

    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    @ExceptionHandler(IllegalFoodStateTransitionException.class)
    public String handelIllegalFoodStateTransition(IllegalFoodStateTransitionException e) {
        return e.getMessage() + "\n";
    }
}
