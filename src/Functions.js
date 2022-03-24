/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    const newArr = [];
    return (args) => {
        if (num < args) {
            return newArr.push(args);
        }
    };
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    const newArr = [];
    return (args) => {
        if (args.includes(substr)) {
            return newArr.push(args);
        }
    };
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    return function multiply2(num2) {
        return num * num2;
    };
}
