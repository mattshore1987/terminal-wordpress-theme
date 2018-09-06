var $history = new Array();

var $startup = [
  'Starting Matt Shore (MS)-DOS...',
  '...', 
	'Welcome to mattshore.co.uk, please feel free to say hi!',
	'If you need any help... just type help. d(-_-)b ',
	'Enjoy', 
  ''
];

var $commands = [
  {cmd: 'help',   hidden: false,    type: 'function',   output: show_help,              help: 'Lists all available commands'},
  {cmd: 'cls',    hidden: false,    type: 'function',   output: clear_screen,           help: 'Clear the screen'},
  {cmd: 'dir',    hidden: false,    type: 'print',      output: 'About.pdf',                     help: 'Show directories or files in current directory'},
  {cmd: 'date',   hidden: false,    type: 'function',   output: show_date,              help: 'Display the current date and time'},
  {cmd: 'about',   hidden: false,    type: 'print',      output: "I'm Matt Shore, I take your business strategy and align technology to meet its goals.",                     help: 'Learn a little about me'},
  {cmd: 'skills',   hidden: false,    type: 'print',      output: "<b>Technical</b><br>VMWare, Veeam, Docker, Networking, Security, Microsoft Server & Desktop, SQL, Exchange/ Oﬃce 365, Sharepoint, CRM, SAP, Linux, Mac. Desktop Applications, LAMP, Cloud, Data Centre, Remote Monitoring and Proactive Support, Infrastructure – Server, Storage, Network<p><b>Commercial</b><br>Negotiation, Strategy, Planning, Automation, Process, ITIL, Business Continuity, Pricing Strategy, Go To Market Strategy, Presenting, GDPR",                     help: 'list some of my skills'},
  {cmd: 'hi',     hidden: false,     type: 'function',      output: show_hi,               help: 'Why not say hi! Your here anyway'},
  {cmd: 'quote',   hidden: false,     type: 'function',  output: quote,                   help: 'Quote of the day...'},
  {cmd: 'cd',    hidden: false,    type: 'print',      output: 'Permission Denied',                     help: 'Change Directory'}
];

function hidedefault() {
  $('.defaulttext').hide();
}

function showdefault() {
  $('.defaulttext').show();
}

function find_tab_completed_command(command) {
  if (!command)
    return command;

  /* Loop through the list of commands and find if there is enough information for a single match */
  var results = [];
  for (var i = 0; i < $commands.length; i ++) {
    cmd = $commands[i];
    if (cmd.cmd.startsWith(command) && cmd.hidden == false) {
      results.push(cmd.cmd);
    }
  }

  return {command: command, results: results};
}

function clear_screen(parameters) {
  $line=0;
  $('.line').remove();
  $('.commandline').remove();
  return '';
}

function print_parameters(parameters) {
  return parameters.join("&#09;");
}

function show_help(parameters) {
  if (parameters.length == 0) {
    // Show all commands
    var print = '';
    for (var i = 0; i < $commands.length; i ++) {
      cmd = $commands[i];
      if (cmd.hidden == false) {
        print += cmd.cmd + ' - ' + cmd.help + "&#09;<br>";
      }
    }
    return print;
  }

  var help_command = parameters[0];
  for (var i = 0; i < $commands.length; i ++) {
    cmd = $commands[i];
    if (cmd.hidden == false && cmd.cmd == help_command) {
      return cmd.help;
    }
  }

  return "No help found for this command";
}

function show_hi(parameters) {
  var $sayhi = 
    '<br>' +
    '#####################################################################<br>' +
    '#################     #####     #####     ####### WELCOME ###########<br>' +
    '#################     #####     #####     ########## TO #############<br>' +
    '#################     #####     ################ MATT SHORES ########<br>' +
    '#################               #####     #######  WEBSITE ##########<br>' +
    '#################     #####     #####     ###########################<br>' +
    '#################     #####     #####     ###########################<br>' +
    '#################     #####     #####     ###########################<br>' +
    '#####################################################################<br>' +
    '<br>'
;
  return $sayhi;
}

function format_date(date) {
  var dayNames = [
    "Sun", "Mon", "Tue",
    "Wed", "Thu", "Fri", "Sat"
  ];

  var dayIndex = date.getDay();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  return dayNames[dayIndex] + ' ' + day + '/' + month + '/' + year;
}

function show_date(parameters) {
  var date = new Date();
  return "Current date is " + format_date(date);
}

function quote() {
  var quotes = new Array();
  quotes[0] = "You are who you are and you are someone else...";
  quotes[1] = "Just because you've got it, you don't have to flaunt it with a endless string of famous men...";
  quotes[2] = "Rings round his eyes, tracks down his arms, his fans are confused and his friends are alarmed...";
  quotes[3] = "Someone might try and burn it down and you will have to put the fire out...";
  quotes[4] = "The mind and the brain are not quite the same but they both want out of this place...";
  var rand = Math.floor(Math.random()*quotes.length);
  return quotes[rand];

}

