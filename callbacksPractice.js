// alert("sanity-check");

// Our made-up post:
const post = [
  {title: 'Part One', body: 'This is the FIRST post'},
  {title: 'Part Two', body: 'This was the SECOND post'}
];

function createPost(post) {
  setTimeout(function() {
    post.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
  }, 1000);
}