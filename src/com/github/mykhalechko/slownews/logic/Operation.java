package com.github.mykhalechko.slownews.logic;

/**
 * Created by vector on 14.06.2016.
 */
public enum Operation {
    ADD("ADD"), SUB("SUB"), MULT("MULT"), DIV("DIV");

    private String name;

    Operation(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String toString() {

        switch (this) {
            case ADD: {
                return "+";
            }
            case SUB: {
                return "-";
            }
            case MULT: {
                return "*";
            }
            case DIV: {
                return "/";
            }
        }
        return this.name;
    }
}




