const ethers = require('ethers')

async function parseBytes(value){
    const utils = ethers.utils
    const name = utils.parseBytes32String(value);
    return name
}

parseBytes(process.argv.slice(2));