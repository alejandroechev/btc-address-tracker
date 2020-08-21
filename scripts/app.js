const client = new BlockchainApiCLient();

document.addEventListener('paste', async (event) => {
  const address = (event.clipboardData || window.clipboardData).getData('text');
  const addressesList = document.getElementById("addresses");
  const addressElement = document.createElement("li");
  addressesList.appendChild(addressElement);
  // addressElement.addEventListener('click' async (innerEvent) => {

  // }));
  addressElement.textContent = `${address}: loading...`;
  const addressData = await client.getAddress(address);
  addressElement.textContent = `${address}: ₿ ${addressData.final_balance / 10.0e7}`;
  console.log(addressData);
  const txList = document.getElementById("transactions");
  addressData.txrefs.forEach(async (tx) => {
    const txElement = document.createElement("li");
    txList.appendChild(txElement);
    txElement.textContent = `${tx.tx_hash}: loading`;
    const txData = await client.getTransaction(tx.tx_hash);
    txElement.textContent = `${tx.tx_hash}: ₿ ${txData.fees  / 10.0e7}`;
  });
  event.preventDefault();
});
