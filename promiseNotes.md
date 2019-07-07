Promises 

- while handling asyncronous operations, the can 'promise' to do something when that operation is finished.
- handle promise response with a .then()
    - inside the .then function, define what to do once the callback is complete.

- to create a promise, return a new Promise()
    - this promise carries a function that has two parameters, resolve and reject.
        - call resolve when done doing whatever was being done.
        - call reject for any errors
            * return new Promise(function(resolve, reject){

            })

        - in createPost, add ' .then() '

CREATING THE PROMISE
  function createPost(post){  ** with a callback, we list callback inside the parameter with post
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);
            resolve(); //         this was where the callback() was 
    }, 2000);
   });
  }

The Response of the promise... .THEN
add .then to the end of the function of your calling.
    - inside the .then(), add the 'getPost' function that needs to be called
        - .then(getPosts);


NOW, NEXT TO ADDRESS IF THERE IS AN ERROR.... 
- once we add in the if/else to 'catch' if there is an error, use ** .catch() ** to catch and address the error accordingly. To do this, ADD ON TO .THEN() with a .CATCH

        ** .then().catch(for example above) **

        - catch carries a function and whatever is passed into reject, you get here. 
    createPost({title: 'post THREE', body: 'This is the last post created, POST THREE'})
    .then(getPosts)
    .catch(function(err){
    console.log(err); //will show whatever is listed in the reject statement. 
    }); 