
//Buscaremos los procesadores con 8 o más núcleos pero con menos de 14, que tengan HyperThreading y una cache L3 mayor a 20MB.
//$elemMatch especifica criterios en los que solo uno de los elementos del Array debe cumplir.
db.d1.find({ $and:[ {core:{$gte:8}},{core:{$lt:16}},{HyperThreading:{$eq:true}},{cache:{$elemMatch:{ $gt:20}}} ] },{_id:0});
/*
{ "modelo" : "AMD Ryzen 9 5900X", "core" : 12, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.8 }, "cache" : [ 8, 64 ], "price" : 570, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "AMD Ryzen 7 5800X", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 4.7 }, "cache" : [ 4, 32 ], "price" : 475, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "AMD Ryzen 7 2700X", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.3 }, "cache" : [ 4, 46 ], "price" : 200, "dateOfRelased" : ISODate("2018-05-01T00:00:00Z") }
{ "modelo" : "AMD Ryzen 7 3700X", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.6, "GhzMax" : 4.4 }, "cache" : [ 4, 32 ], "price" : 320, "dateOfRelased" : ISODate("2019-07-01T00:00:00Z") }
*/ 

//Buscamos procesadores AMD con 4.8 GhzMax y superior o Intel con 5.0 GhzMax y superior que se haya lanzado en 2020.
db.d1.find({$or:[ {$and:[{ modelo:/Intel/},{"Ghz.GhzMax":{$gte:5.0}},{dateOfRelased:{$gte:new Date("2020-01")} } ]},{$and:[{ modelo:/AMD/},{"Ghz.GhzMax":{$gte:4.8}},{dateOfRelased:{$gte:new Date("2020-01")} } ]} ] },{_id:0});
/*
{ "modelo" : "AMD Ryzen 9 5950X", "core" : 16, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.4, "GhzMax" : 4.9 }, "cache" : [ 8, 64 ], "price" : 850, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "AMD Ryzen 9 5900X", "core" : 12, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.8 }, "cache" : [ 8, 64 ], "price" : 570, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "Intel Core i9-10900K", "core" : 10, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 5.3 }, "cache" : [ 2.56, 20 ], "price" : 570, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
{ "modelo" : "Intel Core i7-10700K", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 5.1 }, "cache" : [ 2, 16 ], "price" : 370, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
*/

//Buscamos que tenga 10 o más núcleos con un precio menor de 1000 ordenados por el precio de forma ascendente.
db.d1.find({$and:[{core:{$gte:10}},{price:{$lt:1000}}]},{_id:0}).sort({price:1});
/*
{ "modelo" : "AMD Ryzen 9 5900X", "core" : 12, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.8 }, "cache" : [ 8, 64 ], "price" : 570, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "Intel Core i9-10900K", "core" : 10, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 5.3 }, "cache" : [ 2.56, 20 ], "price" : 570, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
{ "modelo" : "AMD Ryzen 9 5950X", "core" : 16, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.4, "GhzMax" : 4.9 }, "cache" : [ 8, 64 ], "price" : 850, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
*/

//Buscamos un procesador con GhzBase superior a 3.7 y que tenga 4.8 GhzMax o menos  y con un precio inferior a 300.
db.d1.find({$and:[{"Ghz.GhzBase":{$gt:3.7}},{"Ghz.GhzMax":{$lte:4.8}},{price:{$lt:300}}] },{_id:0} );
/*
{ "modelo" : "Intel Core i5-10600K", "core" : 6, "HyperThreading" : true, "Ghz" : { "GhzBase" : 4.1, "GhzMax" : 4.8 }, "cache" : [ 1.5, 12 ], "price" : 250, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
{ "modelo" : "Intel Core i3-10320", "core" : 4, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 4.6 }, "cache" : [ 1, 8 ], "price" : 150, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
*/

//Buscamos un procesador de la gama media-alta, es decir que se corresponda con la nomenclatura Ryzen 7 o Core i7 según la marca, pero que además sean de 2020.
db.d1.find({ $and:[{$or:[{ modelo:/Ryzen 7/},{ modelo:/Core i7/}]},{dateOfRelased:{$gte:new Date("2020-01")} }] },{_id:0});
/*
{ "modelo" : "AMD Ryzen 7 5800X", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 4.7 }, "cache" : [ 4, 32 ], "price" : 475, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "Intel Core i7-10700K", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 5.1 }, "cache" : [ 2, 16 ], "price" : 370, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
*/

