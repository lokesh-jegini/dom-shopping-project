const collectdata=document.querySelector('#jegini');
collectdata.addEventListener('submit',(e)=>{
e.preventDefault();
 const data={};
 
 const jegini=document.querySelectorAll('input');
 jegini.forEach((input1)=>{
    data[input1.name]=input1.value;
 })
 console.log(data);
 
})