let guest : string[] = [
    "urooj",
    "umair",
    "ali",
    "amal",
];
guest.push("bilal"); //at the end position
guest.unshift("miral", "sundas");//at the beggening position
guest.splice(guest.length / 2 , 0 , "alla dawas");//somewhere in middle (position , del count, string)
console.log(guest);