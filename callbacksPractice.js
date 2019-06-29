// alert("sanity-check");

// Our made-up post:
const posts = [
  {title: 'Part One', body: 'This is the FIRST post'},
  {title: 'Part Two', body: 'This was the SECOND post'}
];

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;       // don't forget to append and not set it equal too.
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts();  // RETURNS: <li>Part One</li> and under it, <li>Part Two</li>; IT NEVER GETS TO CREATEPOST because getPost displays before createPost can run.

