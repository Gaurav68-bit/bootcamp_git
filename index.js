function add(a){
    console.log(14/2);
    a();
    return function(){
        console.log("something");
    }
}
var res=add(function(a,b){
    console.log(a+b);
})

var resfinal=res();
console.log()
changed
