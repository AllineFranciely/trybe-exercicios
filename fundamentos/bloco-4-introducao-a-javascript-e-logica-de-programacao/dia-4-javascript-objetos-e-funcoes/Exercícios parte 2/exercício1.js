
function verificaPalindrome(word){
    for(index=0; index < word.length; index+=1){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  console.log(verificaPalindrome('arara')); 
  console.log(verificaPalindrome('desenvolvimento')); 