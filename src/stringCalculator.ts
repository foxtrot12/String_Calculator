export class StringCalculator {
    add = function (strNos: string) {

        const delim =  /[\s,]+/;
    
        const numbers = strNos.split(delim).map((numStr) => {
          const num = Number(numStr);
          return num
        });
    
        let res = 0;
    
        numbers.forEach((num) => {
          res = num + res;
        }); 
        
        return res;
      }
}