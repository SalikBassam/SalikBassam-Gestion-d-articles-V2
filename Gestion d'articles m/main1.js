let new_product = document.querySelector(".new");
let create_pd = document.querySelector(".article-inf");
let editt = document.querySelector(".article-inf-edit");
let closee = document.querySelector(".closee");
let closeee = document.querySelector(".closeee");
let dark = document.querySelector(".dark");
let submit = document.querySelector("#btn");
let submit2 = document.querySelector("#btn1");
let tst =document.querySelector("#add-pt");
let ext =document.querySelector(".ext");
//////////////////////////////
let Nom =document.querySelector("#Nom");
let Marque =document.querySelector("#Marque");
let prix =document.querySelector("#prix");
let date =document.querySelector("#date");
let type =document.querySelector("#type")
let prom =document.getElementsByName("prom")[0]
let prom1 =document.getElementsByName("prom")[1]

let sort =document.querySelector("#sorting");
let yes =document.querySelector(".re");
let noop =document.querySelector(".gr");
let dlCfm =document.querySelector(".dlt-btn");
let inf =document.querySelector(".inf");
let css =document.querySelector(".css");

let i = 0

i = localStorage.getItem("i")

class form{
    constructor(nom,marque,prix,date,type,promotion){
this.n = nom
this.m = marque
this.p = prix
this.d = date
this.t = type
this.pp = promotion
    }
}

//////////////////



new_product.onclick = function(){
    create_pd.style.display = "block"
    dark.style.display="block";
    document.querySelector("body").style.overflow="hidden"

    Nom.value =""
    Marque.value =""
    prix.value =""
    date.value =""
    type.value = "None"
}
closee.onclick = function() {
    create_pd.style.display="none";
    dark.style.display="none";
 document.querySelector("body").style.overflow="visible"

}
submit.onclick = function(){
  if (document.querySelector("#Nom").value ==="") {
        document.querySelector(".mis").innerHTML="Empty!"
    }else if(document.querySelector("#Marque").value ===""){
        document.querySelector(".mis1").innerHTML="Empty!"
    }else if(document.querySelector("#prix").value ===""){
        document.querySelector(".mis2").innerHTML="Empty!"
    }else if(document.querySelector("#date").value ===""){
        document.querySelector(".mis3").innerHTML="Choose a date!"
    }else if(document.querySelector("#type").value === "None"){
        document.querySelector(".mis4").innerHTML="Choose one!"
    }else if(!document.querySelector("#Nom11").checked && !document.querySelector("#Nom2").checked){
        document.querySelector(".mis5").innerHTML="Choose one!"
    }
    else{
        document.querySelector(".mis5").innerHTML=""
        document.querySelector(".mis4").innerHTML=""
        document.querySelector(".mis3").innerHTML=""
        document.querySelector(".mis2").innerHTML=""
        document.querySelector(".mis1").innerHTML=""
        document.querySelector(".mis").innerHTML=""
        ////////////////////
    

    create_pd.style.display = "none"
   //////////////////////////////////
//////////////////////////////
localStorage.setItem("i",+i+1)



const cree = document.createElement("div");
cree.className ="add";
cree.classList.add(`e${i++}`)
ext.appendChild(cree);
////////////////
const Nom_cree = document.createElement("h3");
const Marque_cree = document.createElement("h3");
const Prix_cree = document.createElement("h3");
const Date_cree = document.createElement("h3");
const Type_cree = document.createElement("h3");
const Promotion_cree = document.createElement("h3");
const di = document.createElement("div");
const delet = document.createElement("button");
const edit = document.createElement("button");
////////////////
/////////////////
cree.append(Nom_cree)
cree.append(Marque_cree)
cree.append(Prix_cree)
cree.append(Date_cree)
cree.append(Type_cree)
cree.append(Promotion_cree)
cree.append(di)
di.append(delet)
di.append(edit)

///////////////////////
const first_form = new form(Nom.value,Marque.value,prix.value,date.value,type.value,prom.value);
localStorage.setItem('Nom',first_form.n)
Nom_cree.innerHTML=`Nom : <span>${localStorage.getItem('Nom')}</span><hr>`;

localStorage.setItem('Marque',first_form.m)
Marque_cree.innerHTML=`Marque : <span>${localStorage.getItem('Marque')}</span><hr>`;

localStorage.setItem('Prix',first_form.p)
Prix_cree.innerHTML=`Prix : <span>${localStorage.getItem('Prix')}</span><hr>`;

localStorage.setItem('Date',first_form.d)
Date_cree.innerHTML=`Date : <span>${localStorage.getItem('Date')}</span><hr>`;

localStorage.setItem('Type',first_form.t)
Type_cree.innerHTML=`Type : <span>${localStorage.getItem('Type')}</span><hr>`;


if (prom.checked) {
    localStorage.setItem('Promotion',prom.value)
Promotion_cree.innerHTML=`Promotion : <span>${localStorage.getItem('Promotion')}</span><hr>`;
}else if(prom1.checked){
    localStorage.setItem('Promotion',prom1.value)
    Promotion_cree.innerHTML=`Promotion : <span>${localStorage.getItem('Promotion')}</span><hr>`;
}

/////////////////////


/////////////////
di.className="btns";
delet.className="delet";
edit.className="edit";
edit.setAttribute("onclick" , "edity(this)");


console.log(i)
   localStorage.setItem(`e${i-1}`,document.querySelector(`.e${i-1}`).outerHTML); 



 inf.style.display="block"
 dark.style.display="block";
 document.querySelector("body").style.overflow="hidden"

inf.innerHTML+=` <div class="kl">Nom : ${first_form.n} <br> Marque : ${first_form.m} <br> Prix : ${first_form.p} <br> Date : ${first_form.d} <br> Type : ${first_form.t} </div>`

inf.children[0].onclick = function(){
    inf.style.display="none"
    dark.style.display="none";
 document.querySelector("body").style.overflow="visible"

    console.log("test");
    location.reload()
}
}
}


