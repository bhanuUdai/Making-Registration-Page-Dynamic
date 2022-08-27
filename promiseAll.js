// let promise1=Promise.resolve('hello world')
// let promise2=10;
// let promise3=new Promise((resolve,reject)=>
// {
//     resolve('Good bye')
// },2000)

// Promise.all([promise1,promise2,promise3]).then(val=>console.log(val))



// Promise.all(input) , it take input which is iteratable i.e array
//if you have number of asynchronous tasks and entire code dependsupon that tasks then we use Promise.all
// or we can say that if you have number of promioses, then use Promise.all() to iterate through them 

let posts=[{title:'user 1',time: new Date().getTime()},
{title:'user 2',time: new Date().getTime()}];


function createPost(post)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
           

        let error=false;

        if(!error)
        {
            posts.push(post);
            let x=[];
                for(let i=0;i<posts.length;i++)
                {
                    x.push(posts[i].title)
                }
            resolve(x)   // Note that in resolve dont use console because in practically here you will given with data , you have to console that data in then and catch
        }
        else
        {
            reject('Error : createPost get rejected')
        }
        },1000)
        

    })
}

function updateLastUserActivityTime()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            let error=false;
        if(!error)
        {
            resolve((Math.floor((posts[posts.length-1].time=new Date().getTime())/1000)))
        }
        else
        {
            reject('Error : time get rejected')
        }
        },1000)
        

        
    })
}


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
                reject('Error : Array is full')
            }
        },1000)
    })
}

function getPosts()
{
    return new Promise((resolve,reject)=>
    {
        
        setTimeout(()=>
        {

            let error=true

            if(posts.length>0)
            {
                
                let x=[];
                for(let i=0;i<posts.length;i++)
                {
                    x.push(posts[i].title)
                }

                resolve(x)
            }
            else
            {
                reject('Error : Array is empty')
            }
        })
    })
}
 
// Promise.all()


Promise.all([createPost({title:'user 3',time: new Date().getTime()}),updateLastUserActivityTime()])
.then((data)=>                         //here we are calling promise.all() and priting data if promise get resolved by console
{                                      // after that we are calling deletePost() which again contains promise
    console.log(data)                  //here if deletePost() promise get resolved it and pop() the array, getpost() will called in then
    deletePost()                       // this process repeated again and again
    .then(()=>                         // here in promise.all if any of promise get rejected it will stop there and not execute further i.e rejected
    {                                                      
        getPosts()
        .then((data)=>
        {
            console.log(data)
            deletePost()
            .then(()=>
            {
                getPosts()
                .then((data)=>
                {
                    console.log(data)
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





// .then(print=>console.log(print))
// .catch(err=>console.log(err))

// .then(deletePost)
// .catch(err=>console.log(err))


// .then(getPosts)
// .catch(err=>console.log(err))