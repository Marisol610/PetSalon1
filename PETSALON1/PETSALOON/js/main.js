var salon={
    name:"The Fashion Pet",
    address:{
        street:"ave university",
        number:"2569"

    },
    hours:{
        open:"8:00 am",
        close:"8:00 pm" 
    },

pets:[
    {
    name:"Scooby",
    age:12,
    gender:"Male",
    type:"Dog",
    breed:"Dane",
    service:"Full Service",
    ownersName:"Shaggy",
    contactPhone:"354-848-0120"

    },
    {
    name:"Tweety",
    age:4,
    gender:"Female",
    type:"Bird",
    breed:"Canary",
    service:"Nails Cut",
    ownersName:"Steve",
    contactPhone:"354-375-8876"

    },
    {
    name:"Silvester",
    age:9,
    gender:"Male",
    type:"Cat",
    breed:"Mixed",
    service:"Hair Cut",
    ownersName:"Anna",
    contactPhone:"354-846-3531"
    
    },
    {
    name:"Simba",
    age:1,
    gender:"Male",
    type:"Tiger",
    breed:"WildCat",
    service:"Full Service",
    ownersName:"Joshua",
    contactPhone:"354-645-8765"
    
    },
    {
    name:"Snoopy",
    age:3,
    gender:"Male",
    type:"Dog",
    breed:"Dane",
    service:"Nail Cut",
    ownersName:"Danny",
    contactPhone:"354-098-7543"
    
    }
]
    
       
}

document.write("Pets registered: " + salon.pets.length + "<br>" + "<br>");
document.write("Pet names: " +  "<br>" + "1." + salon.pets[0].name + "<br>","2." + salon.pets[1].name + "<br>","3." + salon.pets[2].name + "br","4." + salon.pets[3].name + "<br>","5." + salon.pets[4].name + "<br>");



/* display at the bottom of the footer*/
text=
`${salon.name}, ${salon.address.street}, ${salon.address.number} <br>
It is open from ${salon.hours.open} to ${salon.hours.close}`;

document.getElementById("footer-info").innerHTML=text;

console.table(salon.pets);



