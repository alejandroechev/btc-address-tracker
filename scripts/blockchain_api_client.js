const API_BASE_URL = 'https://api.blockcypher.com/v1/btc/main/';

class BlockchainApiCLient {
  async getAddress(address) {
    let response = await fetch(API_BASE_URL + 'addrs/' + address);
    let data = await response.json()
    return data;
  }

  async getTransaction(tx) {
    let response = await fetch(API_BASE_URL + 'txs/' + tx);
    let data = await response.json()
    return data;
  }
}