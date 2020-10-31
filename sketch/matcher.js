class Matcher {
    constructor() {
        this.patterns = [];
    }

    addPattern(pattern, neighbor, direction) {
        if (this.patterns[pattern] != undefined) {
            this.patterns[pattern][direction].push(neighbor);
        } else {
            this.patterns[pattern] = [[], [], [], []];
        }
    }

    match(my_states, neighbor_states) {

    }

    static tileCompatible(a, b, direction) {
        let A = 0;
        let B = 1;

        switch (direction) {
            case 0:
                A = [...a];
                A.pop();
                B = [...b];
                B.shift();
            case 1:
                A = [...a];
                A = transpose2DArray(A);
                A.pop();
                B = [...b];
                B = transpose2DArray(B);
                B.shift();
            case 2:
                A = [...a];
                A.shift();
                B = [...b];
                B.pop();
            case 3:
                A = [...a];
                A = transpose2DArray(A);
                A.pop();
                B = [...b];
                B = transpose2DArray(B);
                B.shift();
        }

        return arrayIsEqual(A, B);
    }
}

function transpose2DArray(arr) {
    let nArr = [];
    for (let i = 0; i < arr[0].length; i++) {
        nArr[i] = [];
        for (let j = 0; j < arr.length; j++) {
            nArr[i][j] = arr[j][i];
        }
    }
    return nArr;
}

function arrayIsEqual(a, b) {
    return JSON.stringify(a) == JSON.stringify(b);
}