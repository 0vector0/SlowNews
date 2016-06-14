package com.github.mykhalechko.slownews.logic;

/**
 * Created by vector on 14.06.2016.
 */
public enum Operation {
    add("add"), sub("sub"), mult("mult"), div("div");

    private String name;

    Operation(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String toString() {

        switch (this) {
            case add: {
                return "+";
            }
            case sub: {
                return "-";
            }
            case mult: {
                return "*";
            }
            case div: {
                return "/";
            }
        }
        return this.name;
    }
}




