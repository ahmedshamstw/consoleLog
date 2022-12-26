console.log = text => {
  log.textContent += `${text}\r\n`;
};

const waitFor = duration => new Promise(r => setTimeout(r, duration));
let counter =1;
let x = async () => {
    while(1000000){
        await waitFor(1000);
        console.log(counter++);
    }
}
x();