for (let j = 0; j < 100; j++) {
    if (localStorage.getItem(`e${j-1}`)) {
        ext.innerHTML+=localStorage.getItem(`e${j-1}`)
    }
}

function edity(element){
    editt.style.display="block";
    dark.style.display="block";
 document.querySelector("body").style.overflow="hidden"


    let Nom1 =document.getElementById("Nom1");
    let Marque1 =document.querySelector("#Marque1");
    let prix1 =document.querySelector("#prix1");
    let date1 =document.querySelector("#date1");
    let type1 =document.querySelector("#type1")
    // let sort =document.querySelector("#sorting");
    /////////////////////


    Nom1.value = element.parentElement.parentElement.children[0].children[0].textContent
     Marque1.value = element.parentElement.parentElement.children[1].children[0].textContent;
    prix1.value= element.parentElement.parentElement.children[2].children[0].textContent;
    date1.value= element.parentElement.parentElement.children[3].children[0].textContent;
    type1.value= element.parentElement.parentElement.children[4].children[0].textContent;

    element.parentElement.parentElement.id="active" ;  


    closeee.onclick = function() {
        editt.style.display="none";
        dark.style.display="none";
 document.querySelector("body").style.overflow="visible"
        
        element.parentElement.parentElement.id="" ;  
    }
///////////////////////
    
}


submit2.onclick=function(){
    if (document.querySelector("#Nom1").value ==="") {
     document.querySelector(".mis6").innerHTML="Empty!"
 }else if(document.querySelector("#Marque1").value ===""){
     document.querySelector(".mis7").innerHTML="Empty!"
 }else if(document.querySelector("#prix1").value ===""){
     document.querySelector(".mis8").innerHTML="Empty!"
 }else if(document.querySelector("#date1").value ===""){
     document.querySelector(".mis9").innerHTML="Choose a date!"
 }else if(document.querySelector("#type1").value === "None"){
     document.querySelector(".mis10").innerHTML="Choose one!"
 }
else{
     document.querySelector(".mis11").innerHTML=""
     document.querySelector(".mis10").innerHTML=""
     document.querySelector(".mis9").innerHTML=""
     document.querySelector(".mis8").innerHTML=""
     document.querySelector(".mis7").innerHTML=""
     document.querySelector(".mis6").innerHTML=""
     //////////////////
localStorage.setItem("Nom",document.querySelector("#Nom1").value)
document.getElementById("active").children[0].children[0].innerHTML=document.querySelector("#Nom1").value  ;

localStorage.setItem("Marque",document.querySelector("#Marque1").value)
 document.getElementById("active").children[1].children[0].innerHTML = document.querySelector("#Marque1").value  ;

 localStorage.setItem("Prix",document.querySelector("#prix1").value)
 document.getElementById("active").children[2].children[0].innerHTML = document.querySelector("#prix1").value  ;

 
 localStorage.setItem("Date",document.querySelector("#date1").value)
 document.getElementById("active").children[3].children[0].innerHTML = document.querySelector("#date1").value  ;

 localStorage.setItem("Type",document.querySelector("#type1").value)
 document.getElementById("active").children[4].children[0].innerHTML = document.querySelector("#type1").value  ;
 if (prom.checked) {
     document.getElementById("active").children[5].children[0].innerHTML = document.querySelector("#non").value  ;
 }else if(prom1.checked){
     document.getElementById("active").children[5].children[0].innerHTML = document.querySelector("#oui").value  ;    
 }   
 document.querySelector("#active").id="";
 editt.style.display="none";
 dark.style.display="none";
 document.querySelector("body").style.overflow="visible"
 }}
 document.querySelector(".edit").parentElement.parentElement.children[0].children[0].innerHTML= localStorage.getItem("Nom")  ;
 document.querySelector(".edit").parentElement.parentElement.children[1].children[0].innerHTML= localStorage.getItem("Marque")  ;
 document.querySelector(".edit").parentElement.parentElement.children[2].children[0].innerHTML= localStorage.getItem("Prix")  ;
 document.querySelector(".edit").parentElement.parentElement.children[3].children[0].innerHTML= localStorage.getItem("Date")  ;
 document.querySelector(".edit").parentElement.parentElement.children[4].children[0].innerHTML= localStorage.getItem("Type")  ;



document.querySelectorAll(".delet").forEach((ele) => {
   
    ele.onclick = function(){
 dark.style.display="block";
 dlCfm.style.display="block"
 document.querySelector("body").style.overflow="hidden"

        yes.onclick=function(){
            let e = ele.parentElement.parentElement.classList[1]
            localStorage.removeItem(String(e));
            ele.parentElement.parentElement.remove()
            dark.style.display="none";
            dlCfm.style.display="none"
 document.querySelector("body").style.overflow="visible"

        }
        noop.onclick=function(){
            dark.style.display="none";
            dlCfm.style.display="none"
 document.querySelector("body").style.overflow="visible"
        }
      
    }
   
});

////



//      sort.onclick = function(){
// date.document.querySelector(".add")

//     }
      