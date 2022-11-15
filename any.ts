//the "any" value bypasses type protection and must be used cautiously 
//integrating existing javascript with typescript, every variable will default to any
//the same happens when a value comes from an Ajax response in JSON format

//any will let you assign any value or function

//the following code has a reponse of type "any" on the status 200 response
//we can mitigate this by casting, to stop the propogation of "any" in further code

function get(url: string) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("GET", url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);  // response is type any
            } else {
                reject(Error(req.statusText));
            }
        };
    });
}//if the function is not available, Node js will return undefined ie

let myAnyString: any = 123;
console.log(myAnyString.length);  //returns undefined

//avoiding any makes code more readable and easier to maintain
function configur(object: any, option: any) {
    // misleading and hard to configure
}
//should be 
interface Server {
    ipv4: string;
    ipv6: string;
    port: number;
    https: boolean;
}
interface ServerOptions {
    maxUser: number;
    maxConcurrentRequests: number;
}

function configure(object: Server, option: ServerOptions): Server {
    //...
    return object;
}
