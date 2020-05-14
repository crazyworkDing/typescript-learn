//定义boolean
let isDone21: boolean = true;
let createByObject: object = new Boolean(1);
let createByBoolean: boolean = Boolean(1);
//定义number
let createByNumber: number = 12;
let createByNumber2: number = 0xeeee;
let createByNumber3: number = 0o744;//'00744'虽然也是八进制但是在面向es6及以上的时候只能使用'0o744'
let createByNumber4: number = 0b101;//二进制写法
let createByNumber5: number = null;
let createByNumber6: number = undefined;
let createByNumber7: number = Infinity;
//定义字符串
let createByString: string = '221';
//返回空值的函数
function alertNum(): void {
  alert('this is demo');
}
//undefined和null类型是所有类型的子集，所以他们可以给任何一个类型作为值
let createByUndefined: undefined = undefined;
let createByUndefined2: undefined = null;
let createByNull: null = undefined;
let createByNull2: null = null;
//any类型
let createByAny: any = '1'
createByAny = 2;
let createByAny2;
createByAny2 = 'seven';
createByAny2 = 7;
createByAny2.setName('2');
//类型推论
let createByAny3 = '7'// 等价于let createByAny3: string = '7' ,这个就是类型推论
//联合类型
let createByUnion: string | number;
createByUnion = '1';
createByUnion = 1;
let createByUnion2: string | number = 1;
createByUnion2 = '1';
//访问联合类型的共有属性和方法
function unionFunction(sth: number | string): string {
  return sth.toString();
  // return sth.length;这个length不是number和string的共有属性，所以报错
}
//接口interfaces,对类的抽象，写法上类似于对象，一般用于定义
interface CreateByInterface {
  name: string,
  id: number
}
let createByObject3: CreateByInterface = {
  name: 'this id demo',
  id: 11
}
//可选属性
interface CreateByInterface2 {
  name: string,
  id?: number
}
let createByObject4: CreateByInterface2 = {
  name: '12',
  // id: 12
}
//任意属性
interface CreateByInterface3 {
  name: string,
  id?: string,
  [propName: string]: string //这里发最后的string规定id这个属性的值也必须是string类型，所以id的属性值类型必须改成string
}

let createByObject5: CreateByInterface3 = {
  name: '131d',
  id: '12334',
  uuid: '111'
}
interface CreateByInterface4 {
  name: string,
  id?: number,
  [propName: string]: string | number
}
let createByObject6: CreateByInterface4 = {
  name: 'dfas',
  id: 123,
  uuid: 111
}
//只读属性
interface CreateByInterface5 {
  readonly name: string,
  id: number,
  [propName: string]: number | string
}
let createByObject7: CreateByInterface5 = {
  name: '1212',
  id: 1231,
  uuid: 111
}
//createByObject7.name不可更改
//数组部分
//数组定义
let createByArray: number[] = [1,2]
let createByArray2: string[] = ['22','33']
//数组泛型
let createByArray3: Array<number> = [1,2,3]
//接口定义数组
interface CreateByArray4 {
  [index: number]: number
} 
let createByArray5: CreateByArray4 = [1,23,33]
//类数组
interface CreateByArray6 {
  [index: number]: number,
  length: number,
  callee: Function
}
function createByFunction(): void {
  let createByArray7: CreateByArray6 = arguments;
}
function createByFunction2(): void {
  let createByArray8: IArguments = arguments;//这里的IArguments已经是js定义好的，和CreateByArray6一样
}
//any在数组的作用
let createByArray9: any[] = [1,'2',3]

