export class StringCalculator {
    add = function (strNos: string) {

        const delim =  /[\s,]+/;
    
        const numbers = strNos.split(delim).map((numStr) => {
          const num = Number(numStr);

          if (isNaN(num)) throw new Error(
            `Invalid input: one of the elements - ${numStr} is not a valid number`
          );
    
          if (num < 0) throw new Error(
            `Invalid input: one of the elements - ${num} is a negative number`
          );

          return num
        });
    
        let res = 0;
    
        numbers.forEach((num) => {
          res = num + res;
        }); 
        
        return res;
      }
}