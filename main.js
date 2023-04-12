// 정규 표현식

// 문자 검색
// 문자 대체
// 문자 추출

// 생성자
// new RegExp('표현', '옵션')
// new RegExp('[z-z]', 'gi')

//리터럴
// /표현/옵션
// /[a-z]/gi
// regexp.test(str)  - true/false
// str.match(regexp)
// str.replace(regexp, 대체문자) 
// g - 모든 문자 일치
// i - 영어 대소문자를 구분 않고 일치(Ignore Case)
// m - 여러 줄 일치, 각각의 줄을 시작과 끝으로 인식

// ^ab ; 줄 시작에 있는 ab와 일치
// ab$ ; 줄 끝에 있는 ab와 일치
// .   ; 임의의 한 문자와 일치
// a|b ; a or b 와 일치

// {3} ; 3개 연속 일치
// {3, }; 3개 이상 연속 일치
// {3,5}; 3개 이상 5이하 연속 일치
// +    ; 1회이상 연속 일치, {1, }

// [ab] ; a or b
// [a-z] ; a 부터 z 사이의 문자 구간에 일치(영어 소문자)
// [A-Z]
// [0-9]
// [가-힣]

// \w  ; 63개 문자에 일치
// \b  ; 63개 문자에 일치하지 않는 문자 경계
// \d  ; 숫자에 일치
// \s  ; 공백에 일치

// (?:) ; 그룹 지정
// (?=) ; 앞쪽 일치
// (?<=) ; 뒤쪽 일치

const str = `
010-1234-5678
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
`


console.log(str.match(/^h.../gm))
console.log(str.match(/\.com/g))
console.log(str.match(/\.com$/gm))
console.log(str.match(/...\.com$/gm))
// const regexp = new RegExp('the', 'gi')
// const regexp = /cat/gi
// console.log(regexp.test(str))
// console.log(str.match(regexp));
// console.log(str.replace(regexp, 'fox'))

// console.log(str.match(/the/))
// console.log(str.match(/the/g))
// console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gi))
// console.log(str.match(/\.$/gim)) // 줄 바꿈을 문자의 시작/끝으로 인식 시켜줌.
// console.log(str.match(/\./gi))


// 메모리 누수(Memory Leak) :  더 이상 필요하지 않으 데이터가 해제되지 못하고 메모리를 차지 하는 현상.
// 불필요한 전역 변수 사용
// 분리된 노드 참조
// 해제되지 않는 타이머
// 잘못된 클로저 사용



// 얕은 복사 , 깊은 복사 

// 참조형 : 객체, 배열, 함수 나머지는 원시형 
// 참조형은 가변성으로 인해, 데이터를 복사할 때 주의가 필요.
// 얕은복사 - 참조형의 1차원 데이터 복사
// 깊은복사 - 참조형의 모든 차원 데이터 복사

// import { cloneDeep } from "lodash";

// // const a = {x : 1}
// // const b = {...a} // 얕은 복사 - 1차원만 가능

// const a = {x : {y: 1}}
// const b = cloneDeep(a) // 깊은 복사 

// b.x.y = 2 // b를 변경해도 a 에 영향이 없다.

// const b = a // 이럴 경우 참조형의 특성으로 b or a 를 변경하면 서로 영향을 받게 된다.



// BigInt : 길이 제한이 없음. 숫자 뒤에 n 을 붙여 사용. ex) 11n


// Symbol : 수정 불가한 데이터,  디버깅용으로 사용, 코드로 볼 수 없음.


// SPA Example using History

// const page1 = /* html */`
//   <section class ="page1">
//     <h1>Page1</h1>
//   </section>`;

// const page2 = `
//   <section class ="page2">
//     <h1>Page2</h1>
//   </section>`;

// const page3 = `
//   <section class ="page3">
//     <h1>Page3</h1>
//   </section>`;

//   const pageNotFound = `
//     <section>
//       <h1>404 Page Not Found!</h1>
//     </section>`;

