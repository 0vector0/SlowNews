package com.github.mykhalechko.slownews.logic;

public class Calculator {

    public double getResult(Operation operation, double first, double second) {

        // addition, subtraction, multiplication, division
        switch (operation) {
            case ADD:
                return first + second;
            case SUB:
                return first - second;
            case MULT:
                return first * second;
            case DIV: {
                if (second == 0) {
                    throw new ArithmeticException();
                } else {
                    return first / second;
                }
            }
        }
        throw new NumberFormatException();
    }
}
