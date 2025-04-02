const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.onclick = function () {
  const text = input.value;
  checkPalindrome(text);
};

function checkPalindrome(text){
  if(text == ""){
    alert("Please input a value");
  }
 const cleaned = text.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const n = cleaned.length;
  for(let i = 0; i < n/2; i++){
    if(cleaned[i]!=cleaned[n-i-1]){
      result.innerText = text + " is not a palindrome";
      break;
    }
    else{
      result.innerText = text + " is a palindrome";
    }
  }
}

