var demo1 = 1;
var demo2 = 's';
var demo3 = {};
var demo4 = [3, 4];
var demo5 = ['2', {}, 2];
var demo6 = true;
var demo7 = null;
var demo8 = undefined;
var demo9 = undefined;
var demo10 = null;
var demo11;
var demo12 = Boolean(1); // let demo12: boolean = new Boolean(1)不可以，返回的是boolean对象
var demo13 = demo2 + "this is demo";
function demo14() {
    alert('11');
}
var demo15 = '112';
demo15 = 111;
var demo16 = '1';
var demo17 = 1;
var demo19 = {
    name: 'sd',
    id: 12312
};
var demo20 = {
    id: 123
};
var demo21 = {
    name: '121',
    asd: 12,
    asda: 3231
};
var demo23 = {
    name: '23',
    id: 22
};
function demo25() {
    var demo26 = arguments;
}
function demo26() {
    var demo27 = arguments; //IAgruments = {[index: number]:number,length: number,callee: Function}
}
function demo27(num, name) {
    this.num = num;
    this.name = name;
}
var demo28 = new demo27(123, '234');
var demo29 = function (name, id) {
    this.name = name;
    this.id = id;
};
var demo30 = new demo29('asda', 123);
var demo32 = function (source, name) {
    return this.name > 1;
};
function demo33(name, id) {
    this.name = name;
    this.id = id;
}
var demo34 = new demo33('sda');
function demo35(name, id) {
    if (id === void 0) { id = 12312; }
    return id > 172317238;
}
function demo36(name) {
    if (name.toString()) {
        return name.length > 0;
    }
    else {
        return name.toString().length > 0;
    }
}
jquery('#name');
var demo38 = new demo37('sds');
var demo39 = [directions.asas, directions.fdfff];
