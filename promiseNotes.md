Promises 

- while handling asyncronous operations, a PROMISE can 'promise' to do something when that operation is finished.
    - the way to handle a promise response is with a .then()
        - inside the .then function, define what to do once the callback is complete.

- to create a promise, ' return a new Promise() '
    - this promise carries a function that has two parameters, resolve and reject.
        - call resolve when done doing whatever was being done.
        - call reject for any errors
            * return new Promise(function(resolve, reject){

            })

        - in createPost, add ' .then() '

CREATING THE PROMISE
  function createPost(post){ // with Promises, no callback is needed as a parameter
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);
            resolve();              // originally, this was where callback() was called 
    }, 2000);
   });
  }



The Response of the promise... (.THEN)

* inside .then(), add the function to call that will tell the computer what action after the Promise is complete. *

add a .then to the end of the function being called.
    - inside the .then(), add the 'getPost' function that needs to be called
        - .then(getPosts);


NOW, NEXT IS TO ADDRESS IF THERE IS AN ERROR.... 

- once we add in the if/else to '.catch' if there is an error, use ** .catch() ** to catch and address the error accordingly. To do this, ADD ON TO .THEN() with a .CATCH()

        ** .then().catch(for example above) **
        - CATCH carries with it a function and whatever is passed into reject, will display here. 
    createPost({title: 'post THREE', body: 'This is the last post created, POST THREE'})
    .then(getPosts)
    .catch(function(err){
    console.log(err); //will show whatever is listed in the reject statement. 
    }); 