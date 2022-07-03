function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((num,idx) => {
        answer += signs[idx] ? num : -num;
    })
    return answer;
}
