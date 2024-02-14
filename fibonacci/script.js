arrayRec = []


const fibsRec = function(n) {

   

    if (n <= 1) {
        return [0, 1]
    }
    else {

        arrayRec = fibsRec(n - 1)
       
        arrayRec.push(arrayRec[arrayRec.length - 1] + arrayRec[arrayRec.length - 2])


        return arrayRec.slice(0, n)
    }
    
    
};

console.log(fibsRec(4))



const fibs = function(n) {

    n1 = 0

    n2 = 1

    array = [0, 1]

    for (let i = 0; i < n; i++) {
        n1 = n1 + n2
        console.log(n1)
        array.push(n1)

        n2 = n2 + n1
        console.log(n2)
        array.push(n2)


    }

    array.length = n
    console.log(array)

}

//console.log(fibs(8))