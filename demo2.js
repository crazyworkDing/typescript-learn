"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//定义boolean
var isDone21 = true;
var createByObject = new Boolean(1);
var createByBoolean = Boolean(1);
//定义number
var createByNumber = 12;
var createByNumber2 = 0xeeee;
var createByNumber3 = 484; //'00744'虽然也是八进制但是在面向es6及以上的时候只能使用'0o744'
var createByNumber4 = 5; //二进制写法
var createByNumber5 = null;
var createByNumber6 = undefined;
var createByNumber7 = Infinity;
//定义字符串
var createByString = '221';
//返回空值的函数
function alertNum() {
    alert('this is demo');
}
//undefined和null类型是所有类型的子集，所以他们可以给任何一个类型作为值
var createByUndefined = undefined;
var createByUndefined2 = null;
var createByNull = undefined;
var createByNull2 = null;
//any类型
var createByAny = '1';
createByAny = 2;
var createByAny2;
createByAny2 = 'seven';
createByAny2 = 7;
createByAny2.setName('2');
//类型推论
var createByAny3 = '7'; // 等价于let createByAny3: string = '7' ,这个就是类型推论
//联合类型
var createByUnion;
createByUnion = '1';
createByUnion = 1;
var createByUnion2 = 1;
createByUnion2 = '1';
//访问联合类型的共有属性和方法
function unionFunction(sth) {
    return sth.toString();
    // return sth.length;这个length不是number和string的共有属性，所以报错
}
var createByObject3 = {
    name: 'this id demo',
    id: 11
};
var createByObject4 = {
    name: '12'
};
var createByObject5 = {
    name: '131d',
    id: '12334',
    uuid: '111'
};
var createByObject6 = {
    name: 'dfas',
    id: 123,
    uuid: 111
};
var createByObject7 = {
    name: '1212',
    id: 1231,
    uuid: 111
};
//createByObject7.name不可更改
//数组部分
//数组定义
var createByArray = [1, 2];
var createByArray2 = ['22', '33'];
//数组泛型
var createByArray3 = [1, 2, 3];
var createByArray5 = [1, 23, 33];
function createByFunction() {
    var createByArray7 = arguments;
}
function createByFunction2() {
    var createByArray8 = arguments; //这里的IArguments已经是js定义好的，和CreateByArray6一样
}
//any在数组的作用
var createByArray9 = [1, '2', 3];
//函数的类型
//函数声明
function createByFunction3(x, y) {
    return x + y;
}
createByFunction3(1, 2);
var createByFunction5 = function (id, name) {
    return '';
};
var createByFunction6 = function (id, name) {
    if (name) {
        return '';
    }
    else {
        return '';
    }
};
//参数默认值
function createByFunction7(id, name) {
    if (id === void 0) { id = 123; }
    if (name === void 0) { name = 'assda'; }
    return id + name;
}
createByFunction7(0, '');
//剩余参数
function createByFunction8(id) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    var str = '';
    items.forEach(function (res) {
        str = res + ',' + id;
    });
    return str;
}
createByFunction8('this', '1', '2', '3');
//重载
function reverse(name) {
    if (typeof (name) == 'string') {
        return name.split('').reverse().join('');
    }
    else {
        return name.toString().split('').reverse().join('');
    }
}
function createByFunction9(params) {
    if (typeof params["do"] == 'function') {
        return true;
    }
    else {
        return false;
    }
}
//讲一个父类断言为一个具体的子类
var createParent = /** @class */ (function () {
    function createParent() {
        this.uuid = '121';
    }
    return createParent;
}());
var createChild = /** @class */ (function (_super) {
    __extends(createChild, _super);
    function createChild() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'aa';
        return _this;
    }
    return createChild;
}(createParent));
var createChild2 = /** @class */ (function (_super) {
    __extends(createChild2, _super);
    function createChild2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        return _this;
    }
    return createChild2;
}(createParent));
function createByFunction11(params) {
    if (typeof params.name == 'string') {
        return true;
    }
    else {
        return false;
    }
}
//将任意一个类型断言为any
window.foo = 1;
//上面相当于
// interface CreateByInterface9 extends CreateByInterface8 {
//   
//   do: Function
// }
var createByObject8 = {
    name: 'sdsd',
    "do": function () { }
};
var createByObject9 = createByObject8;
function createByFunction12(params) {
    return params;
}
//类型断言只会影响到编译情况是否通过，不会真的影响变量的类型
function createByFunction13(params) {
    return params;
}
createByFunction13(1); //返回结果是1而不是true
//类型转换
function createByFunction14(params) {
    return Boolean(params);
}
createByFunction14(1);
jQuery('#foo');
jQuery2('#sas');
createByFunction15(function name() { return ''; });
createByFunction15('sss');
var createByClassDeom = new CreateByClass('sss');
var createByEnum2 = [CreateByEnum.up, CreateByEnum.down, CreateByEnum.left, CreateByEnum.right];
jQuery3.ajax('sss');
//namespace里可以在嵌套一层namespace来申明深层的类型
jQuery3.fn.extend({
    check: function () {
        return this.each(function () {
            this.checked = true;
        });
    }
});
//申明合并
//npm包
//export 导出变量
//在npm包的申明文件里使用declare不在会被当做全局变量，只有被export之后，之后在import之后才能引用
//export namespace导出有子属性的对象，需要理解export和declare以及interface的差别
var createByNamespace;
(function (createByNamespace) {
    var name;
    var createByNamespace2;
    (function (createByNamespace2) {
        function createByFunction15() {
            alert('');
        }
    })(createByNamespace2 || (createByNamespace2 = {}));
})(createByNamespace = exports.createByNamespace || (exports.createByNamespace = {}));
//import { createByNamespace } from '../countDemo'
//export default
exports["default"] = createByNamespace;
//export
//module.exports = createByNamespace;导出整体
//exports.bar = bar;导出单个
//import * as foo from 'foo'整体导入
//import { bar } from 'foo'单个导入
//声明文件很多暂时跳过
//内置对象
var createByBoolean2 = new Boolean(1);
var createByError = new Error('1');
var createByDate = new Date();
var createByReg = /[0-9]/;
//DOM和BOM的内置对象：Document,HTMLElement,Event,NodeList
var createByElement = document.body;
var createByNodeList = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    console.log(e);
});
var createByElement2 = document.querySelector('div');
var createByElement3 = document.querySelector('div');
function createByFunction16(ele, event) {
    alert('');
}
createByFunction16(document.body, 'click');
// createByFunction16(document.body, 'dbclick'),这个就不可以
//元祖
var createByArray10 = ['aas', 111];
//越界的元素
var createByArray11 = ['bbb', 23];
createByArray11.push('11');
createByArray11.push(11);
// createByArray11.push(function a(): void{}); 这个不可以
//枚举
var createByEnum;
(function (createByEnum) {
    createByEnum[createByEnum["sun"] = 0] = "sun";
    createByEnum[createByEnum["sat"] = 1] = "sat";
    createByEnum[createByEnum["feb"] = 2] = "feb";
})(createByEnum || (createByEnum = {}));
createByEnum['sun']; //0
createByEnum['sat']; //1
createByEnum[0]; //'sun'
createByEnum[1]; //'sat'
//手动赋值
var createByEnum1;
(function (createByEnum1) {
    createByEnum1[createByEnum1["sun"] = 2] = "sun";
    createByEnum1[createByEnum1["sat"] = 1] = "sat";
    createByEnum1[createByEnum1["feb"] = 2] = "feb";
})(createByEnum1 || (createByEnum1 = {}));
createByEnum1['sun']; //2
createByEnum1['sat']; //1
createByEnum1['feb']; //2
createByEnum1[2]; //'feb'
var createByEnum3;
(function (createByEnum3) {
    createByEnum3[createByEnum3["day1"] = 7] = "day1";
    createByEnum3[createByEnum3["day2"] = 1.5] = "day2";
    createByEnum3[createByEnum3["day3"] = 2.5] = "day3";
    createByEnum3[createByEnum3["day4"] = 3.5] = "day4";
})(createByEnum3 || (createByEnum3 = {}));
createByEnum3['day1']; //7
createByEnum3['day2']; //1.5
createByEnum3['day3']; //2.5
createByEnum3['day4']; //3.5
var createByEnum4;
(function (createByEnum4) {
    createByEnum4[createByEnum4["day1"] = 0] = "day1";
    createByEnum4[createByEnum4["day2"] = 1] = "day2";
    createByEnum4[createByEnum4["day3"] = 'ss'.length] = "day3"; //这个要放在最后，如果最后是未赋值的变量则会报错
})(createByEnum4 || (createByEnum4 = {}));
//类
//public private protectd
var CreateByClass2 = /** @class */ (function () {
    function CreateByClass2(name) {
        this.name = name;
    }
    return CreateByClass2;
}());
var createByClass3 = new CreateByClass2('aa');
createByClass3.name = 'bb';
console.log(createByClass3.name); //'bb'
var CreateByClass4 = /** @class */ (function () {
    function CreateByClass4(name) {
        this.name = name;
    }
    return CreateByClass4;
}());
var createByClass4 = new CreateByClass4('aaa');
// createByClass4.name不可获取
var CreateByClass5 = /** @class */ (function (_super) {
    __extends(CreateByClass5, _super);
    function CreateByClass5(name) {
        return _super.call(this, name) || this;
        // console.log(this.name)这里无法获取父类的name
    }
    return CreateByClass5;
}(CreateByClass4));
var CreateByClass6 = /** @class */ (function () {
    function CreateByClass6(name) {
        this.name = name;
    }
    return CreateByClass6;
}());
var CreateByclass7 = /** @class */ (function (_super) {
    __extends(CreateByclass7, _super);
    function CreateByclass7(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return CreateByclass7;
}(CreateByClass6));
var CreateByClass8 = /** @class */ (function () {
    function CreateByClass8(name) {
        this.name = name;
    }
    return CreateByClass8;
}());
// let createByClass9 = new CreateByClass8('name'); 因为构造函数时私有的，所以无法实例化
// class CreateByClass10 extends CreateByClass8 {
//   constructor(name) {
//     super(name);
//     console.log(this.name)
//   }
// }无法继承构造函数是私有的父类
var CreateByClass11 = /** @class */ (function () {
    function CreateByClass11(name) {
        this.name = name;
    }
    return CreateByClass11;
}());
// let createByClass12 = new CreateByClass11('asa')无法继承是protected属性的父类
var CreateByClass13 = /** @class */ (function (_super) {
    __extends(CreateByClass13, _super);
    function CreateByClass13(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return CreateByClass13;
}(CreateByClass11));
//readonly
var CreateByClass14 = /** @class */ (function () {
    function CreateByClass14(name) {
        this.name = name;
    }
    return CreateByClass14;
}());
var createByClass15 = new CreateByClass14('aa');
console.log(createByClass15.name);
// createByClass15.name = 'bb'不可赋值，因为不能是readonly属性
//抽象类
var CreateByClass16 = /** @class */ (function () {
    function CreateByClass16(name) {
        this.name = name;
    }
    return CreateByClass16;
}());
// let createByClass17 = new CreateByClass16('hsjk')抽象类不能实例化
// 抽象方法必须被子类实现
var CreateByClass17 = /** @class */ (function (_super) {
    __extends(CreateByClass17, _super);
    function CreateByClass17(name) {
        return _super.call(this, name) || this;
    }
    CreateByClass17.prototype.sayHi = function () {
        this.name = this.name;
    };
    return CreateByClass17;
}(CreateByClass16));
var createByClass18 = new CreateByClass17('sad');
var CreateByClass18 = /** @class */ (function () {
    function CreateByClass18() {
    }
    CreateByClass18.prototype.sayHi = function () {
        console.log('');
    };
    CreateByClass18.prototype.sayHi2 = function () {
        console.log('');
    };
    return CreateByClass18;
}());
//接口继承类:typescript特有
var CreateByClass3 = /** @class */ (function () {
    function CreateByClass3(name) {
        this.name = name;
    }
    return CreateByClass3;
}());
var createByClass19 = {
    name: 'sss',
    id: 11,
    uuid: '23'
};
//泛型
function createByFunction10(length, value) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array[i] = value;
    }
    return array;
}
createByFunction10(10, 'ding');
function createByFunction20(params) {
    return [params[1], params[0]];
}
createByFunction20(['sss', 123]);
function createByFunction21(arg) {
    console.log(arg.length);
    return arg;
}
var createByFunction22;
createByFunction22 = function (name, id) {
    return [id, name];
};
