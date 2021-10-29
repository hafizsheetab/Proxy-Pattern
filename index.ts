import { CachedEthersUtil } from "./CachedEthersUtil";
import { EthersUtilClass } from "./EthersUtilClass";

let ethersUtil = new EthersUtilClass("https://rpc.goerli.mudit.blog")
let ethersUtilProxy = new CachedEthersUtil(ethersUtil)

async function printBalance(address: string){
    let balance = await ethersUtilProxy.getBalance(address)
    console.log(balance)
}

printBalance("0x96Ee1DF2ddC1D2de211eD47fbe6A62cA1F7471d6") // Not Cached
printBalance("0x41a4565dC249bf34bDDd446A9abEfE86533DB48c") // Cached
