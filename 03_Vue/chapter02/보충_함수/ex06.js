const person1 = {
  age: 10,
  grow: function () {
    this.age++;
    console.log(this.age);
  },
};

person1.grow();

const person2 = {
  age: 10,
  grow: () => {
    this.age++;
    console.log(this.age);
  },
};

person2.grow();
