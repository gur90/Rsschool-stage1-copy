import * as noUiSlider from "../../node_modules/nouislider";
function check(): void
{
 const check=document.getElementsByTagName('input');
 for(let i=0;i<check.length;i++)
 {
  if(check[i].type=='checkbox')
  {
   check[i].checked=true;
  }
 }
}

function uncheck(): void
{
 const uncheck=document.getElementsByTagName('input');
 for(let i=0;i<uncheck.length;i++)
 {
  if(uncheck[i].type=='checkbox')
  {
   uncheck[i].checked=false;
  }
 }
}
let slider = document.getElementById('slider');

let slider=noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});