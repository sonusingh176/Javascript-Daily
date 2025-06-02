const user = {
    name: 'Sonu',
    greet() {
      console.log(this.name);
    }
  };
  
  setTimeout(user.greet, 1000);