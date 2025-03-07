const container = document.querySelector('.memory-container');
const message = document.querySelector('.message');
let coppieTrovate=0;

const cards = [
  './img/memory-1.jpg',
  './img/memory-2.jpg',
  './img/memory-3.jpg',
  './img/memory-4.jpg',
  './img/memory-5.jpg',
  './img/memory-6.jpg',
  './img/memory-7.jpg',
  './img/memory-8.jpg',
  './img/memory-1.jpg',
  './img/memory-2.jpg',
  './img/memory-3.jpg',
  './img/memory-4.jpg',
  './img/memory-5.jpg',
  './img/memory-6.jpg',
  './img/memory-7.jpg',
  './img/memory-8.jpg',
]

for(let i=0; i<16; i++){
  const box=document.createElement('div');
  box.classList.add('card');


  const imgBox = document.createElement('img');
  box.appendChild(imgBox);

  container.appendChild(box);
}

const allBoxes = document.querySelectorAll('.card');
const allImg = document.querySelectorAll('img');
console.log(allImg);
console.log(allBoxes.length);

setTimeout(function(){
  message.style.display = 'none';
  
  for(let i=0; i<allBoxes.length; i++){
    allBoxes[i].classList.add('active');
  }

  for(let i=0; i<allImg.length; i++){
    allImg[i].setAttribute('src',cards[i])
  }
  
}, 3000)


setTimeout(function(){
  for(let i=0; i<allBoxes.length;i++){
    allBoxes[i].classList.remove('active')
  }
}, 6000);

let counter = 0

// for(let i=0; i<allBoxes.length;i++){
//   allBoxes[i].addEventListener('click',function(){
//     this.classList.add('active');
//     counter++;
//     console.log(counter);
//     console.log(this.firstChild);

//     let src = this.firstChild.getAttribute('src');
//     let src2;
//     console.log(src);

//     // if(counter == 2){
//     //   src2 = this.firstChild.getAttribute('src');
      
//     // }
//     // console.log(src,src2)

//     if(!this.classList.contains('cliccato')){
//       this.classList.add("cliccato");
//       let src1 = this.firstChild.getAttribute("src");
//     }else if()

//   })
// }

let immaginiSelezionate=[];

for(let i=0; i<allBoxes.length; i++){
    allBoxes[i].addEventListener("click", function(e){
      console.log(e.target)
      let immSel=funzy(e.target);
      // if(immSel.length>=2){
      //   immSel=[]
      //   immSel=funzy(e.target)
      // }
      console.log(immSel) //???
      if(immSel.length>=2){
        for(let z=0; z<immSel.length-1; z++){
          for(let j=z+1; j<immSel.length; j++){
            console.log(immSel[z], immSel[j])
            if(immSel[z].src==immSel[j].src){
              console.log("uguali");
              coppieTrovate++
              immSel.splice(0,2)  //Rimuovo dall'array immSel 2 elementi, a partire dall'indice 0
            }else{
              setTimeout(function(){
                location.href=""
              }, 2000)
            }
          }
        }
      }

      
    })
}

function funzy(target){

  target.classList.add("cliccato");
  target.classList.add("active");
  immaginiSelezionate.push(target.firstChild); //Il primo figlio dell'elemento target viene inserito nell'array immaginiSelezionate
  
  return  immaginiSelezionate
}