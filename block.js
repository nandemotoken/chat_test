window.onload = () =>{
const portis = new Portis('5716c193-5951-43ca-9156-5d53a258cb7b', 'ropsten', { gasRelay: true });
const web3 = new Web3(portis.provider);
web3.eth.getAccounts((error, accounts) => {
    console.log(accounts);
  });
}