//函数的类型
//函数声明
function createByFunction3(x: number, y: number): number {
  return x+y;
}
createByFunction3(1,2)
//接口定义函数的形状
interface CreateByFunction4 {
  (id: number, name: string): string
}
let createByFunction5: CreateByFunction4 = function(id: number, name: string): string {
  return '';
}
//可选参数.注意可选参数必须在必选参数只有，例如：name属性必须在id之后
interface CreateByFunction5 {
  (id: number, name?: string): string
}
let createByFunction6: CreateByFunction5 = function(id: number, name?: string): string {
  if (name) {
    return ''
  } else {
    return ''
  }
}
//参数默认值
function createByFunction7(id: number = 123, name: string = 'assda'): string {
  return id + name;
}
createByFunction7(0,'');
//剩余参数
function createByFunction8(id: string, ...items: any[]): string {
  let str = ''
  items.forEach(res => {
    str = res + ',' + id
  })
  return str;
}
createByFunction8('this', '1','2','3');
//重载
function reverse(name: string | number) : any {
  if (typeof(name) == 'string') {
    return name.split('').reverse().join('');
  } else {
    return name.toString().split('').reverse().join('');
  }
}
//类型断言
//应用一：将一个函数断言为其中一个类型
interface CreateByInterface6 {
  id: string,
  name: string
}
interface CreateByInterface7 {
  id: string,
  do: Function
}
function createByFunction9(params: CreateByInterface6 | CreateByInterface7): boolean {
  if (typeof (params as CreateByInterface7).do == 'function') {
    return true;
  } else {
    return false
  }
}
//讲一个父类断言为一个具体的子类
class createParent {
  uuid: string = '121'
}
class createChild extends createParent {
  name: string = 'aa'
}
class createChild2 extends createParent {
  id: number = 0
}
function createByFunction11(params: createParent): boolean {
  if (typeof (params as createChild).name == 'string') {
    return true;
  } else {
    return false;
  }
}
//将任意一个类型断言为any
(window as any).foo = 1;
//any可以被断言为任意一个类型
//类型断言的限制
interface CreateByInterface8 {
  name: string
}
interface CreateByInterface9 {
  name: string,
  do: Function
}
//上面相当于
// interface CreateByInterface9 extends CreateByInterface8 {
//   
//   do: Function
// }
let createByObject8: CreateByInterface9 = {
  name: 'sdsd',
  do: () => {}
}
let createByObject9: CreateByInterface8 = createByObject8;
//双重断言
interface CreateByObject10 {
  name: string
}
interface CreateByObject11 {
  id: number
}
function createByFunction12(params: CreateByObject10): any{
  return (params as any as CreateByObject11)
}
//类型断言只会影响到编译情况是否通过，不会真的影响变量的类型
function createByFunction13(params: any): boolean {
  return params as boolean;
}
createByFunction13(1)//返回结果是1而不是true
//类型转换
function createByFunction14(params: any): boolean {
  return Boolean(params)
}
createByFunction14(1);

//声明文件
declare var a: number;//声明全局变量
declare function b() //声明全局方法
declare class c{} //声明全局类
declare enum d{} //声明全局枚举值
declare namespace e{} //声明含有子属性的全局对象
//等等
//全局声明变量jQuery,申明的时候只能定义类型，切勿在其中实现具体的实现
// declare var jQuery: (selector: string) => any
// jQuery('#foo')
// declare let Jquery: (selector: string) => any
declare const jQuery: (selector: string) => any
 jQuery('#foo')
 //declare function定义全局函数
 declare function jQuery2(selector: string): any
jQuery2('#sas');
//函数重载
declare function createByFunction15(params: () => string): string
declare function createByFunction15(name: string): string
createByFunction15(function name(){return ''})
createByFunction15('sss')
//declare class全局申明class,不能实例化
declare class CreateByClass {
  constructor(name: string);
  name: string;
  do: Function;
}
let createByClassDeom = new CreateByClass('sss');
//declare enum
declare enum CreateByEnum {
  up,
  down,
  left,
  right
}
let createByEnum2: any[] = [CreateByEnum.up,CreateByEnum.down,CreateByEnum.left,CreateByEnum.right]
//declare namespace 申明全局变量是一个对象，他有很多子属性，切记在其颞部不要再用declare
declare namespace jQuery3 {
  function ajax(name:string, id?:any): void;
  namespace fn {
    function extend(object: any): void;
  }
}
jQuery3.ajax('sss');
//namespace里可以在嵌套一层namespace来申明深层的类型
jQuery3.fn.extend({
  check: function() {
    return this.each(function() {
      this.checked = true;
    });
  }
});
//interface和type以及declare申明的全局变量在其他文件也能用，但是interface和type尽量放在namespace申明下
declare namespace createByspace {
  interface CreateByInterface10 {
    name: string;
    id?: number
  }
}
//申明合并
//npm包
//export 导出变量
//在npm包的申明文件里使用declare不在会被当做全局变量，只有被export之后，之后在import之后才能引用
//export namespace导出有子属性的对象，需要理解export和declare以及interface的差别
export namespace createByNamespace {
  let name: string;
  namespace createByNamespace2 {
    function createByFunction15():void {
      alert('')
    }
  }
}
//import { createByNamespace } from '../countDemo'
//export default
export default createByNamespace;
//export
//module.exports = createByNamespace;导出整体
//exports.bar = bar;导出单个
//import * as foo from 'foo'整体导入
//import { bar } from 'foo'单个导入
//声明文件很多暂时跳过







