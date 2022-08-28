// console.log('Person 1: show ticket')
// console.log('Person 2: show ticket')

// let wifeBringBackTicket=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//         resolve('ticket')
//     },1000)
// })



// let getPopcorn=wifeBringBackTicket.then((t)=>{
//     console.log('wife : i got the tickets');
//     console.log('husband : we should go in');
//     console.log('wife : i am hungry');
//     return new Promise((resolve,reject)=>{resolve(`${t} popcorn`)})
// })


// let getButter=getPopcorn.then((t)=>
// {
//     console.log('husband : i got popcorn');
//     console.log('husband : we should go in');
//     console.log('wife : i need butter');
//     return new Promise((resolve,reject)=>{resolve(`${t} butter`)})
// })

// getButter.then((t)=>
// {
//     console.log(t)
// })


// console.log('Person 4: show ticket')
// console.log('Person 5: show ticket')


//async function//---------//---------


// console.log('Person 1: show ticket')
// console.log('Person 2: show ticket')

// let ticket=async()=>               // async( ) is used to describe function as async
// {                                   // async function returns promises
//     let wifeBringBackTicket=new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('ticket')

//         },2000)
//     })

//     let getPopcorn=new Promise((resolve,reject)=>
//     {
//         resolve('popcorn')
//     })
    
//     let getButter=new Promise((resolve,reject)=>
//     {
//         resolve('butter')
//     })

//     let getColdDrink=new Promise((resolve,reject)=>
//     {
//         resolve('cold drink')
//     })

//     let tick= await wifeBringBackTicket;    // await only used inside async function, it will not outside async
//                                             // it put holds the code below it , and execute onlyb after function containing promise describe by await get resolved
//     console.log(`wife : i have ${tick}`);
//     console.log('husband : we should go in');
//     console.log('wife : i am hungry');

    

//     let pop=await getPopcorn;
//     console.log(`husband : i got ${pop}`);
//     console.log('husband : we should go in');
//     console.log('wife : i need butter');


//     let butter=await getButter;
//     console.log(`husband : i got ${butter}`);
//     console.log('husband : we should go in');
//     console.log('wife : i need something to drink');

//     let drink=await getColdDrink
//     console.log(`husband : i got ${drink}`);
//     console.log('husband : we should go in');
//     console.log('wife : yeah sure')

//     return tick       // after console the code above it will return this 'tick' which contains result of first promise
// }




// ticket().then((m)=>                   // async function always called by using then. because they returns promises
// {
//     console.log(`Person 3: show ${m}`)
// })



// console.log('Person 4: show ticket')
// console.log('Person 5: show ticket')


// Async function with promise.all//------------
//suppose we have multiple promises which are not depends on each other, we can execute them at once using promise.all in async function





// console.log('Person 1: show ticket')
// console.log('Person 2: show ticket')

// let getTicket=async()=>
// {
//     let wifeBringBackTicket=new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('ticket')
//         },2000)
//     })

// let getPopcorn=new Promise((resolve,reject)=>
// {
//     resolve('popcorn')
// })

// let getCandy=new Promise((resolve,reject)=>
// {
//     resolve('candy')
// })

// let getCoke=new Promise((resolve,reject)=>
// {
//     resolve('coca-cola')
// })


// let ticket= await wifeBringBackTicket;  // first wife will get ticket, then they will move ahead to take popcorn and coke

// let [pop,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke])   // promise.all return array therefor we are string each element of array with name pop, candy and coke

// console.log(`${pop} ${candy} ${coke}`)

// return ticket                            // at last tcket wiil return and both will go to watchb movie

// }

// getTicket().then((m)=>
// {
//     console.log(`Person : 3 show ${m}`)
// })





// console.log('Person 4: show ticket')
// console.log('Person 5: show ticket')


//catching reject promises in async function//-------------------------------




// console.log('Person 1: show ticket')
// console.log('Person 2: show ticket')

// let movie=async()=>
// {
//     let getTicket=new Promise((resolve,reject)=>
//     {
//         reject('sad face')
//     })

// let ticket;
// try{                                    // try with execute if promise will resolve
//     ticket =await getTicket;
// }
// catch(e)                                //catch will execute if promise get rejected
// {
//     ticket='sad face'
// }

// return ticket

// }
// movie().then((m)=>console.log(`Person 3: show ${m}`))

// // what ever will be the output, it will printed through then.


// console.log('Person 4: show ticket')
// console.log('Person 5: show ticket')


//--//-----------------------








let posts=[{title:'user 1',time: new Date().getTime()},
{title:'user 2',time: new Date().getTime()}];


// making function having promise inside to craete post and print in console
function createPost(post)
{
    
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            posts.push(post)
                                                                                                                                                
             //resolve([...posts])
             let x=[];                          // here if i donot store posts in x[] , it will only print 2 objectets and not this newly created object
                for(let i=0;i<posts.length;i++) // because below down we are also using delete function and it will delete object from posts refrence
                {                                // therefor storing values in x[]
                    x.push(posts[i])
                }
             resolve(x)
        },1000)
        
    })
}

// creating deletePost function having promise inside
function deletePost()
{
    return new Promise((resolve,reject)=>
    {
        
        if(posts.length>0)
        {
            resolve(posts.pop())
        }
        else
        {
            reject('array is empty')
        }
        reject('array is empty')
    },2000)
}


function getPost()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            if(posts.length>0)
            {
                resolve(posts)
            }
            else
            {
                reject()
            }
       // reject('not getting post')
        },1000)
        
    })
}

// creating async function
//await only works inside the async function
// async function always return promises
// always use try{} and catch(e){} inside async await to catch rejections
// try is for resolve
//catch is for rejection

let modifyPost=async()=>
{
try{
    let create=await createPost({title:'user 3',time: new Date().getTime()});
    create=await createPost({title:'user 4',time: new Date().getTime()});
    console.log(create)

    let deletepost =await deletePost()

    let getpost=await getPost()
    console.log(getpost)
}
catch(e)
{
    console.log(e)
}

}

modifyPost()  // don't forget to callb the function