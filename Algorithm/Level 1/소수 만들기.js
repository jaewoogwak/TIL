function checker(num) {
    if(num == 2) return true;
    for(let i =2; i< num; i++) {
        if(num % i == 0) return false;
    }
    return true;
}
function solution(nums) {
    var answer = 0;
    for(let i =0; i<nums.length; i++) {
        for(let j =0; j<nums.length; j++) {
            for(let k =0; k<nums.length; k++) {
                if(i != j && j != k && i != k && i < j && j < k && i <k) {
                    let num = nums[i] + nums[j] + nums[k];
                    if(checker(num)) answer+=1;
                }
            }
        }
    }
    return answer;
}
