/* const o1 = {}
const o2 = {
  name: 'John'
}
const o3 = {
  name: 'Bill',
  age: 30
}

const names = {
  name: 'John',
  name: 'Bill'
}

const names2 = {
  0: 'John',
  1: 'Bill'
} */

// console.log(names.name)
// console.log(names2.'0')
// console.log(names2[0])
// console.log(names2[1])

/* const names = ['Bill', 'John']
names[2] = 'Noname1'
names[names.length] = 'Noname2'
names.push('Noname3') // добавить новый элемент в конец массива
names.unshift('Noname0') // добавить новый элемент в начало массива,
// то есть под индекс 0, а у всех следующих элементов,
// которые уже были в массиве, индекс увеличится на 1
console.log(`Deleted element is: ${names.shift()}`)
console.log(`Deleted element is: ${names.pop()}`)
delete names[1]
names[1] = 'Ivan' */
/* console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4]) */
/* for (let i = 0; i < names.length; i++) {
  console.log(names[i])
} */


// 0->0, 1->1, 2->1, 3->2, 4->3, 5->5, 6->8, 7->13
/* function fib(n) {
  const elements = [0, 1]
  for (let i = 2; i <= n; i++) {
    elements.push(elements[i - 1] + elements[i - 2])
  }
  return n === 0 ? 0 : elements.pop()
} */

// console.log(fib(40))
/* for (let i = 0; i <= 7; i++) {
  console.log(fib(i))
} */

// console.log(fib(50))

// Task 1
// создать массив, в котором сразу будет 7 элементов - строки - названия дней недели
// создать цикл, который выполнит столько шагов, сколько элементов в массиве, то есть 7
// в теле цикла выполняйте проверку:
// - если номер дня - четное число - удалять этот элемент из массива,
// а нечетные - оставить
// (номерами дней считать числа начиная с 1, то есть от 1 до 7)
// пример строки кода: if((i + 1) % 2 === 0) {// значит номер - четный}
// затем вывести результаты циклом

/* 2D Arrays */
const x = ['O', 'X', 'O']

/* const x2 = [x, x, x]
console.log(x2[0]) // первая строка двумерного массива
console.log(x2[0][1]) // второй элмент из первой строки
x2[0][1] = 'O'
console.log(x2) */

// JSON
// {"name":"John", "salary":20000}

/* const xJsonString = JSON.stringify(x)
console.log(xJsonString)
const xClone = JSON.parse(xJsonString)
console.log(xClone) */

/*function clone(o) {
  return JSON.parse(JSON.stringify(o))
}*/

// const x2 = [clone(x), clone(x), clone(x)]
// console.log(x2)
// x2[0][1] = 'O' // обращение к первой строке двумерного массива
// (через индекс 0, соответствующий первому элементу внешнего массива),
// ко второму ее элементу (индекс 1 вложенного массива)
// и запись в этот элемент значения 'O'
// console.log(x2)

// в начале программы создать пустой двумерный массив 3 х 3 [[], [], []]
// заполнить ячеки двумерного массива вымышленными результатами игры:
// в одних ячеках будут О, в других - Х, в третьих - _,
// затем вложенными циклами вывести всю таблицу значений в кнсоль:
// внешнишний цикл будет перемещать нас по строкам двумерного массива,
// а вложенный в него цикл - по ячейкам строки (то есть по элементам текущего подмассива)