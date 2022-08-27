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


console.log('Person 1: show ticket')
console.log('Person 2: show ticket')

let ticket=async()=>               // async( ) is used to describe function as async
{                                   // async function returns promises
    let wifeBringBackTicket=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve('ticket')

        },2000)
    })

    let getPopcorn=new Promise((resolve,reject)=>
    {
        resolve('popcorn')
    })
    
    let getButter=new Promise((resolve,reject)=>
    {
        resolve('butter')
    })

    let getColdDrink=new Promise((resolve,reject)=>
    {
        resolve('cold drink')
    })

    let tick= await wifeBringBackTicket;    // await only used inside async function, it will not outside async
                                            // it put holds the code below it , and execute onlyb after function containing promise describe by await get resolved
    console.log(`wife : i have ${tick}`);
    console.log('husband : we should go in');
    console.log('wife : i am hungry');

    

    let pop=await getPopcorn;
    console.log(`husband : i got ${pop}`);
    console.log('husband : we should go in');
    console.log('wife : i need butter');


    let butter=await getButter;
    console.log(`husband : i got ${butter}`);
    console.log('husband : we should go in');
    console.log('wife : i need something to drink');

    let drink=await getColdDrink
    console.log(`husband : i got ${drink}`);
    console.log('husband : we should go in');
    console.log('wife : yeah sure')

    return tick       // after console the code above it will return this 'tick' which contains result of first promise
}




ticket().then((m)=>                   // async function always called by using then. because they returns promises
{
    console.log(`Person 3: show ${m}`)
})



console.log('Person 4: show ticket')
console.log('Person 5: show ticket')