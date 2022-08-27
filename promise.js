//creating a array having name posts

let posts=[
    {title:'post1',body:'post 1 is done'},
    {title:'post2',body:'post 2 is done'}
]

// creating this function to print the title of array on screen, it will work after 1 sec of call
function getPost()
{
    
    setTimeout(()=>
    {   
        let output='';
        posts.forEach((post)=>
        {
            output=output+`<li> ${post.title} </li>`
        })
        document.body.innerHTML=output;                         // it should be present out of loop other wise print last value even array is empty

    },1000)
}

//it will create new object and pushed in side the array//  here we are using promise
// after callig this function will return which will work i.e(reject or resolve after 2 sec)
function createPost(post)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            posts.push(post);

            let error=false;

            if(!error)
            {
                resolve()
            }
            else
            {
                reject('Error : Promiose get rejected')
            }

        },2000)
    })
}


// it will delete the objects from the array
// here promise is used i.e if array has object , it will pop other wise give error
function deletePost()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            if(posts.length>0)
            {
                resolve(posts.pop())
            }
            else
            {
                reject('Error : Array is empty')
            }
        },1000)
    })
}

//NOTE:- We cannot use then on same promise twice (e.g createPost().then().then()) this is wrong

// here createPost is called, here then() is used to collect data if promise is resolve and catch is used to collect data if promise is rejected
createPost({title:'post3',body:'post 3 is done'})
.then(()=>
{                                  // if create post resolved, evoke getpost()
    getPost()
    deletePost()                   //after getpost() we will delete post by calling deletePost() which also create promise
    .then(()=>                     //if promise resolved, getPost() will again called to show remaining data in which poped object will not included
    {
        getPost()                 
        deletePost()               //here again we are deleting (i.e pop) from array by calling deletePost() which have contained promise
        .then(()=>                 // meaning of then is that if promise is resolved then do this
        {
            getPost()
            deletePost()
            .then(()=>
            {
                getPost()
                deletePost()
                .then(()=>
                {
                    getPost()
                    deletePost()
                    .then(()=>
                    {
                        getPost()
                    })
                    .catch(err=>console.log(err))
                })
                .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
})                                               
.catch(err=>console.log(err))





// .then(deletePost)                   // here delete function is to be called after creating post 3 , otherwise it will delete the post2 first and not post 3
// .catch(err=>console.log(err))       //catch will collect is promise is rejected 

// .then(getPost)                       // after that, getPost is again called to print remaiming posts on dom
// //.catch(err=>console.log(err))        // no need of catch here because getPost have no promise , here we are only calling getPost using .then()  
//                                       // which means after deletePost

//                                       // similarly delete post will call again persuing getpost for deleting more posts
// .then(deletePost)                     // here it has catch because deletePost is returing promise
// .catch(err=>console.log(err))

// .then(getPost)
// //.catch(err=>console.log(err))

// .then(deletePost)
// .catch(err=>console.log(err))

// .then(getPost)
// // .catch(err=>console.log(err))

// .then(deletePost)
// .catch(err=>console.log(err))

// .then(getPost)
// // .catch(err=>console.log(err))


// .then(deletePost)
// .catch(err=>console.log(err))

// .then(getPost)
// .catch(err=>console.log(err))









// It can we done like this also i.e traditional way

// .then()
// .catch(x=>console.log(x))

// .then(()=>
// {
//   return  deletePost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//    return  getPost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return deletePost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return  getPost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return deletePost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return  getPost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return deletePost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return  getPost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return deletePost()
// })
// .catch(y=>console.log(y))

// .then(()=>
// {
//   return  getPost()
// })
// .catch(y=>console.log(y))
