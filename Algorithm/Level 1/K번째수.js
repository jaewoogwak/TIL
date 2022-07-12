function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        const [start, end, K] = command;
        let slicedArray = array.slice(start - 1, end);
        slicedArray.sort((a,b) => a - b);
        answer.push(slicedArray[K - 1]);
    })
    return answer;
}
