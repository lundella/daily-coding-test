// https://programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let line = '';
    let result = '';
    for(let stat = 0; stat<a; stat++) {
        line+= '*';
    }
    for(let row = 0; row < b; row++) {
        result += line+'\n';
    }
    console.log(result);
});