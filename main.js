// let out = document.querySelector('.out')
// let inp = document.querySelector('input')
// let add = document.querySelector('.add')
// let arr = [];
// let count = 1;


// const funAdd  = () => {
//     let obj = {
//         val: inp.value,
//         count
//     }
    
//     arr.push(obj)
//     console.log(arr);
//     out.innerHTML += `
//     <p>${inp.value}</p>
//     <button onclick="filterP(${obj})">delete</button>
//     `

// }
// add.addEventListener('click', funAdd)


// function filterP(obj){
//     obj.count++
//     arr = arr.filter(item => item.id != item.id)
//     console.log(obj);
// }


// let arr = [{flag: true}, {flag: true}, {flag: false}, {flag: true}, {flag: false},]

// let newArr = arr.filter(item => item.flag ===true)



// console.log(newArr);



// document.querySelector('#elastic').oninput = function(){
//     let val = this.value.trim();
//     let elasticItems = document.querySelectorAll('.elastic li');

//     if(val != ''){
//         elasticItems.forEach(function(elem){
//             if(elem.innerText.search(val) == -1) {
//                 elem.classList.add('hide');
//                 elem.innerHTML = elem.innerText;
//             }
//             else{
//                 elem.classList.remove('hide');
//                 let str = elem.innerText;
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
//             }
//         })
//     }
//     else{
//         elasticItems.forEach(function(elem){
//             elem.classList.remove('hide');
//             elem.innerHTML = elem.innerText;
//         })
//     }
// }

// function insertMark(str, pos, len){
//     return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len)
// }



// let namelog = (function(name = 'adakhan'){
//     console.log(name)
// })

// namelog()






















