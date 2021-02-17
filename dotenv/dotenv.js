let fs = require('fs');

function config() {
    let val
    let kay
    const allData = fs.readFileSync('.env').toString()
    const rowSplit = allData.split("\n")

    for (let i = 0; i < rowSplit.length; i++) {
        const data = rowSplit[i].split("=")

        kay = data[0]

        val = rowSplit[i].slice(data[0].length - rowSplit[i].length+1)


        if (kay.startsWith("#"))
            return;

        process.env[kay]=val

    }

}
config()
exports.config=config