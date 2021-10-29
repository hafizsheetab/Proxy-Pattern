import {cache} from './cache'
import { EthersUtil } from './ethersUtil';
import { EthersUtilClass } from './EthersUtilClass';

export class CachedEthersUtil implements EthersUtil{
    private ethersUtil: EthersUtil;
    constructor(ethersUtil: EthersUtilClass){
        this.ethersUtil = ethersUtil
    }
    public async getBalance(address: string): Promise<String>{
        let obj = cache.find(obj => obj.address === address)
        if(!obj){
            return await this.ethersUtil.getBalance(address)
        }
        return obj.balance
    }
}