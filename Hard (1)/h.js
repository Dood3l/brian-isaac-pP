// Hard (1) ============================================
function brackets(str){
    if(str === "{}" || str === "[]" || str === "()"){
        return true;
    }
    else{
        return false;
    }

}
str = "{hello world}";
str = str.replace(/[a-z]/g,"");
str = str.replace(/\s+/g, '');
console.log(brackets(str));
