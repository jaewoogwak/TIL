function solution(new_id) {
    var answer = '';
    var id = new_id;
    // level 1
    id = id.toLowerCase();
    // level 2
    var id_lev2 ="";
    const alphabet ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.";
    for(let i=0; i<id.length; i++) {
        if(alphabet.includes([id[i]])) {
            id_lev2 += id[i];
        }
    }
    id = id_lev2;

    // level 3
    var id_lev3 ="";
    var cnt =0;
    for(let i=0; i<id.length; i++) {
        if(id[i] == "." && id[i+1] == ".") {
            // nothing happend
        } else {
            id_lev3 += id[i];
        }
    }
    id = id_lev3;

    // level 4
    if(id[0] == ".") id = id.slice(1);
    if(id[id.length-1] == ".") id = id.slice(0, id.length-1)
    // level 5
    if(id.length == 0) {
        id += "a";
    }

    // level 6
    if(id.length >= 16) {
        id = id.slice(0, 15);
    }
    if(id[id.length-1] == ".") {
        id = id.slice(0, 14);
    }

    // level 7
    var tmp = id[id.length-1];
    if(id.length <= 2) {
        for(let i=0; i<4; i++) {
            id += tmp;
            if(id.length >= 3) break;
        }
    }
    answer =id
    return answer;
}
