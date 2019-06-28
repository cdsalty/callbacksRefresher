A callback is a function that is passed in as a parameter to another function and then ran inside the function body. - asyncronous

Scenerio: mimic the actions of a blog post on a server/api database, 
and also getting those post back. Deal with issues when the server returns a post before your new post is created and how to overcome it using 'setTimeuut' but then using a callback to fix the issues this causes. 
    - setTimeout takes in a function itself, which is a callback        itself.

will need to functions, a createPost() and a getPost()

- createPost will mimic the server response time by using setTimeout
    - will need to pass in the post created, as a parameter)
    - next call setTimeout and inside it's callback function, define    what action should take place or is expected.
        - the final arguement setTimeout calls is the delay time or     when you want it to happen.

- getPost will retrieve the post by making use of forEach
    - create output and set it to nothing.
    - next, loop through post using the forEach method.
    - finally, setting the time to delay.

    What will happen here?
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

Only post one and two would show if you used createPost because it takes two seconds and our getPost have already retrieved the data it was asked to retrieve and it was done in one second. now, back up to the next thing in-line which is adding a new post. 