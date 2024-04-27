let searchID=document.getElementById('root')

let inp=document.getElementById('inp')

function searchPro(){
     console.log(inp.value);
}


searchPro()




let rootID=document.getElementById('root')

let div1=document.createElement('div')
div1.className="div1"


async function fetchData(){

     try {
          let res=await fetch('https://fakestoreapi.com/products')
          let filRes=await  res.json()
          console.log(filRes);
          
          filRes.forEach(element => {
               console.log(element);

               let div2=document.createElement('div')
               div2.className="div2"

               let img=document.createElement('img')
               img.src=element.image

               let title=document.createElement('h2')
               title.innerHTML=element.title

 
               let price=document.createElement('h3')
               price.innerHTML=`price : ${element.price}`
               
               div2.append(img,title,price)
               div1.append(div2)
               rootID.append(div1)


          });
     } catch (error) {
          console.log(error);
     }
}
fetchData()