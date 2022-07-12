function solution(s) {
    let answer = "";
    let stack = [];
    for(let i =0; i<s.length; i++) {
        if(s[i] !== '1' && 
           s[i] !== '2' && 
           s[i] !== '3' && 
           s[i] !== '4' && 
           s[i] !== '5' && 
           s[i] !== '6' && 
           s[i] !== '7' && 
           s[i] !== '8' && 
           s[i] !== '9' && 
           s[i] !=='0') {
            stack.push(s[i]);
            let str = stack.join('');
            if(str == 'one') {
                answer += '1';
                stack = [];

            } else if(str == 'two') {
                answer +=  '2'
                stack = [];
            } else if(str == 'three') {
                answer += '3' 
                stack = [];
            } else if(str == 'four') {
                answer += '4'
                stack = [];
            } else if(str == 'five') {
                answer += '5'
                stack = [];
            } else if(str == 'six') {
                answer += '6'
                stack = [];
            } else if(str == 'seven') {
                answer += '7'
                stack = [];
            } else if(str == 'eight') {
                answer += '8'
                stack = [];
            } else if(str == 'nine') {
                answer += '9'
                stack = [];
            } else if(str == 'zero'){
                answer += '0'
                stack = [];
            }
        } else {
            answer += s[i];
        }
    }
    answer = Number(answer)
    return answer;
}
