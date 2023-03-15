const checkTime=(req,res,next)=>{
const date=new Date();
const day=date.getDay();//0 is sunday, 6 is saturday//not .getDate
const hour=date.getHours();


if(day==0 || day==6 || hour <8 || hour>=17 ) {
    res.writeHeader(200,{"Content-Type":"text/plain"})
    res.write(`Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).`)
    res.end();
}
else next();
}
module.exports = checkTime;