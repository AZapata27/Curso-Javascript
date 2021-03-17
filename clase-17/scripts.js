const button = document.getElementById('button');

const button = document.getElementById('button');

const button = document.getElementById('button');



button.addEventListener('click',()=>{


    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.ok ? Promise.resolve(res): Promise.reject(res))
    .then(res=>res.json())
    .then(res=>{

        const list = document.getElementById('list');

        const fragment = document.createDocumentFragment();

        for (const userInfo of res) {

            const listItem=  document.createElement('LI');
            listItem.textContent=  `${userInfo.id} - ${userInfo.name}`;

            fragment.appendChild(listItem);
            
        }

        
        list.appendChild(fragment);



    });
    const newPost={
        title: 'a new post',
     body: 'lorem ipsum asdgasdgasgagafhfhdgggggggggggggggggggfhdfghdgfh'
     , userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            body : JSON.stringify(newPost),
            headers:{
                        'Content-type': 'application/json'
            }

    }).then(res=>res.json())
    .then(data=>console.log(data));
    fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            body : JSON.stringify(newPost),
            headers:{
                        'Content-type': 'application/json'
            }

    }).then(res=>res.json())
    .then(data=>console.log(data));
});

