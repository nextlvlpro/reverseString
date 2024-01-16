let input = 'the big cat jumped over dog'

function genrateOutput (input) {
    
    //Convert String to array
    let data = [...input].join("").split(' ')
    
    // Empty string where results will be stored.
    let output = ''

    //starting and ending points for loop
    let l = 0
    let r = data.length-1
    
    // This will loop in a way that first and last elemnt of string will be stored and it will move to the next element
    while (l<=r) {

        output += data[r].split('').reverse().join('')+ " "
        r--
        if(l<r) {
            output += data[l] .split('').reverse().join('')+ " "
         l++
        }
        
        
    }  

    // Output is printed on screen on Web Browser. Remove this line if you want to print results directly on terminal in node js.
    document.querySelector(".output").innerText +=` "${output}"`

    console.log(output);
    
}

genrateOutput(input)

