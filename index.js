function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json())
  .then((response) => renderBooks(response))
  //.then((bookData) => bookData.forEach(json => renderBooks(json)));
  // return renderBooks(json);
}

// function getGithubOrgs(url) {
//   return fetch(url).then((response) => response.json());
// }

// getGithubOrgs("https://api.github.com/users/deekshasharma/orgs").then((res) =>
//   console.log(res)
// );

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
