/**
 * 🔥 자바스크립트의 데이터 타입은 크게 두가지로 나뉩니다.
 * 1. 기본형/원시형(primitive type)
 * 2. 참조형(reference type)
 */

/**
 * 🔥 기본형은 number, string, boolean, null, undefined 가 있고 es6에서 symbol이 추가되었습니다.
 */
var number = 0; 
var string = '';
var boolean = true;
var _null = null;
var _undefined = undefined;

console.table({
    'number' : typeof number,
    'string' : typeof string,
    'boolean' : typeof boolean,
    '_null' : typeof _null,
    '_undefined' : typeof _undefined,
});
console.log('%c null이 object 타입으로 나오는건 자바스크립트 설계당시의 실수라고 합니다!','color:red');



/**
 * 🔥 참조형은 객체, 배열, 함수, 날짜, 정규표현식 등을 말합니다.
 */
var obj = { };
var arr = []; // or new Array();
var func = function(){};
var date = new Date();
var regExp = new RegExp();

console.table({
    'obj':typeof obj,
    'arr':typeof arr,
    'func':typeof func,
    'date':typeof date,
    'regExp':typeof regExp,
});

/**
 * 🔥 기본형과 참조형을 나누는 기준
 * 기본형은 값이 담긴 주솟값을 바로 복제하고, 참조형은 값이 담긴 주솟값들로 
 * 이루어진 묶음을 가리키는 주솟값을 복제한다는 점이 다릅니다.
 * 그리고 기본형은 불변성()을 띕니다. 이것은 [변수와 데이터 할당]에서 자세히 다루겠습니다.
 */