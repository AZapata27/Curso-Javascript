const getName = async () => {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver("Dorian");
    }, 1500);
  });
};



const sayHello=  async ()=>{

    const name = await getName()
    return `Hello ${name}`
}



sayHello().then(res=>console.log(res))




async function funcionAsyncronadDeclarada (value){

       try {

            console.log('inicio de async function');

            let obj = cuadradoPromise



           
       } catch (error) {
           
       }


}


/* 






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
 */
const button = document.getElementById('button');

button.addEventListener('click',()=>{
            axios({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users'



            }).then(res=>{
                
                
                const list = document.getElementById('list');

                const fragment = document.createDocumentFragment();
        
                for (const userInfo of res.data) {
        
                    const listItem=  document.createElement('LI');
                    listItem.textContent=  `${userInfo.id} - ${userInfo.name}`;
        
                    fragment.appendChild(listItem);
                    
                }
        
                
                list.appendChild(fragment);


            }).catch(err=>console.log(err))



})



button.addEventListener('click',()=>{
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users'
        , data: {

            title : ' a new post',
            body: ' lorem ipsun anfk.asdbajkbfgakjdbkafb',
            userId: 1            

        }


    }).then(res=>{
        
        
       console.log(res.data);


    }).catch(err=>console.log(err))



})