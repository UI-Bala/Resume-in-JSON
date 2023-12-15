var iteObjs = [{
    "name" : "X", 
    "course"   : "B.E Computer Science Engineering",
    "duration" : "Four Years",
    "mail": "ui.bala@yahoo.com"
},
{
    "name" : "Y", 
    "course"   : "B.E Computer Science Engineering",
    "duration" : "Four Years",
    "mail": "ui.bala@yahoo.com"
}];
//for loop
for(var i = 0; i < iteObjs.length; i++) {
    var objIte = iteObjs[i];

    console.log(objIte.name);
    console.log(objIte.course);
    console.log(objIte.duration);
    console.log(objIte.mail);

}
//for Each
iteObjs.forEach(function(objIte) { console.log(objIte.duration); });

//for In
for (var key in iteObjs) {
if (iteObjs.hasOwnProperty(key)) {
  console.log(iteObjs[key].course);

 
}
}
//for Of
let text = "";
for (let x of iteObjs[key].name) {
 text += x; 
}
 console.log(text);
