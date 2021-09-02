var $ = require("jquery");

$(document).ready(() => {

  $("#new").click(function(){
    console.log("new");
  });

  $("#open").click(function(){
    console.log("open");
    window.location = 'game/index.html';
  });

  $("#quit").click(function(){
    console.log("quit");
    window.location = '../index.html';
  });
  
});
