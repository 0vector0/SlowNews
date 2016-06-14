package com.github.mykhalechko.slownews.logic;

public class Calculator {

    public double getResult(Operation operation, double first, double second) {

        // addition, subtraction, multiplication, division
        double result = 0;
        switch (operation) {
            case add:
                return first + second;
            case sub:
                return first - second;
            case mult:
                return first * second;
            case div: {
                if (second == 0) {
                    new ArithmeticException();
                }
                return first / second;
            }
        }
        new NumberFormatException();
        return result;
    }
}