function outputText(outputText) {
  $('#defaultline').before('<div class="line" id="line'+$line+'"></div>');
  $('#line'+$line).html(outputText.replace(/ /g, '&nbsp;'));
  $('#commandcontainer').text("");
  $('#actualinput').val("");
  $line++;
  $('#actualinput').focus();
    $('#terminal').scrollTop($('#terminal')[0].scrollHeight);
}

function runcommand($command) {
  unnull();
  $command = $command.toLowerCase();

  $command2=$command;
  rehistory($command);
  $history[$z]=$command;
  $z++;
  $x=$z;
  // }
  $('#defaultline').before('<div class="commandline" id="commandline'+$line+'"><span class="defaulttext">C:\\></span>'+$command2+'</div>');

  var given_commands = $command.split(" ");
  var command = given_commands[0];
  var parameters = [];
  if (given_commands.length > 1) {
    parameters = given_commands.slice(1, given_commands.length);
  }

  var found_command = false;

  for (var i = 0; i < $commands.length; i ++) {
    cmd = $commands[i];
    if (cmd.cmd == command) {
      found_command = true;
      // Found a matching command, lets action it.
      if (cmd.type == 'function') {
        var fn = cmd.output;
        $html = fn(parameters);
      } else if (cmd.type == 'print') {
        $html = cmd.output;
      }
    }
  }

  if (!found_command) {
    $html="\'"+$command+"\' Is not a known Command. But that might change the next time you are here. Use '<b>help</b>' for the list of available commands";
  }

  outputText($html);
}

function unnull(){
  for($i=0;$i<$history.length;$i++){
    if($history[$i]=="" || $history[$i]==null || $history[$i]==undefined ){
      for($j=$i;$j<$history.length;$j++){
        $history[$j]=$history[$j+1];
      }
      $z--;
    }
  }
  $z=$history.length;
}

function rehistory($cmd){
  if($history.indexOf($cmd)>=0){
    for($i=$history.indexOf($cmd);$i<$history.length;$i++){
      $history[$i]=$history[$i+1];
    }
    $z--;
  }
} 


$(document).ready(function() {

  $('#introdiv').html('');

  $line=0;
  $z=0;
  $x=0;
  $('#actualinput').focus();
  hidedefault();
  $('.cursor').css('color','rgb(238, 238, 238)');

  setInterval(function(){
          blinkcursor();
        },560);

  function blinkcursor(){
    $bg=$('.cursor').css('color');
    if($bg=='rgb(238, 238, 238)'){
      
      $('.cursor').css('color','transparent');
    }
    else $('.cursor').css('color','rgb(238, 238, 238)');
  }

  var interval = setInterval(function(){
                              updateIntro();
                            }, 560);
  function updateIntro() {
    if ($line >= $startup.length) {
      clearInterval(interval);
      showdefault();
      return;
    }
    outputText($startup[$line]+"<br/>");
  }

  $(document).bind('keyup', function(e) {
    $existing=$('#commandcontainer').text();

    if(e.which==38){
      if($x>0){
        $('#actualinput').val($history[$x-1]);
        $('#commandcontainer').text($history[$x-1]);
        $x--;
        if($x<0)
          $x=0; 
      }
      if($x<0){
        return false;
      }
      
    }
    else if(e.which==40){
      if($x>=0){
        $('#commandcontainer').text($history[$x+1]);
        $('#actualinput').val($history[$x+1]);
        $x++;
      }
      if($x>$z){
        return false;
      }
    }
    if(e.which==13){
      runcommand($existing);
      $('#actualinput').focus();
    }
    else{
      $type=true;
    }
  });

  $(document).bind('keydown', function(e) {
    var existing = $('#commandcontainer').text();
    var code = e.keyCode || e.which;
    if (code == '9') {
      var results = find_tab_completed_command(existing);
      if (results.results.length > 1) {
        $('#defaultline').before('<div class="commandline" id="commandline'+$line+'"><span class="defaulttext">C:\\></span>'+results.command+'</div>');
        outputText(results.results.join("&#09;"));
      } else {
        $('#actualinput').val(results.command);
        if (results.results.length == 1) {
          $('#actualinput').val(results.results[0]);
        }
      }

      return false;
    }
  });

  $('#actualinput').keyup(function(e){
    if(e.which==8){
        $exist=$('#commandcontainer').text();
        /*delete pressed */
        e.preventDefault();
        /*alert('del');*/
        $c=$exist.length-1;
        $('#commandcontainer').text($exist.slice(0,$c));
    }
      else{
        /*alert("pressed : "+e.which);*/
      $('#commandcontainer').text($(this).val());
    }
  });

  $('#actualinput').click(function(){
    $('#actualinput').scrollTop($('#actualinput').height());
  });

  $(document).on("tap", function(e) {
    $('#actualinput').focus();
  });

  $(document).keydown(function(e) {
    $('#actualinput').focus();
  });  
});
