### Q1: let, var, and const me difference?

|var                             |let                                               |const                                                   |
|--------------------------------|--------------------------------------------------|--------------------------------------------------------|
|Function scoped                 |Block scoped ({ } ke andar ka scope)              |Block scoped                                            |
|Reassigned allowed              |Reassign allowed                                  |Value cannot be reassigned                              |
|Redeclare allowed               |Redeclare not allowed                             |But objects can be changed internally                   |
|Hoisted with value = undefined  |Hoisted but not initialized (Temporal Dead Zone)  |`const user = {name: "Abhi"};user.name = "Raj"; allowed`|
|Leak ho sakta hai (not safe)    |                                                  |                                                        |




### Q2: Output kya hoga?

`console.log(typeof null)// objects`

`console.log(typeof undefined);//undefined`

`console.log("5" - 1); // 4`  ***converts to number and subtracts***

`console.log("5" + 1); // "51"` ***(string concatenation) converts to string and joins***

### Q4: Hoisting kya hota hai?
>*Hoisting means JS moves declarations to the top before execution.*

_example_

`console.log(a);  // undefined`

var a = 10;

<ins>JS internally behaves like:</ins>

**`var a;       // lifted up`**

`console.log(a);`

`a = 10;`


### Q5: Output: // undefined

`console.log(a);`

`var a = 10;`