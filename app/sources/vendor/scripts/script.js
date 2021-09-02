var $ = require("jquery");

$(document).ready(() => {

  $("#new").click(function(){
    console.log("new");
    window.location = 'project.html';
  });

  $("#open").click(function(){
    console.log("open");
    window.location = 'game/index.html';
  });

  $("#quit").click(function(){
    console.log("quit");
    window.location = '../index.html';
  });

  $("#quit-project").click(function(){
    console.log("quit");
    window.location = 'index.html';
  });

  $("#build").click(function(){
    var location = window.location.pathname;
    var path = location.substring(0, location.lastIndexOf("/"));
    var directoryName = path.substring(path.lastIndexOf("/")+1);
    console.log(directoryName);
    WriteToFile(directoryName);
  });
  
});

function WriteToFile(d) {
  var fso = CreateObject("Scripting.FileSystemObject");  
  var s = fso.CreateTextFile(d+"game.js", True);
  s.writeline("HI");
  s.writeline("Bye");
  s.writeline("-----------------------------");
  s.Close();
}