//   const pages = [
//     { path: '#/page1', template: page1},
//     { path: '#/page2', template: page2},
//     { path: '#/page3', template: page3}
//   ]

//   const appEl = document.querySelector('#app')

//   const render = () => {
//     const page = pages.find(page => page.path === location.hash)
//     appEl.innerHTML = page 
//       ? page.template
//       : pageNotFound
//   }

//   window.addEventListener('popstate', render)
//   render()


//   const pagePush = num => {
//     history.pushState(`전달할 데이터 - ${num}`, null, `#/page${num}`)
//     render()
//   }

//   const inputEl = document.querySelector('nav input')
//   inputEl.addEventListener('keydown', event => {
//     if(event.key === 'Enter'){
//       pagePush(event.target.value)
//     }
//   })




// history ; 브라우저 히스토리(세션 기록) 정보를 반환하거나 제어합니다.

// .scrollRestoration : 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
// .state: 현재 스토리에 등록된 데이터(상태)
// .pushState(상태, 제목, 주소) ; 히스토리에 상태 및 주소를 추가
// .replaceState(상태, 제목, 주소); 현재 스토리의 상태 및 주소를 교체
// 모든 브라우저(사파이 제외) '제목' 옵션 무시

// console.log(history)

// Location
// .assign(주소), .replace(주소), .reload(강력) - 'true' 인수를 '강력'에 넣으면 강력/완전 새로 고침.

// console.log(location);


// storage

// 도메인 단위, 5MB, 세션 또는 영구 저장 가능
// sessionStorage / localStorage
// .getItem(), .setItem(), .removeItem(), .clear()

// localStorage.setItem('b', JSON.stringify({x: 1, y: 2})) // 객체 저장 조심.
// localStorage.setItem('c', JSON.parse(123)) // 숫자도 저장 조심

// console.log(JSON.parse(localStorage.getItem('b'))) // 객체 조심
// console.log(JSON.parse(localStorage.getItem('c'))) // 숫자도 조심

// Cookie

// 도메인 단위로 저장
// 표준안 기준, 사이트당 최대 20개 및 4KB 로 제한
// 영구 저장 불가능

// domain: 유효 도메인 설정
// path: 유료 경로 설정
// expires: 만료 날짜(UTC Date) 설정
// max-age: 만료 타이머(S) 설정


// document.cookie = `a=1`
// document.cookie = `b=2; expires=${new Date(2023, 3, 13).toUTCString()}`  // 2023, 4, 12 -> js 월은 0 부터 라서, -1 해줘야 한다.
// document.cookie = `a=3`

// console.log(document.cookie)

// function getCookie(name) {
//   const cookie = document.cookie
//   .split('; ')
//   .find(cookie => cookie.split('=')[0] === name)
//   return cookie ? cookie.split('=')[1] : null 
// }

// console.log(getCookie('a'))

// console ; .log(), .warn(), .error(), .dir(), time(), .timeend(), .trace()
// console.dir(document.body)

//  console.time('loop')
//   for(let i = 0; i < 10000; i+=1){
//     console.log(i)
//   }

//  console.timeEnd('loop')

// function a() {
//   function b() {
//     function c() {
//       console.log('Log !!')
//       console.trace('Trace !!')
//     }
//     c()
//   }
//   b()
// }
// a()

// 서식 문자 치환

// %s - 문자로 적용,  %o- 객체로 적용,  %c - CSS를 적용

// const a = 'The brown fox'
// const b = 3
// const c = {
//   f: 'fox',
//   d: 'dog'
// }

// console.log('%s jumps over the lazy dog %stimes. %s', a, b, 123)
// console.log('%o is Object !', c)
// console.log(
//   '%cThe brown fox %cjumped over %cthe lazy dog.',
//   'color: brown; font-family: serif; font-size: 20px;',
//   '',
//   'font-size: 18px; color: #FFF; background-color: green; border-radius: 4px;'
// )


