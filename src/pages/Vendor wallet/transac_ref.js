let s4 = () => {
    const answer = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return answer
  }

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear(); 

  export default function generate(acc){
    const acc2 = String(acc)
    return acc2.slice(0,4)+dd+yyyy+mm+s4()+s4();
  }