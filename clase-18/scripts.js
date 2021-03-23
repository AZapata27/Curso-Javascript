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