//内置对象
let createByBoolean2: Boolean = new Boolean(1)
let createByError: Error = new Error('1')
let createByDate: Date = new Date();
let createByReg: RegExp = /[0-9]/;
//DOM和BOM的内置对象：Document,HTMLElement,Event,NodeList
let createByElement: HTMLElement = document.body
let createByNodeList: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {
  console.log(e)
})
let createByElement2: HTMLElement = document.querySelector('div')
let createByElement3: HTMLDivElement = document.querySelector('div')
//nodejs不是ts内置对象的一部分
//用ts来写nodejs
// npm install @types/node --save-dev


//进阶部分 type常用于联合类型
type Name = string;
type creatByFunction16 = () => string;
type createByUnion3 = Name | creatByFunction16;
//字符串字面量类型
type createByUnion4 = 'click' | 'scroll' | 'mousemove'
function createByFunction16(ele: Element, event: createByUnion4): void {
  alert('')
}
createByFunction16(document.body, 'click')
// createByFunction16(document.body, 'dbclick'),这个就不可以
//元祖
let createByArray10: [string, number] = ['aas',111]
//越界的元素
let createByArray11: [string, number] = ['bbb',23];
createByArray11.push('11');
createByArray11.push(11);
// createByArray11.push(function a(): void{}); 这个不可以
//枚举
enum createByEnum {
  sun,
  sat,
  feb
}
createByEnum['sun'] //0
createByEnum['sat'] //1
createByEnum[0]//'sun'
createByEnum[1]//'sat'
//手动赋值
enum createByEnum1 {
  sun = 2,
  sat = 1,
  feb
}
createByEnum1['sun']//2
createByEnum1['sat']//1
createByEnum1['feb']//2
createByEnum1[2]//'feb'
enum createByEnum3 {
  day1 = 7,
  day2 = 1.5,
  day3,
  day4
}
createByEnum3['day1']//7
createByEnum3['day2']//1.5
createByEnum3['day3']//2.5
createByEnum3['day4']//3.5
enum createByEnum4 {
  day1,
  day2,
  day3 = 'ss'.length//这个要放在最后，如果最后是未赋值的变量则会报错
}



//类
//public private protectd
class CreateByClass2 {
  public name;
  public constructor(name) {
    this.name = name;
  }
}
let createByClass3 = new CreateByClass2('aa');
createByClass3.name = 'bb';
console.log(createByClass3.name)//'bb'

class CreateByClass4 {
  private name;
  public constructor(name) {
    this.name = name
  }
}
let createByClass4 = new CreateByClass4('aaa')
// createByClass4.name不可获取
class CreateByClass5 extends CreateByClass4 {
  constructor(name) {
    super(name);
    // console.log(this.name)这里无法获取父类的name
  }
}
class CreateByClass6 {
  protected name;
  constructor(name) {
    this.name = name;
  }
}
class CreateByclass7 extends CreateByClass6 {
  constructor(name) {
    super(name);
    console.log(this.name)
  }
}

class CreateByClass8 {
  public name;
  private constructor(name) {
    this.name = name;
  }
}
// let createByClass9 = new CreateByClass8('name'); 因为构造函数时私有的，所以无法实例化
// class CreateByClass10 extends CreateByClass8 {
//   constructor(name) {
//     super(name);
//     console.log(this.name)
//   }
// }无法继承构造函数是私有的父类
class CreateByClass11 {
  name;
  protected constructor(name) {
    this.name = name;
  }
}
// let createByClass12 = new CreateByClass11('asa')无法继承是protected属性的父类
class CreateByClass13 extends CreateByClass11 {
  constructor(name) {
    super(name);
    console.log(this.name)
  }
}
//readonly
class CreateByClass14 {
  public readonly name;
  constructor(name) {
    this.name = name;
  }
}
let createByClass15 = new CreateByClass14('aa')
console.log(createByClass15.name)
// createByClass15.name = 'bb'不可赋值，因为不能是readonly属性
//抽象类
abstract class CreateByClass16 {
  public name: string;
  constructor(name) {
    this.name = name;
  }
  abstract sayHi()
}
// let createByClass17 = new CreateByClass16('hsjk')抽象类不能实例化
// 抽象方法必须被子类实现
class CreateByClass17 extends CreateByClass16 {
  constructor(name: string) {
    super(name)
  }
  sayHi(): void {
    this.name = this.name
  }
} 
let createByClass18 = new CreateByClass17('sad');
//类与接口
interface CreateByInterface11 {
  sayHi(): void
}
interface CreateByInterface12 {
  sayHi2(): void
}
class CreateByClass18 implements CreateByInterface11,CreateByInterface12 {
  sayHi() {
    console.log('')
  }
  sayHi2() {
    console.log('')
  }
} 
//接口继承接口
interface CreateByInterface13 {
  sayHi(): void
}
interface CreateByInterface14 extends CreateByInterface13 {
  sayHi2(): void
}











