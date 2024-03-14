//1
db.restaurants.find()
//2
db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//3
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//4
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1, "address.zipcode": 1})
//5
db.restaurants.find({borough : "Bronx"})
//6
db.restaurants.find({borough : "Bronx"}).limit(5)
//7
db.restaurants.find({borough : "Bronx"}).skip(5).limit(5)
//8
db.restaurants.find({"grades.score":{$gt:90}})
//9
db.restaurants.find({$and:[{"grades.score":{$gt:80}}, {"grades.score":{$lt:100}}]})
//10
db.restaurants.find({"address.coord": {$lt:-95.754168}})
//11
db.restaurants.find({$and:[{"grades.score":{$gt:80}}, {"grades.score":{$lt:100}}]})
//12
db.restaurants.find({cuisine:{$ne : "American"}, "address.coord": {$lt:-65.754168}, "grades.score":{$gt:80}})})
//13
db.restaurants.find({cuisine:{$ne : "American"}, borough:{$ne : "Brooklyn"}, "grades.grade": "A"}).sort({cuisine : -1})
//14
db.restaurants.find({name: /^Wil/}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//15
db.restaurants.find({name: /ces$/}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//16
db.restaurants.find({ name: /Reg/i}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//17
db.restaurants.find({$and:[{borough : "Bronx"}, {$or:[{cuisine: "American"},{cuisine: "Chinese"}]}]}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//18
db.restaurants.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//19
db.restaurants.find({borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//20
db.restaurants.find({"grades.score": {$not: {$gt:10} }}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//21
db.restaurants.find({$or:[{ cuisine:"Seafood", cuisine: {$nin: ["American", "Chinese"]}},{name: {$not:/^Wil/}}]}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
//22
db.restaurants.find({$and:[{"grades.grade":"A"}, {"grades.score":11},{"grades.date":{$eq:ISODate("2014-08-11T00:00:00Z")}}]}, {_id:0, restaurant_id:1, name:1, grades:1})
//25
db.restaurants.find({}).sort({name:1})
//26
db.restaurants.find({}).sort({name:-1})
//27
db.restaurants.find().sort({name:1, borough:-1})
//28
db.restaurants.find({"address.street":{$exists:"false"}})
//29
db.restaurants.find({"address.coord": {$type: "double"}})
//30
db.restaurants.find({"grades.score":{$mod:[7,0]}},{restaurant_id: 1, name: 1, grades : 1, _id:0})
//31
db.restaurants.find({name:/mon/i}, {name:1, borough:1, 'address.coord':1, cuisine:1, _id:0})
//32
db.restaurants.find({name:/^Mad/}, {name:1, borough:1, 'address.coord':1, cuisine:1, _id:0})
