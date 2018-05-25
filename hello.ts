export class Hello {
  a = 1
  b = 2
}
let a = () => 5
let b = (c: string) => {
  return c
}
b('1')
let aa = `asd ads 
ads
adasd sadasd`
let q: string = 'qwe'
if (1) {
  q = '1'
}
function fun1(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}
var args = [1,2,2];
fun1(args[0],args[0],args[0])
var args2 = [7, 8, 9, 10, 11];
interface Ob {
  name: string,
  age: number
}

let abx = (per: Ob) => {
  return per.name + per.age
}
abx({name:'ll',age:12})