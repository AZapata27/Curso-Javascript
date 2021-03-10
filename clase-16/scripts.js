const button = document.getElementById('button');


button.addEventListener('click',()=>{

    let xhr;
    if(window.XMLHttpRequest){
         xhr = new XMLHttpRequest();

    }else{
        xhr= new ActiveXObject("Microsoft.XMLHTTP");
    }
    

    xhr.open('GET','https://jsonplaceholder.typicode.com/users');


    xhr.addEventListener('load', (data)=>{


        const jsonData = JSON.parse(data.target.response);
        console.log(jsonData);

        const list = document.getElementById('list');

        const fragment = document.createDocumentFragment();

        for (const userInfo of jsonData) {

            const listItem=  document.createElement('LI');
            listItem.textContent=  `${userInfo.id} - ${userInfo.name}`;

            fragment.appendChild(listItem);
            
        }

        

        list.appendChild(fragment);
    })

    xhr.send();
})