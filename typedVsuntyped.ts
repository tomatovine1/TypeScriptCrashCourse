/* The Keyword declare before let, const, var lets te transpiler know that the variable is somewhere in the project
   this ambient declaration is usually defined in a file d.ts */

declare let variableDefinedSomewhereElse: number; 
let newVariable = variableDefinedSomewhereElse + 1; 

/* for people who use Jquery an ambient declaration will be added to the code to show its presense*/

declare let $: JQuery;
export default $

/* */

/*functions can also be declared ambiently */
declare function ambientfunction(i: number): void;

function myfunction(i:number){
    ambientfunction(i);
}

/* for a library that exists in Javascript but has not yet migrated to Typescricpt, you can define it in a d.ts
    if you dont migrate the definition file along with the javascript file, you can download the definition tpoye after you install the Javascript library */

    npm install --save apex
npm install --save-dev @types/apex

/* More on Definitly Typed https://github.com/DefinitelyTyped/DefinitelyTyped*/