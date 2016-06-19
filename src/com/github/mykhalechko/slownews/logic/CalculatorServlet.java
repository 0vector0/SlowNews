package com.github.mykhalechko.slownews.logic;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/CalculatorServlet")
public class CalculatorServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {

        System.out.println(request.getParameter("operation").toUpperCase());

        if (request.getParameter("operation") != null && request.getParameter("first") != null
                && request.getParameter("second") != null) {
            try {
                request.getCharacterEncoding();
                Operation operation = Operation.valueOf(request.getParameter("operation").toUpperCase());
                double first = Double.parseDouble(request.getParameter("first"));
                double second = Double.parseDouble(request.getParameter("second"));
                System.out.print(operation + " " + first + " " + second);

                try {
                    double result = new Calculator().getResult(operation, first, second);
                    response.getWriter().println(String.format("%.2f", first) + " " + operation + " " + String.format("%.2f", second)
                            + " = " + String.format("%.2f", result));

                } catch (ArithmeticException e) {
                    response.getWriter().println("division by zero");
                }
            } catch (NumberFormatException e) {
                response.getWriter().println("invalid number format");
            }
        }
    }
}
