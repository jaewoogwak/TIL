function solution(n) {
    let answer = "";
    while(n >= 3) {
        remains = parseInt(n % 3);
        answer += remains;
        n = n / 3;
    }
    answer += parseInt(n);
    let j = 1;
    let sum = 0;
    for(let i =answer.length - 1; i>=0; i--) {
        sum += j * answer[i];
        j = j * 3;
    }
    return sum;
    
}
