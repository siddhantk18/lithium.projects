const today = new Date()
const day = today.getDate()        
const month = today.getMonth()    
const year = today.getFullYear()

console.log(day);
console.log(month);
console.log(year);

const getInfo={
    name:"Lithium",
    week:'W3D5',
    topic:'Todays Node js Topic -- How to create Module and Export it.',
}

function getBatchInfo(){
    console.log(`${getInfo.name} , ${getInfo.week} , ${getInfo.topic} `)
}

getBatchInfo()
