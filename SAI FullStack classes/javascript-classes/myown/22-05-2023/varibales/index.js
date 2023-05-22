//3 variable key words present  (var, let, const)

//step-1--initilization
1)initilization --> var):- allow without assign the value to the variable var v ;
                    let):- allow without assign the value to the variable let k ;
					const):- will not allow without assign the value to the variable const j ;
                    

2)re-declaration (variable name will not repetate with in the same scope two time (if the same variable name we take with in the same scope it will through error , re-declaration --redeclaration means (use the same name))							
                        //re-declaration is not possible
						eg {
						let a=10; declaration 
						let a=20; re-declaration //same name
						}
						Uncaught SyntaxError: Identifier 'a' has already been declared
	3(var key words)					
						1)var):-//re-declaration is possible
						2)let):-////re-declaration is not possible
						3)const:-////re-declaration is not possible.
     
3)parent object of docuemnt -window
                            var):- var stores window object.
						    let):- let will not stores window object.
							const):- const will not stores window object.

//scopes (global scope, local scope ( or function scope))
//function or local scope
function hello() {
    var v1=10;
    let c1=30;
    const d1=50;
    console.log(v1);
     console.log(c1);
     console.log(d1);
}
let /var/const -->can be used only within the scope based on the declaration. (this act like local scope)

//block level scope
blockscope --> 
if(true) {
    var v1=10;
    let c1=30;
    const d1=50;
    console.log(v1);
     console.log(c1);
     console.log(d1);
}
condition level or block -->var)-var can get acessed on the ouside of the block or scope
                            let)-let can not acessed on the ouside of the block or scope
							const)-let can not acessed on the ouside of the block or scope

//Local scope vs global scope
//local vs gobal scope
//block scope
let c1=100
if(true) {
    var v1=10;
    let c1=30;
    const d1=50;
    console.log(v1);
     console.log(c1);
     console.log(d1);
}

//function scope
let c1=100
function hello() {
    var v1=10;
    let c1=30;
    const d1=50;
    console.log(v1);
     console.log(c1);
     console.log(d1);
}
global have higher priority c=100 (output)
when we use const and when we use let
if we want to create a empty variable then we can initilize a values we go for the (let key word)
if we want to create a  variable with a values we go for the (const keyword)
//let (if we want to assign different type of data based on our requirement (like number,string,..)
 let a;
 console.log(a)
//const  (if we know which type of data assign to the varibale we for the const key word)
const b=[]
console.log(b)
