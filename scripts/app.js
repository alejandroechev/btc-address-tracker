const client = new BlockchainApiCLient();
load();

async function load() {
  const addressData = await client.getAddress('3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd');
  console.log(addressData);
}