const posts = [
    {title: 'post UNO', body: 'This is the first post created, POST ONE'},
    {title: 'post TWO', body: 'This is the second post created, POST TWO'}
  ];
  
function createPost(post){ 
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);

      const error = true;
      if(!error) {
        resolve();
      } else {
        reject('Error: Something is terribly wrong')
      }
      resolve(); 
    }, 2000);
  });
}
  
function getPosts(){
  setTimeout(function() {
    let output = ''; 
    posts.forEach(function(post){   
    // go through the posts. forEach 'post' add a list item to it and refer back to it's title
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}
  
createPost({title: 'post THREE', body: 'This is the last post created, POST THREE'})
.then(getPosts)
.catch(function(err){
  console.log(err); //will show whatever is listed in the reject statement. 
}); 