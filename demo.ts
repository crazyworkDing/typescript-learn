function demo(person: string) {
  return 'hello' + " " + person;
}
let person: string = 'tom';
demo(person);
let isDone: boolean = false;
let isDone2: Boolean = new Boolean(1); //(Boolean是javascript的构造函数，boolean是基本类型)(在typescript中)

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

interface Person {
  readonly id: number,
  name: string,
  age?: number //?代表可以没有这个属性，初次之外，其他的属性必须和此属性数量定义相同，不得多和少
  [propName: string]: any
}
let obj1: Person = {
  id: 5511,
  name: 'asda',
  age: 18,
  gender: 'fsddf'
  // age: 18
}

function sum() {
  let args: {
      [index: number]: number;
      length: number;
      callee: Function;
  } = arguments;
}

enum Color {Red, Green, Blue = "blue".length};
console.log(Color);

class Animal {
  name = 'jack';
  constructor(){}
}
let bc = new Animal();
console.log(bc.name);


class name2 {
  static aa = 'javv';
  constructor() {}
}
console.log(name2.aa);

let b:Boolean = new Boolean(1);
let c:boolean = true;
let d: Error = new Error('as');
let e: Date = new Date();
let f: RegExp = new RegExp('/[a-z]/');
let f1: RegExp = /[a-z]/;
Math.pow(10,2);
let name3: string;



interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({length:7});

interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
type demo2 = {
  subjectName?: 'sda',
  name?: 'dsds'
}
function defaultPreviewCreator(variables: demo2[]) {
  return variables.map(v=>v)
}