// 커스텀 이벤트 와 디스패치(강제로 이벤트 발생) 
// const child1 = document.querySelector('.child:nth-child(1)')
// const child2 = document.querySelector('.child:nth-child(2)')


// child1.addEventListener('hi-will', event => {
//   console.log('custom event is raised')
//   console.log(event.detail)
// })

// child2.addEventListener('click', () => {
//   child1.dispatchEvent(new CustomEvent('hi-will', {
//     detail: 'hi will'
//   }))
// })

// child1.addEventListener('click', event => {
//   child2.dispatchEvent(new Event('click'))
//   child2.dispatchEvent(new Event('wheel'))
//   child2.dispatchEvent(new Event('keydown'))
// })

// child2.addEventListener('click', event => {
//   console.log('child2 click !!')
// })
// child2.addEventListener('wheel', event => {
//   console.log('child2 wheel !!')
// })
// child2.addEventListener('keydown', event => {
//   console.log('child2 keydown !!')
// })



// Focus & Form Events

// focus 
// blur
// input : when value is chaneged
// chane : when status is changed, press enter or tab key
// submit 
// reset 

// const formEl = document.querySelector('form')
// const inputEls = document.querySelectorAll('input')

// inputEls.forEach(el => {
//   el.addEventListener('focus', () => {
//     formEl.classList.add('active')
//   })
//   el.addEventListener('blur', () => {
//     formEl.classList.remove('active')
//   })
//   el.addEventListener('input', event => {
//     console.log(event.target.value)
//   })  
//   el.addEventListener('change', event => {
//     console.log(event.target.value)
//   }) 
// })


// formEl.addEventListener('submit', event => {
//   event.preventDefault() // prevent refresh pages
//   const data = {
//     id: event.target[0].value,
//     pw: event.target[1].value
//   }
//   console.log('submit !!', data)
// })

// formEl.addEventListener('reset', event => {
//   console.log('reset !!')
// })


// keyboard events

// cjk characters(including Korea) issue , isComposing 으로 처리

// const inputEl = document.querySelector('input')

// inputEl.addEventListener('keydown', event => {
//   if(event.key == 'Enter' && !event.isComposing){
//     console.log(event.isComposing)
//     console.log(event.target.value)
//   }
// })

// Mouse & Pointer Events

// click
// dblclick
// mousedown
// mouseup
// mouseenter ; 포인터가 요소 위로 들어갈 때
// mouseleave
// mousemove
// contextmenu
// wheel

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')


// window.addEventListener('wheel', event => {  
//   console.log(event) // 
//   // console.log(event.offsetX, event.offsetY)
// })

// parentEl.addEventListener('wheel', event => {  
//   console.log(event) // 
//   // console.log(event.offsetX, event.offsetY)
// })


// childEl.addEventListener('contextmenu', event => {
//   event.preventDefault()
//   console.log(event) // 
//   // console.log(event.offsetX, event.offsetY)
// })

// childEl.addEventListener('mousemove', event => {
//   // console.log(event) // 
//   console.log(event.offsetX, event.offsetY)
// })

// childEl.addEventListener('mousenter', () => {
//   childEl.classList.add('active')
// })

// childEl.addEventListener('mouseleave', () => {
//   childEl.classList.remove('active')
// })


// childEl.addEventListener('mousedown', () => {
//   childEl.classList.add('active')
// })

// childEl.addEventListener('mouseup', () => {
//   childEl.classList.remove('active')
// })


// childEl.addEventListener('mousedown', () => {
//   childEl.classList.add('active')
// })

// childEl.addEventListener('mouseup', () => {
//   childEl.classList.remove('active')
// })


// childEl.addEventListener('dblclick', () => {
//   childEl.classList.add('active')
// })

// childEl.addEventListener('click', () => {
//   childEl.classList.add('active')
// })



// // 이벤트 위임(Delegation)
// //비슷한 패턴의 여러 요소에서 이벤트 핸들링이 필요한 경우,
// //단일 조상 요소에서 제어하는 이벤트 위임 패턴 사용.

