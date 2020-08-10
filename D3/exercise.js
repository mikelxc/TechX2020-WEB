// Exercise

// JSON: JavaScript Object Notation(JavaScript 对象表示法) 
// JSON 是存储和交换文本信息的语法，类似 XML。
// JSON 比 XML 更小、更快，更易解析。
// 例：

const jsonExample = {
    "emplNum": 3,
    "employees": [{
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "firstName": "Anna",
            "lastName": "Smith"
        },
        {
            "firstName": "Peter",
            "lastName": "Jones"
        }
    ]
}

// 获取JSON内对象的两种方式

jsonExample.emplNum
jsonExample["emplNum"]

// JSON和JS对象(Object)的语法一样，故可以互相转换。例：

const jsonStr = '{ "name": "cxh", "sex": "man" }'
// JS Object to JSON
const jsObj = JSON.parse(jsonStr)
// JSON string to JS Object
const str = JSON.stringify(jsObj)

// 添加或者更改都可以直接在Object上操作

// 添加
jsObj.age = 19
// 更改
jsObj['name'] = "cxk"

// 遍历JSON对象时可以使用for ... in ...语法

for (let key in jsObj) {
    console.log(key + " is " + jsObj[key]);
};

// 想象你需要做一个统计新冠肺炎全球（除中国以外）感染数据的网站。为此，你从腾讯的API获取了感染数据的JSON。现在你需要对这些数据进行处理，以便使用。
// 以下代码用来获取countriesData，今天各国的感染情况。
const countriesData = require('./data.json');

// 下面是习题部分

// 1- 请找出治愈人数最多的国家
const countriesData = require('./data.json');
for(data of countriedata)
if 


// TODO: Please write your code below


// 2- 排序
// 在javascript中，对数组可以进行排序。方法为：arrayObject.sort(sortby)
// 其中sortby参数可选，为一个函数，规定排序方式。
// 例：

var arr= [2, 100, 12, 244, 7000, 4, 10, 30, 42, 3, 59];
// 默认排序方式
arr.sort();
// 输出：[10, 100, 12, 2, 244, 3, 30, 4, 42, 59, 7000]

// 注意！上面数组并没有按照数的大小排序，而是按照对应的字符串的排序方式排序的。因此，要实现按照数值大小排序，就需要规定sortby函数。
// sortby函数有两个input：a和b，规定a和b之间的比较方式。若根据比较规则，a<b (a应该在b之前)，则返回一个小于0的值；a=b则返回0；a>b则返回大于0的值。

function sortby(a, b) {
    return a - b;
};
arr.sort(sortby);
// 输出：[2, 3, 4, 10, 12, 30, 42, 59, 100, 244, 7000]

// 习题：请对countriesData根据今天的新确诊人数(countriesData[i].confirmAdd)进行降序排序。

// TODO: Please write your code below
const jsObj = JSON.parse(jsonStr)
countriesData[0].confirmAdd
function sortby()

// 习题：请在countriesData中为各个国家添加死亡比例deathRate字段(累计死亡人数/累计确诊人数人数)并进行降序排序
const countriesData = require('./data.json');
countriesData.deathRate=num(countriesData.confirm)/num(countriesData.dead);
function sortby(a,b){
    return a-b;
};
deathRate.sort(sortby)

// TODO: Please write your code below


// 3- 高阶函数
// 从以上的排序的例子不难发现，javascript支持将函数作为函数的参数使用。
// Javascript也支持将函数作为返回值使用。这种方便的操作就是高阶函数。上面使用的sort就是高阶函数。

// 习题：要求写一个函数getSortBy。实现在一个json数组data内（例如countriesData），根据某种原则 valuefunc(object)，给所有对象添加一个值(key)，并返回以降序排序用的sortby函数。
// 返回值是一个sortby函数，有参数：data, key,  function valuefunc(object)
// 然后用getSortBy生成一个"healingRate"字段(heal/confirm)，并根据这个字段降序排序。

// TODO: Please write your code below
function getSortBy(Dat, key, valuefunc){ 
  for (key in Dat)
    Data[key] = valuefunc(key);
  } 
  const sortby=(a,b)=>b[key]-a[key];
  getSortBy()

// 4- 我们只需要北美洲的信息
// 习题：请创建dataAmerica对象，使其中只包含北美的信息。

// TODO: Please write your code below


// Javascript中，有个很有用的函数，filter(callback)
// Takes in a callback function which takes in an item (of the array) and returns a boolean value. 
// Returns an iterable of the same type. An item will appear in the returned iterable only if the returned value for the item is true 
// 例
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 == 0);
console.log(evens); // [2,4]

// 请用这种方式实现同样的功能
// TODO: Please write your code below
const countriesData=require('./data.json');
const dataAmerica=countriesData.filter((data)=>(data.continent==="北美洲"));
console.log(dataAmerica)


// 5- Map 函数
// map 函数：
// Takes in a callback function, taking in an item, returning a modified item.
// Returns an iterable on the same type with the modified items. 
// 例
const double = (num) => (num * 2);
const doubled = numbers.map(double);
console.log(doubled); // [2, 4, 6, 8]

// 习题：请用map生成一个只包含json中各个国家名字的list
// TODO: Please write your code below

const countryList=countriesData.map((data)=>(data.name))
console.log(countryList)