//Buscamos un procesador con más de 10 núcleos o con más de 5.0 GhzMax.
db.d1.find({$or:[{core:{$gt:10}},{"Ghz.GhzMax":{$gt:5.0}} ]},{_id:0});
/*
{ "modelo" : "AMD Ryzen Threadripper 3970X", "core" : 32, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.5 }, "Cache" : [ 16, 128 ], "price" : 2000, "dateOfRelased" : ISODate("2019-11-01T00:00:00Z") }
{ "modelo" : "AMD Ryzen 9 5950X", "core" : 16, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.4, "GhzMax" : 4.9 }, "cache" : [ 8, 64 ], "price" : 850, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "AMD Ryzen 9 5900X", "core" : 12, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.8 }, "cache" : [ 8, 64 ], "price" : 570, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "modelo" : "Intel Xeon Gold 6148", "core" : 20, "HyperThreading" : true, "Ghz" : { "GhzBase" : 2.4, "GhzMax" : 3.7 }, "cache" : [ 20, 27.5 ], "price" : 3520, "dateOfRelased" : ISODate("2017-04-01T00:00:00Z") }
{ "modelo" : "Intel Core Extreme i9-9980XE", "core" : 18, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3, "GhzMax" : 4.4 }, "cache" : [ 18, 24.75 ], "price" : 1050, "dateOfRelased" : ISODate("2018-12-01T00:00:00Z") }
{ "modelo" : "Intel Core i9-10900K", "core" : 10, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 5.3 }, "cache" : [ 2.56, 20 ], "price" : 570, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
{ "modelo" : "Intel Core i7-10700K", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 5.1 }, "cache" : [ 2, 16 ], "price" : 370, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
*/

//Buscamos los procesadores por un precio superior a 300, ordenados segun sus GhzMax de forma descendiente.
db.d1.find({price:{$gt:300}}).sort({"Ghz.GhzMax":-1},{_id:0});
/*
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958e3"), "modelo" : "Intel Core i9-10900K", "core" : 10, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 5.3 }, "cache" : [ 2.56, 20 ], "price" : 570, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958e4"), "modelo" : "Intel Core i7-10700K", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 5.1 }, "cache" : [ 2, 16 ], "price" : 370, "dateOfRelased" : ISODate("2020-05-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958d8"), "modelo" : "AMD Ryzen 9 5950X", "core" : 16, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.4, "GhzMax" : 4.9 }, "cache" : [ 8, 64 ], "price" : 850, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958d9"), "modelo" : "AMD Ryzen 9 5900X", "core" : 12, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.8 }, "cache" : [ 8, 64 ], "price" : 570, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958da"), "modelo" : "AMD Ryzen 7 5800X", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.8, "GhzMax" : 4.7 }, "cache" : [ 4, 32 ], "price" : 475, "dateOfRelased" : ISODate("2020-10-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958d7"), "modelo" : "AMD Ryzen Threadripper 3970X", "core" : 32, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.7, "GhzMax" : 4.5 }, "Cache" : [ 16, 128 ], "price" : 2000, "dateOfRelased" : ISODate("2019-11-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958e0"), "modelo" : "AMD Ryzen 7 3700X", "core" : 8, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3.6, "GhzMax" : 4.4 }, "cache" : [ 4, 32 ], "price" : 320, "dateOfRelased" : ISODate("2019-07-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958e2"), "modelo" : "Intel Core Extreme i9-9980XE", "core" : 18, "HyperThreading" : true, "Ghz" : { "GhzBase" : 3, "GhzMax" : 4.4 }, "cache" : [ 18, 24.75 ], "price" : 1050, "dateOfRelased" : ISODate("2018-12-01T00:00:00Z") }
{ "_id" : ObjectId("5fbbde27f579a3c5e3e958e1"), "modelo" : "Intel Xeon Gold 6148", "core" : 20, "HyperThreading" : true, "Ghz" : { "GhzBase" : 2.4, "GhzMax" : 3.7 }, "cache" : [ 20, 27.5 ], "price" : 3520, "dateOfRelased" : ISODate("2017-04-01T00:00:00Z") }
*/