// const parentEl = document.querySelector('.parent')
// const childEls = document.querySelectorAll('.child')

// //모든 대상요소에 이벤트 등록하는 일반적인 방법
// // childEls.forEach(el => {
// //   el.addEventListener('click', event => {
// //     console.log(event.target.textContent)
// //   })
// // })


// // 조상 요소에 이벤트 위임 ; 이벤트 핸들러 한 번만 등록
// parentEl.addEventListener('click', event => {
//   const childEl = event.target.closest('.child')
//   if(childEl){
//     console.log(childEl.textContent)
//   }
// })

// 이벤트 옵션

// const parentEl = document.querySelector('.parent')
// parentEl.addEventListener('click', event => {
//   console.log('parent')
// }, {once: true}) // 한번만 실행


// const parentEl = document.querySelector('.parent')
// parentEl.addEventListener('click', event => {
//   console.log('parent')
// }, {passive: true}) // 기본동작(이벤트) 와 핸들러 실행 분리 -> 성능향상



// 이벤트 전파(버블) 정지

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const anchorEl = document.querySelector('a')

// window.addEventListener('click', event => {
//   console.log('window')
// })

// document.body.addEventListener('click', event => {
//   console.log('body')
// }, {capture: true}) // event capture(이벤트 캡쳐링) , 여기 부터 시작.

// parentEl.addEventListener('click', event => {
//   console.log('parent')
// })

// childEl.addEventListener('click', event => {
//   console.log('child')
// })

// anchorEl.addEventListener('click', event => {
//   console.log('Anchor')
//   event.stopPropagation() // 버블링 정지!
// })


// 기본 동작 방지

// const parentEl = document.querySelector('.parent')

// parentEl.addEventListener('wheel', event =>{
//   event.preventDefault()
//   console.log('Wheel !!')
// })

// const anchorEl = document.querySelector('a')
// anchorEl.addEventListener('click', event => {
//   event.preventDefault()
//   console.log('Click !!')
// })


// event 객체

// const inputEl = document.querySelector('input')

// inputEl.addEventListener('keydown', event => {
//   console.log(event.key)
// })


//.addEventListener()

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// parentEl.addEventListener('click', () => {
//     console.log('Parent')
// })

// childEl.addEventListener('click', () => {
//     console.log('Child')
// })

// const handler = () => {
//   console.log('parent')
// }

// parentEl.addEventListener('click', handler)

// childEl.addEventListener('click', () => {
//   parentEl.removeEventListener('click', handler) // .removeEventListener
// })


// // E.getBoundingClientRect()
// // 테두리선을 포함한 요소의 크기
// // 화면에서 상대 위치 정보를 얻음.

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// console.log(parentEl.getBoundingClientRect())
// console.log(childEl.getBoundingClientRect())

// offsetWidth/Height ; 테두리선 미포함

// clientWidth/Height ; 테두리선 포함,

// window.scrollTo() / E.scrollTo()

// const parentEl = document.querySelector('.parent')

// // setTimeout(() => {
// //   window.scrollTo({
// //     left: 0,
// //     top: 500,
// //     behavior: 'smooth'

// //   })
// // }, 1000)


// setTimeout(() => {
//   parentEl.scrollTo({
//     left: 0,
//     top: 300,
//     behavior: 'smooth'

//   })
// }, 1000)

// // window.getComoputedStyle()
// // 적용된 스타일 객체 반환

// const el = document.querySelector('.child')
// const style = window.getComputedStyle(el)

// console.log(style.width)

// console.log(style)


// // E.style

// const el = document.querySelector('.child')

// // each assignemnt
// el.style.width = '100px'
// el.style.fontSize = '20px'
// el.style.backgroundColor = 'green'

// // all assignment
// Object.assign(el.style, {
//   width: '100px',
//   fontSize: '20px',
//   backgroundColor: 'green'
// })



