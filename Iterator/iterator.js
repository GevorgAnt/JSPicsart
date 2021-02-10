let fibonacci = {
    [Symbol.iterator]() {
        let next = 1;
        let now = 0;
        console.log(now)
        console.log(next)
        return {
            next() {
                let val = next + now;
                now = next;
                next = val;
                return {
                    value: val
                }
            }

        }
    }
}


for (let value of fibonacci) {
    if (value > 25) {
        break;
    }
    console.log(value)
}