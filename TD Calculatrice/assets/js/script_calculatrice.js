
// // var app = new Vue({
// //   el: '#app',
// //   data: {
// //     total: 0
// //   },
// //   methods: {
// //       key: function(num) {
// //       return this.total += num;
// //       },
// //       clear: function() {
// //       return this.total = 0;
// //       },
// //       equal: function() {
// //        let equal = this.total;
// //        return this.total = eval(equal);
// //       }         
// //   }
// // });

// const display = document.querySelector('.display');
// const buttons = document.querySelector('.buttons');

// buttons.addEventListener('click', e => {
//     if (e.target.classList.contains('number')) {
//         let number = e.target.innerText;
//         display.innerText += number;
//     }
// });

// buttons.addEventListener('click', e => {
//     if (e.target.classList.contains('operator')) {
//         let operator = e.target.innerText;
//         display.innerText += operator;
//     }
// });

// buttons.addEventListener('click', e => {
//     if (e.target.classList.contains('clear')) {
//         display.innerText = '';
//     }
// });

// buttons.addEventListener('click', e => {
//     if (e.target.classList.contains('operator') && e.target.innerText === '=') {
//         let value = display.innerText;
//         let splitValue = value.split(/\+|\-|\*|\//);
//         let number1 = parseInt(splitValue[0]);
//         let number2 = parseInt(splitValue[1]);
//         let operator = value.replace(number1, '').replace(number2, '');
//         if (operator === '+') {
//             display.innerText = number1 + number2;
//         } else if (operator === '-') {
//             display.innerText = number1 - number2;
//         } else if (operator === '*') {
//             display.innerText = number1 * number2;
//         } else if (operator === '/') {
//             display.innerText = number1 / number2;
//         }
//     }
// });

new Vue({
    el: '#app',
    data: {
      expression: ''
    },
    methods: {
      updateExpression(value) {
        this.expression += value;
      },
      calculate() {
        this.expression = eval(this.expression);
      }
    }
  });
  
  