// // E.classList

// // 요소의 'class' 속성 값을 제어

// // .add(), .remove() , .toggle(), .contain()

// const el = document.querySelector('.child')

// el.classList.add('active')
// console.log(el.classList.contains('active'))

// el.classList.remove('active')
// console.log(el.classList.contains('active'))

// el.addEventListener('click', () => {
//   el.classList.toggle('active')
//   console.log(el.classList.contains('active'))
// })

// // E.dataset
// // 

// const el = document.querySelector('.child')
// const str = 'Hi Will'
// const obj = {a: 1, b: 2}

// el.dataset.hi = str;
// el.dataset.object = JSON.stringify(obj)

// console.log(el.dataset.hi)
// console.log(el.dataset.object)
// console.log(JSON.parse(el.dataset.object))



// // Node vs Element

// // Node : HTML 요소, 텍스트, 주석 등 모든 것
// // Element : HTML 요소

// const parent = document.querySelector('.parent');
// console.log(parent.childNodes)
// console.log(parent.children)

// // fetch(주소, 옵션), Promise 인스턴스를 반환

// fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`, {
//     // method: 'GET',
//     // headers: {
//     //   'Content-Type' : 'Application/json'
//     // },
//     // body: JSON.stringify({
//     //   name: 'Will',
//     //   age: 25,
//     //   email: 'willsk.kim@gmail.com'
//     // })
//   }
//   )
//   .then(res => res.json())
//   .then(json=> console.log(json))

//   const wrap = async () => {
//     const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`)
//     const json = await res.json();
//     console.log(json)  
//   }
//   wrap()


// // 반복문에서 비동기 처리

// const getMovies = movieName => {
//     return new Promise((resolve) => {
//       fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//         .then(res => res.json())
//         .then(res => resolve(res))
//     })
//   }

//   const titles = ['frozen', 'avengers', 'avatar']

//   // async
//   // titles.forEach(async title => {
//   //   const movies = await getMovies(title)
//   //   console.log(title, movies);
//   // })

//   // for -> async & 순서 지킴
//   const wrap = async () => {
//     for (const title of titles){
//       const movies = await getMovies(title)
//       console.log(title, movies)
//     }
//   }
//   wrap()

// // Resolve, Reject 2
// const getMovies = movieName => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//       .then(res => res.json())
//       .then(json => {
//         if(json.Response == 'False') {
//           reject(json.Error)
//         }
//         resolve(json)
//       })
//       .catch(error => {
//         reject(error)
//       })
//   })
// }

// let loading = true;

// // getMovies('avengers')
// //   .then(movies => console.log('영화 목록: ', movies))
// //   .catch(error => console.log('에러 발생: ', error))
// //   .finally(() => loading = false);


// // async/await 
// const wrap = async () => {
//   try{
//     const movies = await getMovies('avengers')
//     console.log('영화 목록:', movies)
//   }catch(error){
//     console.log('에러 발생:', error)
//   }finally{
//     loading = false;
//   }
// }

// Resolve, Reject 1
// const delayAdd = index => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(index > 10) {
//           reject(`${index}는 10보다 클 수 없습니다.`)
//           return 
//         }
//         console.log(index)
//         resolve(index + 1)
//     }, 1000)
//   })
// }

// delayAdd(2)
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Done'));

// const wrap = async () => {
//   try{

//     const res = await delayAdd(2);
//     console.log(res)
//   }catch(err){
//     console.error(err)
//   }finally {
//     console.log('Done!!')
//   }
// }

// wrap();

// promise / then

// import {hello} from './module.js'

// console.log(hello);

// setTimeout(() => {
//   import('./module.js').then(abc => { // then ; 로드 끝나고 실행, 비동기
//     console.log(abc);
//   })
// }, 1000)

// //import, 비동기
// setTimeout(async () => {
//   const abc = await import('./module.js')
//   console.log(abc)
// }, 1000)



