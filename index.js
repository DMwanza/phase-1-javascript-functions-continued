// code your solution here
let activity="roller-skate"
function saturdayFun (activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(`This Saturday, I want to ${activity}!`)
saturdayFun("bathe my dog")


function mondayWork (activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(`This Monday, I will ${activity}.`)
mondayWork("work from home")





function wrapAdjective(star="*"){
    return function result(adjective){
    return `You are ${star}${adjective}${star}!`
}
}
console.log(`You are${star} ${adjective} ${star}`)
wrapAdjective(star="||")
result(adjective="a dedicated programmer")
console.log(`You are ${star}${adjective} ${star}`)

