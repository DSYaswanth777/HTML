fetch('https://jsonplaceholder.typicode.com/comments?postId=1', {
    method: 'GET',
    // body: JSON.stringify({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // }),
    // headers: {
    //   'Content-type': 'application/json; charset=UTF-8',
    // },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));