
const homepage = document.querySelector("./home-page/");
const navbar = document.querySelector(".navbar");
const button = document.querySelector("button");
const menu = document.querySelector(".menu");

button.addEventListener("click",function() {
    if(menu.classlist.contains("menu")){
        menu.classlist.remove("menu");
        menu.classlist.add("show-menu");
    }else{
        menu.classlist.remove("show-menu");
        menu.classlist.add("menu");
    }
    });




//this code hidden navbar    
const option = document.querySelector(".option");
const optionlist = document.querySelector("./option-list/");

navbar.addEventListener("click",function(){
 const countainerHeight = linkcountainer.getBoundingClientRect().height;
 const linkHeight = link.getBoundingClientRect().height;
 if(countainerHeight == 0){
    linkcountainer.style.height = '${linkHeight}px';
 }else{
    linkcountainer.style.height = 0;
 }   
if(option.classList.contains("show-link")){
    option.classList.remove("show-link");
}else{
    option.classList.add("show-link");
}
});


//this code puting item using js
const item = [
    {   id: 1,
       titel:"item-1",
       imag:"./OM BANGALS/images/all-img/Screenshot_20230421_023551.png",
       category:"bangals",
       price:"400",
       desc:"bbkjohgwjgjhnjopk[nlrljnhrkghigieth9009j]",
    },
    {   id: 2,
       titel:"item-2",
       imag:"./OM BANGALS/images/all-img/Screenshot_20230421_101937.png",
       category:"bage",
       price:"200",
       desc:"lfnioerjgpjeghejf-ughofguj34k5jnymugjggrjf",
    }
   ];
   
   const box1=document.querySelector(".box-1");
   const fiterbtns=document.querySelector(".fiterbtns");
   console.log(filter);
   
   window.addEventListener("DOMContentLoaded",function(){
    displayMenuItem(menu);
    const categories = menu.reduce(
       function(value,item){
           if(!value.includes(item.categories)){
               value.push(item.categories);
           }
           return value;
       },
     ["all"]
   );
    const categorybtns = categories.map(function(category) {
       return`<button class="filter-btn" type="button"data-id=${category}>
               ${category}
               </button>`;
    })
   
    .join("");
     container.innerHTML = categorybtns;
   const filterbtns = container.querySelectorAll(".filter-btn");
   
       filterbtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
       const category = e.currentTarget.dataset.id;
       const menucatagory = menu.filter(function(menuItem){
           if(menuItem.category == category){
               return menuItem;
           }
       });
       if(category === "all"){
           displayMenuItem(menu);
       }else{
           displayMenuItem(menucatagory)
       }
    });
       });
   });
   function displayMenuItem(menuItem){
       let displayMenuItem =menuItem.map(function (item){
     
           return 
           `<articl class="menu-item">
           <img src=${item.img} class="photo" alt=${item.titel} />
      <div class="item-info">
           <header>
              <h4>${item.titel}</h4>
               <h4 class="price">${item.price}</h4>
          </header>
           <p class="item-text">
               ${item.desc}
          </p>
           </div>
           </artical>`;
       });
       displayMenu = displayMenu.join("");
       sectionCenter.innerHTML = displayMenu
   }
   
   function displayMenubutton(){
   const categories = menu.reduce(
       function(value,item){
           if(!value.includes(item.categories)){
               value.push(item.categories);
           }
           return value;
       },
     ["all"]
   );
    const categorybtns = categories.map(function(category){
       return 
       `<button class="filter-btn" type="button"data-id=${category}>
               ${category}
               </button>`;
    })
   
   
    .join("");
     container.innerHTML = categorybtns;
   const filterbtns = container.querySelectorAll(".filter-btn")
   
       filterbtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
       const category = e.currentTarget.dataset.id;
       const menucatagory = menu.filter(function(menuItem){
           if(menuItem.category == category){
               return menuItem;
           }
       });
       if(category === "all"){
           displayMenuItem(menu);
       }else{
           displayMenuItem(menucatagory)
       }
    });
   });
   
   }    
   
   

