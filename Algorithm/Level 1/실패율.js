function solution(N, stages) {
    let failureRate = {};
    // 실패율 구하기
    for(let i = 1; i<=N; i++) {
        let current = i;
        let failCount = 0; // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수
        let playerCount = 0; // 스테이지에 도달한 플레이어 수
        stages.forEach(stage => {
            if(current <= stage) playerCount +=1;
            if(current + 1 > stage && stage >= current) failCount +=1;
        })
        failureRate[i] = failCount/playerCount;
    }
    // 실패율에 따른 스테이지 정렬
    let failRateStage = Object.keys(failureRate);
    failRateStage.sort((a,b) => failureRate[b] - failureRate[a])
    let answer = failRateStage.map(key => Number(key))
    return answer;
}
