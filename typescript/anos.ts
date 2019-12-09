function anobi(ano:number):boolean{
    if (ano % 4 === 0 ) {
        if (ano % 100 === 0) {
            if (ano %400 === 0) {
                return true;

            }else{
                return false;

            }
        }else{
                return true;
            }
            
        }
        
    }
    

console.log("ano 2000"+anobi(2000));
console.log("ano 2000"+anobi(2004));
console.log("ano 2000"+anobi(1900));
console.log("ano 2000"+anobi(1820));
console.log("ano 2000"+anobi(2020));