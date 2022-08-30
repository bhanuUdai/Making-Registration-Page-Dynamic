//AXIOS GLOBALS

//if you want to send header value with every request, then dont need to put custom header mannuanly in every request
// just use globals, it send header value with every request

axios.defaults.headers.common['authorization']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

// GET REQUEST
function getTodos() {

    //'get' is used to read (reterive) a representation of resourse
    // status : 200(if success)
    //404 not found (if fails)

    //axios({}) used to call axios, in which we use method 'get', 
    //url : of todos, 
    //params:{ _limit:5} used to apply limit on data now only 5 objects will be visible from data

    // first method of using axios

    // axios({
    //     method:'get',
    //     url:'https://jsonplaceholder.typicode.com/todos',
    //     params:{                 
    //         _limit:5
    //     }
    // })
    // .then((res)=>
    // {
    //     showOutput(res)
    // })
    // .catch((err)=>
    // {
    //     console.log(err)
    // })

    // second method of using axios

    // axios
    // .get('https://jsonplaceholder.typicode.com/todos',{params:{_limit:5}})

    //third method of using axios
    //here to apply limit in parameters of data, we just '?' after url address and '_limit=5'
    // after url in {} timeout means maximum time, if request take longer time that mentioned in it it will through an error
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{timeout:5})
    .then((res)=>
    {
        showOutput(res)
    })
    .catch((err)=>
    {
        console.log(err)
    })
  }
  
  // POST REQUEST
  function addTodo() {

    //'post' used to create new resourses, particularly subordinate of parent resourses
    //status:201(if success)

    //first way
    // in 'data' key value we insert data that we want to create

    // axios({
    //     method:'post',
    //     url:'https://jsonplaceholder.typicode.com/todos',
    //     data:
    //     {
    //         title:'New Todo',
    //         completed: false,
    //         name:'bhanu'
    //     }
    // })
    // .then((res)=>showOutput(res))
    // .catch((err)=>console.log(err))

    //second way
    // just put data to be insert after url

    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title:'Updated Todo',
        completed:false
    })
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
  }
  
  // PUT/PATCH REQUEST

  function updateTodo() {

    //'put' replace the data completely contained in particular ID
    // after url we use '/' and write 'id' of particular resourse that want to be replaced with new data
    // data is written in { } after url

    // axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    //     title:'Updated Todo',
    //     completed:true
    // })
    // .then((res)=>{showOutput(res)})
    // .catch((err)=>{console.log(err)})

    //'patch' is used to update data contained in paricular ID
    // after url we use '/' and write 'id' of particular resourse that want to be update with new data
    // after url we use '/' and write 'id' of particular resourse that want to be replaced with new data

    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
        title:'Updated Todo',
        completed:true
    })
    .then((res)=>{showOutput(res)})
    .catch((err)=>{console.log(err)})
  }
  
  // DELETE REQUEST

  function removeTodo() {
    
    //'delete' is used the particular resourse that contained given ID

   axios.delete('https://jsonplaceholder.typicode.com/todos/1')
   .then((res)=>showOutput(res))
   .catch((err)=>console.log(err))
  }
  
  // SIMULTANEOUS DATA

  // here we use axios.all([]), in which we call all axios promises, when they resolve, we get value
  //it is similar to promise.all

  function getData() {
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])

    //in first way, we can use indexes of array and console them if want data in console 
    // or used as arguments in function

    // .then((res)=>
    // {
    //   console.log(res[0]);
    //   console.log(res[1]);
    //   showOutput(res[1])
    // })

    // in second method we use axios.spread((para1,para2)) and pass parameters in it

    .then(axios.spread((todos,posts)=>
    {
      showOutput(todos);
      //showOutput(posts)
    }))
    .catch((err)=>
    {
      console.log(err)
    })
  }
  
  // CUSTOM HEADERS
  function customHeaders() {

    //Custom Headers allow us to add extra content to our HTTP requests and responses, which we can pass between the client and server

    let config={
      headers:{
        'content-type':'application/json',
        authorization :'token'
      }
    }

  // now this config is passed into the post after url

    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:'bhanu',
      completed:true
    },config)
    .then((res)=> 
    {
      showOutput(res)
    })
    .catch((err)=>
    {
      console.log(err)
    })
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
   let option={
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:{
      title:'hello world'
    },
    transformResponse:axios.defaults.transformResponse.concat(data=>
      {
        data.title=data.title.toUpperCase();
        return data
      })
   }

    axios(option).then((res)=>
    {
      showOutput(res)
    })
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios
    .get('https://jsonplaceholder.typicode.com/todoss?_limit=5',{
      validateStatus : function(status){
        return status<500;  // it will reject if status if greaterthen or equal to 500, means data will still shown on screen that will be empty and it will not run catch here
      }
    })  // write extra s in todos to make it wrong
    .then((res)=>
    {
        showOutput(res)
    })
    .catch((err)=>
    {
        if(err.response)
        {
          // if server responded with a status other then 200 range(i.e ok)

          console.log(err.response.status);
          console.log(err.response.headers);
          console.log(err.response.data)
        }
        
        if(err.response.status==404)
        {
          alert('Error : page not found')
        }

        else if(err.request)
        {
          // when request was made but no response
          console.log(err.request)
        }
        else
        {
          console.log(err.message)
        }

    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    let source=axios.CancelToken.source();

    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{
      cancelToken:source.token
    })
    .then((res)=>
    {
      showOutput(res)
    })
    .catch(thrown=>
      {
        if(axios.isCancel(thrown))
        {
          console.log('request cancelled',thrown.message)
        }
      })

      if(true)
      {
        source.cancel('request canceled!');
      }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES

  // for logging interceptor request and response we use this code

  axios.interceptors.request.use(
    config=>
    {
      console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
      return config;
    },
    error=>
    {
      return Promise.reject(error)
    }
  )
  
  // AXIOS INSTANCES

  let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
  });

  axiosInstance.get('/comments').then(res=>showOutput(res));
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);