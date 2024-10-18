export class StringCalculator {
    add = function (strNos: string) {

        const fNline = strNos.indexOf('\n'); 

        let customDelim = '';

        if(fNline !== -1){
          let fLine = strNos.substring(0,fNline);
    
          if(fLine.substring(0,2) === '//'){
            customDelim = fLine.substring(2);
            strNos = strNos.substring(fNline+1)
          }
          
        }
    
        if (!customDelim && /[\s,]{2,}/.test(strNos)) {
          throw new Error(
            "Invalid input: Consecutive spaces, new lines, or commas found."
          );
        }
    
        const delim = customDelim ? customDelim : /[\s,]+/;
    
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