// // Object.assign()
// // 하나이상의 출처 객체로부터 대상 객체로 속성을 복사하고 대상 객체를 반환.
// const target = {a: 1, b: 2};
// const source1 = {b: 3, c: 4};
// const source2 = {c: 5, d: 6};

// // const result = Object.assign({}, target, source1, source2);
// const result = {
//   ...target,
//   ...source1,
//   ...source2
// }
// console.log(target);
// console.log(result);

// Array.from() , 유사 배열을 실제 배열로 변환.

// const arrayLike = {
//   0: 'A',
//   1: 'B',
//   2: 'C',
//   length: 3
// }

// Array.from(arrayLike).forEach(item => console.log(item));

// .unshift(), 배열의 맨앞에 요청 추가,  push와 반대, 

// .splice() , 요소, 추가, 삭제, 변경
// const arr = ['A', 'B', 'c']
// arr.splice(1, 0, 'X')
// arr.splice(1, 1, 'X');

// .sort(), 원본 변경

// const numbers = [4, 17, 2, 103, 3, 1, 0];

// numbers.sort(); // 문자열 취급
// console.log(numbers);

// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);


// // .reduce()

// const numbers = [1, 2, 3, 4, 10];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0)

// console.log(sum);

// .pop(), 마지막 원소를 제거하고 반환, 원본도 변경

// .push(), 대상 배열의 마지막에 하나 이상의 요소를 추가, 원본도 변경


// // array map

// const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.map(item => item * 2);

// console.log(newNumbers);


// // array join
//  const arr = ['a', 'b', 'c'];
//  console.log(arr.join(','));
 

// date

// const date = new Date();

// console.log(date);
// console.log(date.getUTCFullYear());
// console.log(date.getTime()) // unix time, miliseconds




// math , random
// console.log(Math.random())


// function random(min = 0, max = 10){
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(random())
// console.log(random(11, 20))
// console.log(random(101, 999))


// static method

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

// }

// const will = new User('Will', 'Kim')
// const tony = new User('Tony', 'Kim')

// console.log(will)
// console.log(tony)

// console.log(will.getFullName())
// console.log(tony.getFullName())


// ES6 Classes

// function User(first, last){
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

// }

// const will = new User('Will', 'Kim')
// const tony = new User('Tony', 'Kim')

// console.log(will)
// console.log(tony)

// console.log(will.getFullName())
// console.log(tony.getFullName())


// prototype
// function User(first, last){
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

// const will = new User('Will', 'Kim')
// const tony = new User('Tony', 'Kim')

// console.log(will)
// console.log(tony)

// console.log(will.getFullName())
// console.log(tony.getFullName())


// 호출 스케쥴링 (Scheduling a function call)

// const hello = () => {
//   console.log('Hello')
// }

// const timeout = setInterval(hello, 2000)
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   console.log('clear')
//   clearInterval(timeout)
// })

//재귀 recursive -> 중단 조건 반드시 추가




// callback
//https://www.gstatic.com/webp/gallery/4.jpg

// const loadImage = (url, cb) => {
//   const imgEl = document.createElement('img')
//   imgEl.src = url
//   imgEl.addEventListener('load', () =>{
//       setTimeout(() => {
//         cb(imgEl)
//       }, 1000)
//   })
// }

// const containerEl = document.querySelector('.container')
// loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
//   containerEl.innerHTML = ''
//   containerEl.append(imgEl)
// })

// const a = callback => {
//   console.log('A')
//   callback()
// }

// const b = () => {
//   console.log('B')
// }

// a(b)


// const sum = (a, b, c) => {
//   setTimeout(() => {
//       c(a + b)
//   }, 1000)
// }

// sum(1, 2, value => {
//   console.log(value)
// })

// sum(3, 7, value => {
//   console.log(value)
// })

// 즉시실행 함수(IIFE - Immediately-Invoked Function Expression)

// ((a, b) => {
//   console.log(a)
//   console.log(b)
// })(1, 2);


