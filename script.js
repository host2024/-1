//  문제 1에서 만든 객체 배열

// const all = [
//     {
//         이름: '철수',
//         나이: 19,
//         성별: '남',
//     },
//     {
//         이름: '짱구',
//         나이: 20,
//         성별: '남',
//     },
//     {
//         이름: '유리',
//         나이: 21,
//         성별: '여',
//     },
// ];

// function displayData(all) {
//     const outputDiv = document.getElementById('output');

//     all.forEach((person) => {
//         const personInfo = `
//             <p>이름: ${person.이름}</p>
//             <p>나이: ${person.나이}</p>
//             <p>성별: ${person.성별}</p>
//             <hr/>

//         `;
//         outputDiv.innerHTML += personInfo;
//     });
// }
// displayData(all);

// 문제 3
// const all = [
//     {
//         이름: '철수',
//         나이: 19,
//         성별: '남',
//     },
//     {
//         이름: '짱구',
//         나이: 20,
//         성별: '남',
//     },
//     {
//         이름: '유리',
//         나이: 21,
//         성별: '여',
//     },
// ];

// const female = all.find((person) => person.성별 === '여');

// console.log(female);

// 문제 4

// const all = [
//     {
//         이름: '철수',
//         나이: 19,
//         성별: '남',
//     },
//     {
//         이름: '짱구',
//         나이: 20,
//         성별: '남',
//     },
//     {
//         이름: '유리',
//         나이: 21,
//         성별: '여',
//     },
// ];

// const man = all.filter((person) => person.성별 === '남');

// console.log(man);

// 문제 5

// const all = [
//     {
//         이름: '철수',
//         나이: 19,
//         성별: '남',
//     },
//     {
//         이름: '짱구',
//         나이: 20,
//         성별: '남',
//     },
//     {
//         이름: '유리',
//         나이: 21,
//         성별: '여',
//     },
// ];

// const newAll = all.map((person) => ({
//     ...person,
//     나이: person.나이 + 10,
// }));

// console.log('기존 데이터:', all);
// console.log('새로운 배열:', newAll);

// 문제 6

// const all = [
//     {
//         이름: '철수',
//         나이: 19,
//         성별: '남',
//     },
//     {
//         이름: '짱구',
//         나이: 20,
//         성별: '남',
//     },
//     {
//         이름: '유리',
//         나이: 21,
//         성별: '여',
//     },
// ];

// const sortedAll = [...all].sort((a, b) => b.나이 - a.나이);

// console.log('기존 데이터:', all);
// console.log('정렬된 데이터:', sortedAll);

// 문제 7

// const user = {
//     이름: '병수',
//     나이: 20,
//     주소: '시골',
// };

// const { 이름, 나이, 주소 } = user;

// console.log(이름);
// console.log(나이);
// console.log(주소);
