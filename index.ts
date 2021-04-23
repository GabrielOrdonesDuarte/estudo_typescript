// variables

const a:number = 5.32;

interface MyObj {
   x: number;
   y: number;
   z?: number; // z opcional
}

const obj: MyObj = {
   x: 5.32,
   y: 7,
}

const obj2: MyObj = {
   x: 6,
   y: 8.11
}

obj.z = 11;

// functions

type AddFunc = (x: number, y: number) => number;

const add: AddFunc = (x: number, y: number) => {
   return x + y;
}

const add2 = ( nums: {a: number, b:number} ) => {
   return nums.a + nums.b;
}

const add2Destructuring = ( {a, b}: {a: number, b: number} ) => {
   return a + b;
}

// unions

let maybeNum: number | string | boolean | AddFunc = 5;
maybeNum = "5";
maybeNum = 5;
maybeNum = false;
maybeNum = add;

interface Dog {
   bark: string;
}

interface Cat {
   purr: string;
}

type DogCat = (Dog & Cat) | string | number

let dogCat: DogCat = {
   bark: "bark!",
   purr: "purr!"
}

dogCat = 5;

if (typeof dogCat === "string") {
   console.log("eh um numero")
}

// casting

add(dogCat as number, dogCat as any);

// any

const doesAnything = (x: any) => {
   console.log(x);
}

doesAnything(1);
doesAnything(false);
doesAnything(obj);
doesAnything(() => 5)