// ((a, b) => {
//   console.log(a.innerWidth)
//   console.log(b.body)
// })(window, document)

// 화살표 함수

// const a = () => {}
// const b = x => {}
// const c = (x, y) => {}
// const d = x => {return x * x}
// const e = x => x * x 
// const f = x => {
//   console.log(x * x)
//   return x * x 
// }

// const g = () => {return {a: 1}}
// const h = () => ({a: 1})

// const i = () => {return [1, 2, 3]}
// const j = () => [1, 2, 3]


// function sum (a, b){
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b
// }

// const sum = (a, b) => a + b

// console.log(sum(1, 2))

// function , 구조분해

//  const user = {
//   name: 'Will',
//   age: 25
//  }

//  function getName({ name }){
//   return name;
//  }

//  function getEmail( {email = 'no email' }){
//   return email;
//  }

//  console.log(getName(user));
//  console.log(getEmail(user));


//  const fruits = ['Apple', 'Banana', 'Cherry']

//  function getSecondItem([, b]){
//     return b
//  }

//  console.log(getSecondItem(fruits));


// function sum(...rest){
//   console.log(rest)
//   return rest.reduce(function (acc, cur){
//     return acc + cur;
//   }, 0)
// }

// console.log(sum(1, 2))
// console.log(sum(1, 2, 3, 4))
// console.log(sum(1, 2, 3, 4, 5))


// 구조 분해 할당

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// const {c, ...rest} = obj 

// console.log(c, rest )

// const { a, b} = obj 

// console.log(a, b)

// const { x = 4 } = obj 
// console.log(x)

// const { a: will} = obj 
// console.log(will)






// const arr = [1, 2, 3]

// // const [a, rest] = arr
// // console.log(a, rest)


// const [a, ...rest] = arr
// console.log(a, rest)

// const [a, b, c] = arr

// console.log(a, b, c)

// // let d = 0;
// let e = 0;
// let f = 0;

// // [d, e, f] = arr 
// [, e, f] = arr



// spread operator
// const a = [1, 2, 3]
// const b = [4, 5, 6]

// const c = a.concat(b)
// console.log(c)

// const d = [...a, ...b]
// console.log(d)


// const a =  { x: 1, y: 2}
// const b = {y: 3, z: 4}

// const c = Object.assign({}, a, b)
// console.log(c)

// const d = {a, b}
// console.log(d)

// const e = {...a, ...b}
// console.log(e)

// function fn(x, y, z){
//   console.log(x, y, z)
// }

// fn(1, 2, 3)

// const a = [1, 2, 3]
// fn(...a)





// const n = 0

// const num1 = n || 7

// console.log(num1)

// //nullish
// const num2 = n ?? 7
// console.log(num2)

// console.log(null ?? 1)
// console.log(undefined ?? 2)
// console.log(null ?? undefined)


// console.log(typeof 'Hello' === 'string')
// console.log(typeof 123 === 'number')
// console.log(typeof false === 'boolean')
// console.log(typeof undefined === 'undefined')
// console.log(typeof null === 'object')
// console.log(typeof [] === 'object')
// console.log(typeof {} === 'object')
// console.log(typeof function(){}=== 'function')

// console.log([].constructor === Array)
// console.log({}.constructor === Object)

// function checkType(data){
//   return Object.prototype.toString.call(data).slice(8, -1)
// }

// console.log(checkType('Hello') === 'String')
// console.log(checkType(123) === 'Number')
// console.log(checkType(false) === 'Boolean')
// console.log(checkType(undefined) === 'Undefined')
// console.log(checkType(null) === 'Null')
// console.log(checkType([]) == 'Array')
// console.log(checkType({}) === 'Object')
// console.log(checkType(function(){}) === 'Function')


// import _ from 'lodash'

// console.log(_.upperCase('Hi Will'));


// interface User {
//   name: string
//   age: number
// }

// const user: User = {
//   name: 'Will',
//   age: 20
// }

// console.log(user)
