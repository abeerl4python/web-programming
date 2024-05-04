const Calculate=document.getElementById('Calculate');
const Totalcost=document.getElementById('Totalcost');

Calculate.addEventListener('click',()=>{
    const Costofpetrol = parseFloat(document.getElementById('Costofpetrol').value);
    const Literspurchased = parseFloat(document.getElementById('Literspurchased').value);

    const result=Costofpetrol * Literspurchased
    Totalcost.textContent = `Total Cost: $${result.toFixed(2)}`;
});
