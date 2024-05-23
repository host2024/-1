// const user = {
//     이름: '병수',
//     나이: 20,
//     주소: '시골',
// };

// // 1. user 데이터를 로컬스토리지에 저장
// localStorage.setItem('user', JSON.stringify(user));

// // 2. 로컬 스토리지에 저장된 데이터 조회 및 콘솔 출력
// const storedUser = localStorage.getItem('user');
// const userObject = JSON.parse(storedUser);
// console.log(userObject);

// // 3. 나이를 30으로 변경 후 다시 저장
// userObject.나이 = 30;
// localStorage.setItem('user', JSON.stringify(userObject));

// // 4. 로컬 스토리지의 데이터 삭제 및 확인
// localStorage.removeItem('user');
// const deletedUser = localStorage.getItem('user');
// console.log(deletedUser); // null

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiURL)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    });
