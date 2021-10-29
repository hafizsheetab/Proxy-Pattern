import { ethers } from "ethers";
import { EthersUtil } from "./ethersUtil";


export class EthersUtilClass implements EthersUtil{
    private rpcUrl
    private provider
    constructor(rpcUrl: string){
        this.rpcUrl = rpcUrl
        this.provider = new ethers.providers.JsonRpcProvider(this.rpcUrl)
    }
    
    public async getBalance(address: string): Promise<String> {
       
        let balance = await this.provider.getBalance(address)
        return balance.toString()
    }
}