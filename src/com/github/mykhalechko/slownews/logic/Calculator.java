package com.github.mykhalechko.slownews.logic;

public class Calculator {

    public double getResult(String operation, int first, int second){

        // addition, subtraction, multiplication, division

        double result = 0;

        if (operation.equalsIgnoreCase("ADD")) {
            return  first + second;
        }
        if (operation.equalsIgnoreCase("SUB")) {
            return  first - second;
        }
        if (operation.equalsIgnoreCase("mult")) {
            return  first * second;
        }
        if (operation.equalsIgnoreCase("div")) {

            if (second == 0) {
                new ArithmeticException();
            }
            return (first / second);
        }
        return result;
    }
}
