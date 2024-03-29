// function info(a, b){
//     var res = a*b;
//     return res;
// }
// info(5, 6)
// var sum = res();
// console.log(sum);
                                                    //  primers
// document.write("some"); вводиться в сайте 
// console.info("write"); работа как у лог
// console.error("Error"); вводят как ошибка 
// console.warn("warn"); вводят желтое собщение
                                                   //переменные
// var num = 5; var имеет тип целые числа, double number, String " ",Boolean True/False
// console.log(num)
// num = 7; переменных можно переопределить 
// console.log(num);
// const sum = num +num; отличие от var в том что const нельзя переопределить
// console.log(sum);
                                                   //Math действие
// const num1 = 5;
// const num2 = 7;
// var sum = num1 + num2; - * / %
// console.info(sum);

// var num = 5;
// num += 7;
// console.log(num);
 
// var str1 = Number("14");
// var str2 = Number("3");
// console.log(str1 + str2);

                                                  //Math
// console.log("Math" + Math.PI);
// console.log("Math" + Math.sin(1/2)); 
                                                  //Условные операторы
// var num = 15;
// var ishasHouse = true;
// if(num > 10 || ishasHouse){
//     console.log("ok");
// }else {
//     console.error("error");
// }
                                                 //Swich and case
// var str = "word";
// switch(str){
//     case "1":
//         console.log("значение 1");
//         break;
//         case "2":
//             console.log("значение 2");
//             break;
//             case "3":
//                 console.log("значение 3");
//                 break;
//                 case "word":
//                     console.log("значение = word");
//                     break;
//                     default: если не одно  из варианттов не совпадает то срабатывает эта вещь
//                         console.log("Default");

// }   
                                                //Массивы
// var arr = [1,2,true,"stroka"]; or arr = new Array[];
// console.log(arr.length);
// var array = [1,2,true,"stroka"];
// array[2] = "new element";
// console.log(array);

                                                 //Многомерные массивы
// var matrix = [
//     [3, 4, 5],["stroka", 6, 7],[0,3]
// ]
// matrix[1][0] = "drugaia stroka";
// console.log(matrix);
                                                // Special function for array
// var arr = [8, 90, 6, 50, 10];
// console.log(arr.join("||"));
// console.log(arr.sort())
// console.log(arr.reverse());   
// console.log(arr.split(", "));                                                //циклы
                                              //циклы
// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// let j = 9;
// while (j >=0) {
//     console.log(j);
//     j--;
// }

// var x = 10;
// do{
//     console.log(x);
//     x++;

// }while(x<5){
// }
                                                                         //Операторы
// for(var i = 10; i<=20; i++){
//     if(i > 15)
//         break;
//         console.log(i);
// }
// for(var i = 10; i <= 20; i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }
                                                                        //работа с массивами 
// var arr = [5, 6, 7, "stroka"];
// for(var i = 0; i <= arr.length; i++){
//     console.log("Element" + (i + 1) +":" + arr[i]);
// }
                                                                    //всплывающие окна
// var data = confirm("are you people");
// console.log(data);
// if(data){
//     alert("you passed");
// }
// else{
//     prompt("write who are you?")
// }
                                                                //function
// function info(){
//     console.log("Hello world");
//     console.log("!");
// } 
// info(); метод который нужен что бы вызвать функцию

// function info(word){
//     console.log(word + "!");
// }
// info("Hello") or
// word = "Hello";
// info(word); 

// function info(n){
//     console.log(n + "!")
// }
// function sum(a, b){
//     res = a + b;
//     info(res); функцию можно вызвать внутрий другого функций 
// }
// sum(12,4); 

// function summa(arr){
//     var sum = 0;
//     for( var i = 0; i< arr.length; i++){
//         sum+=arr[i];
//     }
//      console.log(sum);
// }
// var array = [5, 6, 7]
// summa(array);

// function summa(arr){
//     var sum = 0;
//      for( var i = 0; i< arr.length; i++){
//      sum+=arr[i];
//     }    
//     return sum; если мы возвращаем сумму а не вводим тогда мы сможим пороботать с ним 
// }
// var array = [5, 6, 7];
// var res = summa(array); например вот так 
// if(res < 20){
//     console.log("summa less than 20: " + res);
// }else{
//     console.log("Summa more than 20: " + res);
// }

                                                                //Локальные и глобальные переменные 
// var num = 10; глобальное переменное

// function info(){
//     var num1 = 10; локальное переменное
// }    
// let x = '{"b":1,"c":2}';
// let y = JSON.parse(x); для преобразавание из формата строка в объект
// console.log(typeof y);
                                                                // Событие и оброботчик событие 
// function button(){
//     alert("you clicked me");
// }

// var sum = 0;
// function button(e){
//     sum++;
//     e.innerHTML = "You clicked me " + sum + " times";
// }

                                                            //интервалы и таймера
// var counter = 0;
// var id = setInterval(my_function, 1000)
// function my_function(){
//     counter++;
//     console.log("Counter:" + counter);
//     if(counter === 10){
//        clearInterval(id)
//     }
// }

// Таймер
// setTimeout(my_func,2000);
//     function my_func(){
//         console.log("timer is working");
//     }
                                                             //работа с датой 
// var data = new Date();
// console.log(data.getFullYear());
// console.log(data.getMonth()+1);
// console.log(data.getHours());
// console.log(data.getMinutes());
// устоновить свою дату 
// data.setHours(23);
                                                            //Создание класса
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// var alex = new Person ("Alex", 19)
// console.log(alex.name);
// var Bob = new Person ("Bob", 19)
// console.log(Bob.age);