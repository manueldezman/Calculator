# Simple JavaScript Calculator

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

A browser-based calculator built with **Vanilla JavaScript** that
performs basic arithmetic operations using DOM event handling and
modular JavaScript patterns.

------------------------------------------------------------------------

# Live Demo

Try the calculator here:

**Live Preview:**\
https://manueldezman.github.io/Calculator/

------------------------------------------------------------------------

# JavaScript Concepts Demonstrated

### IIFE (Immediately Invoked Function Expression)

The calculator logic is implemented using an IIFE to create a private
scope and prevent global namespace pollution.

### Closures

The variable `lastResult` is maintained inside the calculator module and
accessed through exposed methods, demonstrating closure behavior.

### DOM Manipulation

The application dynamically interacts with the webpage using the DOM API
to update the calculator display and modify UI elements.

### Event Delegation

A single click event listener is attached to the button container, and
the clicked element is determined using `event.target`.

### Switch Statements

The `operate()` function uses a switch statement to determine which
arithmetic operation should run.

### Array Methods

`Array.from()` converts NodeLists to arrays, enabling iteration over
operator elements to manage UI state.

------------------------------------------------------------------------

# Problem-Solving Approach

The goal of this project was to implement a functional calculator
capable of handling sequential arithmetic operations while maintaining
UI state.

The solution separates logic into three major components:

1.  **Calculator Module** -- Arithmetic operations are encapsulated
    inside an IIFE module.
2.  **Operation Dispatcher** -- The `operate()` function routes
    calculations to the correct arithmetic function.
3.  **Event-Driven UI** -- User interactions trigger the `display()`
    function, which determines whether the input represents numbers,
    operators, or commands.

The application also handles **chained operations**, allowing
calculations such as:

    5 + 3 X 2

Execution flow:

    5 + 3 = 8
    8 X 2 = 16

This behavior mirrors how traditional handheld calculators operate.

------------------------------------------------------------------------

# Key Features

-   Basic arithmetic operations (Add, Subtract, Multiply, Divide)
-   Modular calculator engine using the module pattern
-   Sequential calculations without resetting
-   Operator highlighting for active operations
-   Clear/reset functionality
-   Dynamic display scaling for long numbers
-   Last result tracking

------------------------------------------------------------------------

# Usage / Setup

## Clone the Repository

``` bash
git clone https://github.com/manueldezman/Calculator.git
```

Navigate into the project folder:

``` bash
cd Calculator
```

Open the HTML file in your browser.

------------------------------------------------------------------------

## Run with a Local Dev Server (Optional)

``` bash
npx serve .
```

Then open the provided local URL.

------------------------------------------------------------------------

# Example Usage

    Input: 12 + 7 =
    Output: 19

    Input: 8 X 4 =
    Output: 32

------------------------------------------------------------------------

# Future Improvements

Potential enhancements:

-   Decimal calculations
-   Operator precedence
-   Unit testing for calculator logic
-   Conversion to ES modules
-   Mobile responsive improvements

------------------------------------------------------------------------

⭐ If you find this project useful, consider starring the repository.