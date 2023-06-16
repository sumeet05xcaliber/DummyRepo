 const { readFileSync , writeFileSync }=require('fs')

 const first=readFileSync('./content/first.txt','utf-8')
 const second=readFileSync('./content/second.txt','utf-8')
//  console.log(first,second);
writeFileSync('./content/resultfile.txt',`this is a new file created with content: ${first} and ${second}`,{flag:'a'})