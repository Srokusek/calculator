const calculator = document.querySelector("#calculator")
const screen = document.querySelector("#screen")
const keyboard = document.querySelector("#keyboard")
const button = document.createElement("button")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operation")
const enter = document.querySelector(".enter")
const ac = document.querySelector("#ac")
const del = document.querySelector("#del")

let holdValue = []
let num1 = []
let num2 = []
let operator = ""

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function divide(num1, num2) {
    return num1 / num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2)
    }
    if (operator == "-") {
        return subtract(num1, num2)
    }
    if (operator == "/") {
        return divide(num1, num2)
    }
    if (operator == "*") {
        return multiply(num1, num2)
    }
}

function type(number, arr) {
    arr.push(number)
    return arr
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        holdValue = type(number.id, holdValue)
        screen.textContent = holdValue.join("")
    })
})

operators.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (num1.length == 0 && num2.length == 0) {
            num1 = parseInt(holdValue.join(""), 10)
            holdValue = []
            screen.textContent = holdValue.join("")
            operator = operation.id
        }
        if (num1.length != 0 && holdValue.length != 0) {
            num2 = parseInt(holdValue.join(""), 10)
            num1 = operate(num1, num2, operator)
            screen.textContent = num1
            operator = operation.id
            holdValue = []
        }
    })   
})

enter.addEventListener("click", () => {
    num2 = parseInt(holdValue.join(""), 10)
    num1 = operate(num1, num2, operator)
    screen.textContent = num1
})

ac.addEventListener("click", () => {
    num1 = []
    num2 = []
    holdValue = []
    operator = ""
    screen.textContent = holdValue.join("")
})

del.addEventListener("click", () => {
    holdValue.pop()
    screen.textContent = holdValue.join("")
})