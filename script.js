const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const palindromeList = [];
const checkResult = () => {
    if (input.value === "") {
        alert("Please input a value");
    } else {
        const cleanedInput = input.value.toLowerCase().replace(/[^a-z0-9]/g, ''); // 
        const reversedInput = cleanedInput.split('').reverse().join('');
        if (cleanedInput === reversedInput) {
            result.textContent = `${input.value} is a palindrome`;
        } else {
            result.textContent = `${input.value} is not a palindrome`;
        }
    }
};

checkBtn.addEventListener("click", checkResult);

palindromeList.push("A", "eye", "race car", "A man, a plan, a canal. Panama", "never off or even", "my age is 0, 0 si ega ym.", '0_0 (: /-\ :) 0-0');
