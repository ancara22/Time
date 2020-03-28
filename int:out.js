//Time input output (input.value to input.value)
function timeIntOut(input,type,output) {
            
   if( type == 'getFullYear' ) {
   output.value = new Date(Date.parse(input)).getFullYear();
   } else if( type == 'getMonth' ) {
       output.value = new Date(Date.parse(input)).getMonth()+1;
   } else if( type == 'getDate' ) {
       output.value = new Date(Date.parse(input)).getDate();
   }  
}

//Example of use 
timeIntOut(time,'getFullYear',outputYear);