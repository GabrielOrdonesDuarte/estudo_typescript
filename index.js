// variables
var a = 5.32;

var obj = {
   x: 5.32,
   y: 7,
};

var obj2 = {
   x: 6,
   y: 8.11,
};

obj.z = 11;

var add = function (x, y) {
   return x + y;
};

var add2 = function (nums) {
   return nums.a + nums.b;
};

var add2Destructuring = function (_a) {
   var a = _a.a,
      b = _a.b;
   return a + b;
};

// unions

var maybeNum = 5;
maybeNum = "5";
maybeNum = 5;
maybeNum = false;
maybeNum = add;

var dogCat = {
   bark: "bark!",
   purr: "purr!",
};

dogCat = 5;

if (typeof dogCat === "string") {
   console.log("eh um numero");
}

// casting

add(dogCat, dogCat);

// any

var doesAnything = function (x) {
   console.log(x);
};

doesAnything(1);
doesAnything(false);
doesAnything(obj);

doesAnything(function () {
   return 5;
});
