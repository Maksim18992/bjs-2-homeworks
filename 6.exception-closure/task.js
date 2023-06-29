"use strict"

function parseCount(count) {
	if (isNaN(Number.parseFloat(count))) {
		throw new Error("Невалидное значение")
	}
	return Number.parseFloat(count)
}

function validateCount(count) {
	try {
		return parseCount(count)
	} catch (error) {
		return error
	}
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }

    }

    get perimeter() {
		return this.a + this.b + this.c;
	}
	get area() {
		let p = (this.a + this.b + this.c) / 2
        let square = Math.sqrt(p  * (p  - this.a) * (p  - this.b) * (p  - this.c));
        return parseFloat(square.toFixed(3));
	}

}

    function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c);
        } catch (e) {
            return {
                get perimeter() {
                    return "Ошибка! Треугольник не существует"
                },
                get area() {
                    return "Ошибка! Треугольник не существует"
                }
            }
        }

    }

