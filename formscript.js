function addNewWork(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("we");
    let weaddbuttonOb=document.getElementById("addbtn");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function addAcadmic(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("aq");
    let weaddbuttonOb=document.getElementById("addbtn2");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function CVgenerator(){
    //first name
    let Firstname=document.getElementById("Firstname").value;
    let FirstnameT=document.getElementById("FirstnameT");
    FirstnameT.innerHTML=Firstname;
 //Last name
    let Lastname=document.getElementById("Lastname").value;
    let LastnameT=document.getElementById("LastnameT");
   LastnameT.innerHTML=Lastname;
   
  
   let  City=document.getElementById("City").value;
//    let CityT=document.getElementById("CityT");

 


  let    Country=document.getElementById("Country").value;
//   let CountryT=document.getElementById("CountryT");
  



     let PinCode2=document.getElementById("PinCode2").value;
     
//   let pincodeT=document.getElementById("pincodeT");


  pincodeT.innerHTML=addres;
let address_Section=document.getElementById("addressT");
if(City==""&& Country==""&& PinCode2==""){
    address_Section.innerHTML=City;
    pincodeT.innerHTML=City;
}

else if(City!=""&&Country==""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Country
else if(City==""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Pincode
else if(City==""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else{
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
    let ProfessionT=document.getElementById("ProfessionT");
    let Profession=document.getElementById("Proffesion").value;
    ProfessionT.innerHTML=Profession;

    // let addressT=document.getElementById("addressT");
    // let addressField=document.getElementById("addressField").value;
    // addressT.innerHTML=addressField;


    //facebook
  
    let PhoneT=document.getElementById("PhoneT");
let PhoneIN=document.getElementById("PhoneIN").value;
let PhoneNumberT=document.getElementById("PhoneNumberT");
    
let EmailIN=document.getElementById("EmailIN").value;
let EmailidT=document.getElementById("EmailidT");
let EmailT=document.getElementById("EmailT");
EmailT.innerHTML=EmailIN;
if(PhoneIN!=""){
    PhoneT.innerHTML="<b>Phone</b>";
    PhoneNumberT.innerHTML=PhoneIN;
    
        }
        else{
            PhoneT.innerHTML=PhoneIN;
    PhoneNumberT.innerHTML=PhoneIN;
        }

        if(EmailIN!=""){
            EmailT.innerHTML="<b>Email</b>";
            EmailidT.innerHTML=EmailIN;
            
                }
                else{
                    EmailT.innerHTML=EmailIN;
            EmailidT.innerHTML=EmailIN;
                }
                if(City==""&&EmailIN==""&&PhoneIN==""&&Country==""&&PinCode2==""){
                    let contactT=document.getElementById("contactT");
                    contactT.style.display="none";

                }
                else{
                    contactT.style.display="block";

                }
    // let facebookField=document.getElementById("facebookField").value;
    // let fbt=document.getElementById("fbt");
    // fbt.innerHTML=facebookField;
    // let InstagramField=document.getElementById("InstagramField").value;
    // let inst=document.getElementById("inst");
    // inst.innerHTML=facebookField;
    // let LinkdenField=document.getElementById("LinkdenField").value;
    // let linkdt=document.getElementById("linkdt");
    // linkdt.innerHTML=facebookField;
    let objectiveT=document.getElementById("objectiveT");
    let ObjectiveField=document.getElementById("ObjectiveField").value;
    objectiveT.innerHTML=ObjectiveField ;
    let  weField=document.getElementsByClassName("weField");
    let str=''
    for(let e of weField){
        str=str+ ` <li> ${e.value} </li>`
    }
    let weT=document.getElementById("weT");
    weT.innerHTML=str;


    let eqField =document.getElementsByClassName("eqField ");
    let str2=''
    for(let e of eqField ){
        str2=str2+ ` <li> ${e.value} </li>`
    }
    let AcadmicT=document.getElementById("AcadmicT");
    AcadmicT.innerHTML=str;
}

window.onload = function () {
    document.getElementById("cvggnbtn")
    .addEventListener("click", () => {
            const invoice = this.document.getElementById("cv-template");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: -1,
              filename:'myfile.pdf',
                image: { type: 'pdf', quality: 1},
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set({
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
              });
            html2pdf().from(invoice).save();
        })
}


function fainalize()
{
    document.getElementById("formid").style.display="none";
   
}