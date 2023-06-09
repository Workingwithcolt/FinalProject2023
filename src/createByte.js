const ethers = require('ethers')

async function createBytes(value){
    const utils = ethers.utils
    const inBytes = utils.formatBytes32String(value);
    return inBytes
}
