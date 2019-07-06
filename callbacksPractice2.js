// alert('sanity-check');

/*
                the first option below is using setTimeout to simulate a server response time. Issue: Thrid post doesn't render
// Database
const posts = [
  {title: 'post UNO', body: 'This is the first post created, POST ONE'},
  {title: 'post TWO', body: 'This is the second post created, POST TWO'}
];

function createPost(post){
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts(){
  setTimeout(function() {
    let output = ''; 
    posts.forEach(function(post){   // go through the posts. forEach 'post' add a list item to it and refer back to it's title
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'post THREE', body: 'This is the last post created, POST THREE'});   // how to create the actual post
    
getPosts();    // how to call and get the list of posts created.

// the problem, not getting the thrid post to render. The reason is because we get the post first because it takes the least amount of time
// and by the time it gets to createPost(), the getPosts() has already retrieved the information it was shown and won't run again.

// it took two seconds to create a post but only one second to get the post.

// currently the only way to address the issue (only two listItems show), is to use callbacks.
*/



// To correct the issue with only two list items rendering, I will use a callback to have it come back and loop through createPost()

const posts = [
    {title: 'post UNO', body: 'This is the first post created, POST ONE'},
    {title: 'post TWO', body: 'This is the second post created, POST TWO'}
  ];
  
  function createPost(post, callback){
    setTimeout(function() {
      posts.push(post);
      callback();   // this calls getPosts()
    }, 2000);
  }
  
  function getPosts(){
    setTimeout(function() {
      let output = ''; 
      posts.forEach(function(post){   // go through the posts. forEach 'post' add a list item to it and refer back to it's title
        output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  createPost({title: 'post THREE', body: 'This is the last post created, POST THREE'}, getPosts);   // how to create the actual post
      
//   getPosts();

// NEXT WILL BE THE SAME LESSON BUT GRADUALLY MOVING TO PROMISES, FETCH, ASYNC/AWAIT, ETC.