var unmon=require("./lib/unmon.js");
var mds=require("./lib/plug/md.js");

unmon.launch({main:mds.spawnHandler(process.env.PWD+"/md/")});