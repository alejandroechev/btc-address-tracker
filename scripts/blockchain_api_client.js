const API_BASE_URL = 'https://blockchain.info/';

class BlockchainApiCLient {
  async getAddress(address) {
    let response = await fetch(API_BASE_URL + 'rawaddr/' + address);
    let data = await response.json()
    return data;
  }

  async getTransaction(tx) {
    let response = await fetch(API_BASE_URL + 'rawtx/' + tx);
    let data = await response.json()
    return data;
  }
}