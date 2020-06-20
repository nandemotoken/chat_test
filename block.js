window.onload = async () =>{
const portis = new Portis('5716c193-5951-43ca-9156-5d53a258cb7b', 'ropsten', { gasRelay: true });
const web3p = new Web3(portis.provider);
const Address =  "0x2Ddef8aB2d2f569ab67845075805e6725095e2BA";
// console.log(Address);
const account = await web3p.eth.getAccounts();
console.log(account);
mycontract = await new web3p.eth.Contract(ABI, Address);
mes = await mycontract.methods.balanceOf(account).call();
console.log(mes);  
}