let demo1: number = 1;
let demo2: string = 's';
let demo3: object = {};
let demo4: number[] = [3,4];
let demo5: any[] = ['2',{}, 2];
let demo6: boolean = true;
let demo7: undefined = null;
let demo8: null = undefined;
let demo9: undefined = undefined;
let demo10: null = null;
let demo11: symbol;
let demo12: boolean = Boolean(1); // let demo12: boolean = new Boolean(1)不可以，返回的是boolean对象
let demo13: string = `${demo2}this is demo`
function demo14(): void {
  alert('11')
}
let demo15: any = '112';
demo15 = 111;
let demo16: string|number = '1';
let demo17: string|number = 1;
interface demo18 {
  name: string,
  id: number
}
 let demo19: demo18 = {
   name: 'sd',
   id: 12312
 }
 
interface demo19 {
  name?:string,
  id?: number
}

let demo20: demo19 = {
  id: 123
}
interface demo20 {
  // name?: string,
  // id?: number,
  [propName: string] : any
}
let demo21 = {
  name: '121',
  asd: 12,
  asda: 3231
}
interface demo22 {
  readonly name: string,
  [propName: string]: any
}
let demo23: demo22 = {
  name: '23',
  id: 22
}
interface demo24 {
  [index: number]: number,
  callee: Function,
  length: number
}
function demo25() {
  let demo26: demo24 = arguments;
}
function demo26() {
  let demo27: IArguments = arguments; //IAgruments = {[index: number]:number,length: number,callee: Function}
}
function demo27(num:number,name:string): void {
  this.num = num;
  this.name = name;
}
let demo28 = new demo27(123,'234');
let demo29 = function(name:string, id: number): void {
  this.name = name;
  this.id = id;
}
let demo30 = new demo29('asda', 123);
interface demo31 {
  (source: string, name: number): boolean
}
let demo32:demo31 = function(source:string, name: number) { 
  return this.name > 1;
}
function demo33(name: string,id?:number) { //id?必须放在最后面
  this.name = name;
  this.id = id;
}
let demo34 = new demo33('sda');
function demo35(name?:string, id:number=12312): boolean { //此时name可以是任意的放在前面
  return id > 172317238; 
}
function demo36(name: string| number): boolean {
  if (<string>name.toString()) {
    return (<string>name).length > 0;
  } else {
    return (<string>name).toString().length>0;
  }
}
declare var jquery: (selector: string) => any; //ts中=>和es6中不一样，ts中箭头符号左表代表输入，右边代表输出,这是声明jquery，因为ts不认识jquery
jquery('#name')
declare class demo37 { //declare class 语句也只能用来定义类型，不能用来定义具体的实现
  name: string;
  constructor(name: string);
}
let demo38 = new demo37('sds');

declare enum directions {
  'asas',
  'fdfff'
}
let demo39 = [directions.asas, directions.fdfff];
