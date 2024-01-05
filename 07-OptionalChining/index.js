//Optional Chining
// obj.val?.prop
// obj.val?.[expr]
// obj.func?.(args)

const user = {
    name: "Alex",
    address: {
        location:"USA"
    }
};

const UserName = user.address?.location;

console.log( UserName );