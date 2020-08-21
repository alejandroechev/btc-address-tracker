const client = new BlockchainApiCLient();

document.addEventListener('paste', async (event) => {
  const address = (event.clipboardData || window.clipboardData).getData('text');
  const addressesList = document.getElementById("addresses");
  const addressElement = document.createElement("li");
  addressesList.appendChild(addressElement);
  addressElement.textContent = `${address}: loading...`;
  const addressData = await client.getAddress(address);
  addressElement.textContent = `${address}: ₿ ${addressData.final_balance / 10.0e7}`;
  console.log(addressData);
  event.preventDefault();
});
