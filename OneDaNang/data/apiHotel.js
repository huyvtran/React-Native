
var ApiHotel ={
    getData(){
        var url=`https://randomuser.me/api/?seed=%24%7Bseed%7D&page=%24%7Bpage%7D&results=2`;
        return fetch(url).then((res)=>res.json())
    }
};
module.exports = ApiHotel   ;