export interface EthersUtil{
    getBalance(address: string): Promise<String>
}