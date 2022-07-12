function solution(d, budget) {
    d.sort((a,b) => a - b);
    let sum = 0;
    let count =0 ;
    for(let i =0; i<d.length; i++) {
        if(sum < budget && sum + d[i] <= budget) {
            sum += d[i];    
            count+=1;
        }
        else {
            break;
        }
    }
        
    let answer = count;
    return answer;
}
