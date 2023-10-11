let pf = document.getElementById("first");
let b = pf.innerHTML;
let fpp = 0;
let spp = 0;
let tpp = 0;
let fopp = 0;
let cPrice1 = 0;
let cPrice2 = 0;
let cPrice3 = 0;
let cPrice4 = 0;
let totalPrice = 0;
function work(number)
{
    product(number)
}

function product(num){
    let name= document.getElementById("pro"+num);
    if(num===1)
    {
        
        let show = document.getElementById("view1");
        show.style.display ="block";
        fpp++;
        let pname = document.getElementById("name"+num);
        pname.innerHTML=name.innerHTML;


        let catchPrice = document.getElementById("first");
        let value = catchPrice.getAttribute("price");
        let price = +value;

        cPrice1 = cPrice1+price;
        

        let pprice = document.getElementById("price"+num);
        pprice.innerHTML=cPrice1;

        let pquantity = document.getElementById("quantity"+num);
        pquantity.innerHTML=fpp;

        totalPrice = price+totalPrice;

        
    }
    if(num===2)
    {
                
        let show = document.getElementById("view"+num);
        show.style.display ="block";
        spp++;
        let pname = document.getElementById("name"+num);
        pname.innerHTML=name.innerHTML;


        let catchPrice = document.getElementById("second");
        let value = catchPrice.getAttribute("price");
        let price = +value;

        cPrice2 = cPrice2+price;
        

        let pprice = document.getElementById("price"+num);
        pprice.innerHTML=cPrice2;

        let pquantity = document.getElementById("quantity"+num);
        pquantity.innerHTML=spp;

        totalPrice = price+totalPrice;

    }
    if(num===3)
    {
                        
        let show = document.getElementById("view"+num);
        show.style.display ="block";
        tpp++;
        let pname = document.getElementById("name"+num);
        pname.innerHTML=name.innerHTML;


        let catchPrice = document.getElementById("third");
        let value = catchPrice.getAttribute("price");
        let price = +value;

        cPrice3 = cPrice3+price
        

        let pprice = document.getElementById("price"+num);
        pprice.innerHTML=cPrice3;

        let pquantity = document.getElementById("quantity"+num);
        pquantity.innerHTML=tpp;

        totalPrice = price+totalPrice;
    }
    if(num===4)
    {
                        
        let show = document.getElementById("view"+num);
        show.style.display ="block";
        fopp++;
        let pname = document.getElementById("name"+num);
        pname.innerHTML=name.innerHTML;


        let catchPrice = document.getElementById("fourth");
        let value = catchPrice.getAttribute("price");
        let price = +value;

        cPrice4 = cPrice4+price;
        

        let pprice = document.getElementById("price"+num);
        pprice.innerHTML=cPrice4;

        let pquantity = document.getElementById("quantity"+num);
        pquantity.innerHTML=fopp;


        totalPrice = price+totalPrice;
    }
document.getElementById("totalP").innerHTML="$"+totalPrice;

}


function remove(position){
    if(position===1){
        fpp = 0;

        totalPrice= totalPrice-cPrice1;
        cPrice1 = 0;

        document.getElementById("totalP").innerHTML="$"+totalPrice;

        let show = document.getElementById("view1");
        show.style.display ="none";
    }

    if(position===2){
        spp = 0;

        totalPrice= totalPrice-cPrice2;
        cPrice2 = 0;

        document.getElementById("totalP").innerHTML="$"+totalPrice;

        let show = document.getElementById("view2");
        show.style.display ="none";
    }

    if(position===3){
        tpp = 0;

        totalPrice= totalPrice-cPrice3;
        cPrice3 = 0;

        document.getElementById("totalP").innerHTML="$"+totalPrice;

        let show = document.getElementById("view3");
        show.style.display ="none";
    }

    if(position===4){
        fopp = 0;

        totalPrice= totalPrice-cPrice4;
        cPrice4 = 0;

        document.getElementById("totalP").innerHTML="$"+totalPrice;

        let show = document.getElementById("view4");
        show.style.display ="none";
    }
}