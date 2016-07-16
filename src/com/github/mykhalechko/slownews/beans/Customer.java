package com.github.mykhalechko.slownews.beans;

public class Customer {

    private String firstName;
    private String lastName;
    private int sum;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getSum() {
        return sum;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    @Override
    public String toString() {
        return "firstName - " + firstName + " " + "lastName - " + lastName + "sum - " + sum;
    }
}
