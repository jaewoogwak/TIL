function solution(n, lost, reserve) {
    const students = {}
    // 객체 세팅
    for(let i =1; i<= n; i++) {
        students[i] = 1;
    }
    lost.forEach(num => students[num] -=1);
    reserve.forEach(num => students[num] +=1);

    // 1번째 학생
    for(let i = 0; i<1; i++) {
        if(students[i] == 2 && students[i+1] == 0) {
            if(students[i+1] == 0) {
                students[i+1] += 1;
                students[i] -= 1;
            }
        }
    }
    // 2번째 ~ n번째 학생
    for(let i =1; i<=n; i++) {
        if(students[i] == 2 && (students[i-1] == 0 || students[i+1] == 0)) {
            if(students[i-1] == 0) {
                students[i-1] += 1;
                students[i] -= 1;
            } else if(students[i+1] == 0) {
                students[i+1] += 1;
                students[i] -= 1;
            }
        }
    }

    // 최댓값 구하기
    let answer =0;
    for(let i=1; i<=n; i++) {
        if(students[i] >= 1) answer+=1;
    }
    return answer;
}
