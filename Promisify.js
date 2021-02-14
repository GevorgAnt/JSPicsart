import {print}  from "./esim.js"
const myPromisify = (myFunc) => (...args) => {
        return new Promise((resolve, reject) => {
            myFunc(...args,(err,...data)=> {
                if (err) {

                    return reject(err)

                }
                return resolve(data)
            })


        })
    }



const posNumSum = (num1, num2, myCallback) => {

    if (num1<0 || num2<0) {
        return myCallback(("Negative number"));
    }

    return myCallback( null,num1+num2, "sum is "+(num1+num2));
}

const getSumPromise = myPromisify(posNumSum)

getSumPromise( 5,5).then(arraylist=>(console.log(arraylist))).catch(err=>{console.log(err)});

print();