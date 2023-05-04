function oddOccurrences(string) {

    let words = new Map;

    let array = string.split(' ').map((a) => a.toLowerCase());
   
    for (const w of array) {
        let arr = []
         if (!words.has(w)){
            arr.push(w);  
            words.set(w, arr) 
        } else {
            arr.push(w)
            words.set(w, arr) 
        }  
               
    }
    console.table(words)


}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')