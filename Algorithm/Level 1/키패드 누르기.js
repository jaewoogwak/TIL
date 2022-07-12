var keypad = [[1,2,3],[4,5,6],[7,8,9],[-1, 0, -1]];

function prevState(n) {
    for(let i=0; i<4; i++) {
        if(keypad[i].indexOf(n) != -1) {
            return [i, keypad[i].indexOf(n)]
        } 
    } 
}
function getDistance(left ,right ) {
    return (Math.abs(left[0] - right[0]) + Math.abs(left[1] - right[1]));
}

function solution(numbers, hand) {
    var len = numbers.length;
    var answer = '';
    var prevLeft =[3,0];
    var prevRight = [3,2];
    
    for(let i =0; i<len; i++) {
        if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
            // 왼손 엄지로만 누르는 경우 : 1,4,7
            answer += "L";
            prevLeft = prevState(numbers[i]);
        } else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
            // 오른손 엄지로만 누르는 경우 : 3,6,9
            answer += "R";
            prevRight = prevState(numbers[i]);
        } else {
            // 숫자가 2,5,8,0인 경우
            let key = prevState(numbers[i]); // 눌러야 하는 키의 좌표
            leftDistance = getDistance(prevRight, key); // key와 왼손 엄지간 거리
            rightDistance = getDistance(prevLeft, key); // key와 오른손 엄지간 거리
            if(leftDistance > rightDistance) {
                // 왼손 엄지가 더 가까울 경우
                answer += "L";
                prevLeft = prevState(numbers[i]);
            } else if(leftDistance < rightDistance) {
                // 오른손 엄지가 더 가까울 경우
                answer += "R";
                prevRight = prevState(numbers[i]);
            } else {
                // 거리가 같을 경우
                if(hand == "left") {
                    // 왼손잡이일 경우
                    answer += "L";
                    prevLeft = prevState(numbers[i]);
                } else {
                    // 오른손잡이일 경우
                    answer += "R";
                    prevRight = prevState(numbers[i]);
                }
            }
        }
    }
    return answer;
}
