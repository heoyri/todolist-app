# todolist-app
**할일을 적고 삭제 할 수 있는 앱 입니다**

시작하기
```c 
/create-react-app todolist-app
/cd todolistapp
todolist-app/ yarn start
```

배포
```c
/todolist-app>npm run build
```

new Date(); 사용하여 날짜를 나타내었습니다
```c
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
```
