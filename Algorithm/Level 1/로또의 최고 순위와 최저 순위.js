function solution(lottos, win_nums) {
    lottos.sort();
    win_nums.sort();  
    
    var arr = lottos.filter(num => num!=0);
    var count = 0;
    for(let num of arr) {
        if(win_nums.includes(num)) {
            count += 1;
        }

    }
    var zero_count = 6 - arr.length;

    var high = 7 - (count + zero_count);
    if(high == 7) high = 6;
    var low = 7 - count;
    if(low == 7) low = 6;

    var answer = [high, low];
    return answer;
}