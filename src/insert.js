/**
 * El HyperThreading es una tecnología que permite duplicar los hilos de procesamiento por núcleo.
 * La cache se encuentra representada como un array en la que la primera posición corresponde con 
 * la cache L2 y la última L3.
 */

db.d1.insertMany([
    {modelo:"AMD Ryzen Threadripper 3970X", core:32, HyperThreading:true, Ghz: {GhzBase:3.7, GhzMax:4.5}, Cache:[16,128], price:2000, dateOfRelased: new Date("2019-11") },
    {modelo:"AMD Ryzen 9 5950X", core:16, HyperThreading: true, Ghz: {GhzBase:3.4, GhzMax:4.9}, cache:[8,64], price:850, dateOfRelased: new Date("2020-10") },
    {modelo:"AMD Ryzen 9 5900X", core:12, HyperThreading: true, Ghz: {GhzBase:3.7, GhzMax:4.8}, cache:[8,64], price:570, dateOfRelased: new Date("2020-10") },
    {modelo:"AMD Ryzen 7 5800X", core:8, HyperThreading: true, Ghz: {GhzBase:3.8, GhzMax:4.7}, cache:[4,32], price:475, dateOfRelased: new Date("2020-10") },
    {modelo:"AMD Ryzen 5 5600X", core:6, HyperThreading: true, Ghz: {GhzBase:3.7, GhzMax:4.6}, cache:[3,32], price:300, dateOfRelased: new Date("2020-11") },
    {modelo:"AMD Ryzen 3 3200G", core:4, HyperThreading: false, Ghz: {GhzBase:3.6, GhzMax:4}, cache:[2,4], price:130, dateOfRelased: new Date("2019-07") },
    {modelo:"AMD Ryzen 5 3600", core:6, HyperThreading: true, Ghz: {GhzBase:3.6, GhzMax:4.2}, cache:[3,32], price:225, dateOfRelased: new Date("2019-07") },
    {modelo:"AMD Ryzen 5 3500X", core:6, HyperThreading: false, Ghz: {GhzBase:3.6, GhzMax:4.1}, cache:[3,32], price:160, dateOfRelased: new Date("2019-010") },
    {modelo:"AMD Ryzen 7 2700X", core:8, HyperThreading: true, Ghz: {GhzBase:3.7, GhzMax:4.3}, cache:[4,46], price:200, dateOfRelased: new Date("2018-05") },
    {modelo:"AMD Ryzen 7 3700X", core:8, HyperThreading: true, Ghz: {GhzBase:3.6, GhzMax:4.4}, cache:[4,32], price:320, dateOfRelased: new Date("2019-07") },

    {modelo:"Intel Xeon Gold 6148", core:20, HyperThreading: true, Ghz: {GhzBase:2.4, GhzMax:3.7}, cache:[20,27.5], price:3520, dateOfRelased: new Date("2017-04") },
    {modelo:"Intel Core Extreme i9-9980XE", core:18, HyperThreading: true, Ghz: {GhzBase:3.0, GhzMax:4.4}, cache:[18,24.75], price:1050, dateOfRelased: new Date("2018-12") },
    {modelo:"Intel Core i9-10900K", core:10, HyperThreading: true, Ghz: {GhzBase:3.7, GhzMax:5.3}, cache:[2.56,20], price:570, dateOfRelased: new Date("2020-05") },
    {modelo:"Intel Core i7-10700K", core:8, HyperThreading: true, Ghz: {GhzBase:3.8, GhzMax:5.1}, cache:[2,16], price:370, dateOfRelased: new Date("2020-05") },
    {modelo:"Intel Core i7-9700", core:8, HyperThreading: false, Ghz: {GhzBase:3.0, GhzMax:4.7}, cache:[2,12], price:275, dateOfRelased: new Date("2019-05") },
    {modelo:"Intel Core i5-10600K", core:6, HyperThreading: true, Ghz: {GhzBase:4.1, GhzMax:4.8}, cache:[1.5,12], price:250, dateOfRelased: new Date("2020-05") },
    {modelo:"Intel Core i3-10320", core:4, HyperThreading: true, Ghz: {GhzBase:3.8, GhzMax:4.6}, cache:[1,8], price:150, dateOfRelased: new Date("2020-05") } ,
    {modelo:"Intel Core i5-9400F", core:6, HyperThreading: false, Ghz: {GhzBase:2.9, GhzMax:4.1}, cache:[2,9], price:130, dateOfRelased: new Date("2019-01") } ,
    {modelo:"Intel Core i5-9600K", core:6, HyperThreading: false, Ghz: {GhzBase:3.7, GhzMax:4.6}, cache:[2,9], price:190, dateOfRelased: new Date("2018-010") } 

]);
