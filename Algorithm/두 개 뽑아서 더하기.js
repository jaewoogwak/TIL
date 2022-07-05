function solution(numbers) {
    var answer = [];
    numbers.forEach((num1, idx1) => {
        numbers.forEach((num2, idx2) => {
            if(idx1 !== idx2 && (!answer.includes(num1 + num2))) {
                answer = [...answer, num1 + num2];
            }
        })
    })
    answer.sort((a,b) => a - b);
    return answer;
}
