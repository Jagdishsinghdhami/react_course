// object literals :
// object : collection of properties and methods

const user = {
  username: "jagdish singh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("got user details form database.");
    console.log(`username : ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

// constructor function :

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
  return this;
}
// const userOne = new User("jagdish dhami", 89, true);
// const userTwo = new User("jazz dhami", 12, false);
// console.log("userOne => ", userOne);
// console.log("userTwo => ", userTwo);
