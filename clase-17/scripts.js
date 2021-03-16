const button = document.getElementById('button');


button.addEventListener('click',()=>{


    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.ok ? Promise.resolve(res): Promise.reject(res))
    .then(res=>res.json())
    .then(res=>{
        



        
    });

});