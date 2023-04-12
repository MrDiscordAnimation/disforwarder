//Project                          ________|  _______   _______     |       |      /\       _______                           _______     
// |--------| ________   _______  |          |       | |       \    |       |     /  \     |       \    |--------|  _______  |       \    
// |       /  |   |   | |       | |________| |       | |_______/    |   _   |    /    \    |_______/    |       /  |       | |_______/     _____________
// |      /       |     |_______  |          |       | |       \    |  / \  |   /______\   |       \    |      /   |_______  |       \    |             |
// |     /        |             | |          |       | |        \   | /   \ |  /        \  |        \   |     /    |         |        \   |   By MDA    |
// |----/     |___|___| |_______|_|_         |_______| |        _\_ |/     \| /          \ |        _\_ |----/     |_______| |        _\_ |_____________|
const express = require('express');
const fs = require('fs');
const axios = require('axios');
const process = require('process');
const cors = require('cors');
const path = require('path');
//Import dotenv and use it
require('dotenv').config();

//MDA Encryption and Decryption Utilizes the SecuToken Protocol. Obfuscated for Security Reasoning
(function(_0x2d7952,_0x4e83a9){const _0x23f93b=_0x3d9c,_0x1bcd2a=_0x2d7952();while(!![]){try{const _0x408281=parseInt(_0x23f93b(0x14a))/0x1*(-parseInt(_0x23f93b(0x142))/0x2)+-parseInt(_0x23f93b(0x13f))/0x3*(parseInt(_0x23f93b(0x140))/0x4)+parseInt(_0x23f93b(0x148))/0x5+-parseInt(_0x23f93b(0x141))/0x6+-parseInt(_0x23f93b(0x13d))/0x7*(-parseInt(_0x23f93b(0x14e))/0x8)+-parseInt(_0x23f93b(0x147))/0x9*(-parseInt(_0x23f93b(0x14d))/0xa)+-parseInt(_0x23f93b(0x146))/0xb*(-parseInt(_0x23f93b(0x14f))/0xc);if(_0x408281===_0x4e83a9)break;else _0x1bcd2a['push'](_0x1bcd2a['shift']());}catch(_0x4d86ba){_0x1bcd2a['push'](_0x1bcd2a['shift']());}}}(_0x2d6e,0xed581));function _0x2d6e(){const _0x1b75e4=['987396RzEUqi','6811134AZlwYV','6606rdUtUR','split','indexOf','log','96107tIpaBn','117108sOpuZw','7127305PpAZWt','Password\x20letter\x20','305mAkiJN','\x20not\x20allowed.','length','270JyCukw','8816VkRcDg','3324jscjaN','abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ','966lMhstU','substring','15jwFVVb'];_0x2d6e=function(){return _0x1b75e4;};return _0x2d6e();}function decrypt(_0x591fef,_0x5f1843){const _0x2359ea=_0x3d9c,_0xbdbcd2=_0x5f1843[_0x2359ea(0x143)](''),_0x1a46bf=_0x591fef[_0x2359ea(0x143)]('');let _0x3b19b3=0x0,_0x4126bc='';for(let _0x25eccd=0x0;_0x25eccd<_0xbdbcd2[_0x2359ea(0x14c)];_0x25eccd++){const _0x2505ce=_0xbdbcd2[_0x25eccd],_0x44a701=getInvertedLetterFromAlphabetForLetter(_0x1a46bf[_0x3b19b3],_0x2505ce);if(!_0x44a701)return null;_0x4126bc+=_0x44a701,_0x3b19b3==_0x1a46bf[_0x2359ea(0x14c)]-0x1?_0x3b19b3=0x0:_0x3b19b3++;}return atob(_0x4126bc);}function _0x3d9c(_0x1e70b1,_0x3d76ad){const _0x2d6ed5=_0x2d6e();return _0x3d9c=function(_0x3d9ce6,_0x473013){_0x3d9ce6=_0x3d9ce6-0x13d;let _0x30409d=_0x2d6ed5[_0x3d9ce6];return _0x30409d;},_0x3d9c(_0x1e70b1,_0x3d76ad);}function getInvertedLetterFromAlphabetForLetter(_0x6bcea9,_0x3fcc6d){const _0x2a8634=_0x3d9c,_0x16399d=_0x2a8634(0x150),_0x8e2cee=_0x16399d[_0x2a8634(0x144)](_0x6bcea9);if(-0x1==_0x8e2cee)return console[_0x2a8634(0x145)](_0x2a8634(0x149)+_0x6bcea9+_0x2a8634(0x14b)),null;const _0x3573fa=(''+_0x16399d[_0x2a8634(0x13e)](_0x8e2cee,_0x16399d[_0x2a8634(0x14c)])+_0x16399d['substring'](0x0,_0x8e2cee))[_0x2a8634(0x144)](_0x3fcc6d);return-0x1==_0x3573fa?(console['log']('Password\x20letter\x20'+_0x6bcea9+_0x2a8634(0x14b)),null):_0x16399d['split']('')[_0x3573fa];}function encrypt(_0x5b3c6a,_0x3cbf0b){const _0x1a2cfe=_0x3d9c,_0x540f18=btoa(_0x3cbf0b)[_0x1a2cfe(0x143)](''),_0x298741=_0x5b3c6a[_0x1a2cfe(0x143)]('');let _0x23495a=0x0,_0x2935bb='';for(let _0x5e7bea=0x0;_0x5e7bea<_0x540f18['length'];_0x5e7bea++){const _0xfb1251=_0x540f18[_0x5e7bea],_0x4a8747=getLetterFromAlphabetForLetter(_0x298741[_0x23495a],_0xfb1251);if(!_0x4a8747)return null;_0x2935bb+=_0x4a8747,_0x23495a==_0x298741[_0x1a2cfe(0x14c)]-0x1?_0x23495a=0x0:_0x23495a++;}return _0x2935bb;}function getLetterFromAlphabetForLetter(_0x2ffa9f,_0x37d73b){const _0x3bb5f0=_0x3d9c,_0x25c758=_0x3bb5f0(0x150),_0x2114d4=_0x25c758[_0x3bb5f0(0x144)](_0x2ffa9f);if(-0x1==_0x2114d4)return console[_0x3bb5f0(0x145)](_0x3bb5f0(0x149)+_0x2ffa9f+_0x3bb5f0(0x14b)),null;const _0x5a6713=_0x25c758[_0x3bb5f0(0x144)](_0x37d73b);return-0x1==_0x5a6713?(console[_0x3bb5f0(0x145)](_0x3bb5f0(0x149)+_0x2ffa9f+_0x3bb5f0(0x14b)),null):(''+_0x25c758['substring'](_0x2114d4,_0x25c758[_0x3bb5f0(0x14c)])+_0x25c758[_0x3bb5f0(0x13e)](0x0,_0x2114d4))['split']('')[_0x5a6713];}

const app = express();
//Use CORS to allow all POST Origins
app.use(cors())
//Some other stuffs to make it work
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname))
//Does something if a GET Request goes to /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'))
})
//Import the current port from .env or use the default port
const PORT = process.env['port'] || 5000;
//Turns on the server.
app.listen(PORT, () => {
  console.log('Temporary Node.JS Server is activated by MDA. Hosted on Port: '+PORT);
});

app.get('/webhooks.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'))
})

app.post('/webhooks.html', (req, res) => {
//Spit it out in the console [Optional]
console.log(req.body)
//Gets every data from the sent body
let { webhook, typo, id, token } = req.body;
//If the Webhook and the type of data to be created or deleted is blank return 'Fill in the Blanks!' to the user/client.
if (!webhook || !typo) return res.send("Fill in the Blanks!");
//Else If the type of data is 'create' then does the function below:
else if (typo==="create"){
    //Create a variable called kay and stringify it into a JSON
  var kay = JSON.stringify({
    //Logs the Client IP Address and Encrypt it into the JSON (Optional)
    //"ip": encrypt(process.env['encryption_key'], req.headers['x-forwarded-for']),
    //Logs the Client Navigator/User Agent and Encrypt it into the JSON (Optional)
    //"ua": encrypt(process.env['encryption_key'], req.headers['user-agent']),
    //Encrypts the Webhook for Security Reasons (Required to make POST & GET requests)
    "url": encrypt(process.env['encryption_key'], webhook),
    //Don't remove this! This is part of the URL for the Webhook!
    "token": token
})
//Write or Create a JSON File to process.env['ws_folder']+'ID_HERE.json' and write the data from the variable kay if there's a problem it would spit out the error.
  fs.writeFile(process.env['ws_folder']+id+".json",kay,(err)=>{if(err)return console.log(err)});
  //Return the HTML Information to the Client.
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>MDA DisForwarder</title>
      <meta name="description" content="Look at all those webhooks that we made!" />
      <meta name="language" content="English" />
      <link href="https://mdapublishers.web.app/icons/terminal_mini.png" rel="icon">
      <meta property="og:image" content="https://mdapublishers.web.app/icons/terminal_mini.png" />
      <link href="./style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  <h1>MDA Webhooks/DisForwarders</h1>
  <p>Programmed by Mr Discord Animation</p><hr>
  <p>When creating your webhook you accept Discord Terms of Service.</p>
  <form action="./webhooks.html" method="post">
  <tt>You have successfully created a Webhook! Your Webhook Link: https://${req.headers['host']}/ws/${id}/${encrypt(process.env['encryption_key'], token)}</tt>
  <label for="web"><p>Insert your Link to your Discord Webhook below:</p></label>
  <input type="url" name="webhook" id="web" placeholder="Link to Webhook." required>
  <input type="text" name="typo" hidden value="create" required>
  <input type="text" name="id" hidden id="gen_id" required>
  <input type="text" name="token" hidden id="gen_token" required>
  <button type="submit">Create!</button>
  </form>
  <hr>
  <p>Need of Deleting your Webhook? Paste yours/or a spammer/scammer down below! And we'll take it from here!</p>
  <form action="./webhooks.html" method="post">
  <label for="webd"><p>Insert your Link to your DisForwarder Webhook below:</p></label>
  <input type="url" name="webhook" id="webd" placeholder="Link to Webhook.">
  <input type="text" name="typo" hidden value="delete" required>
  <button type="submit">Delete!</button>
  </form>
  <hr>
  <script>
  (function(){
      function genID(captcha_str,fin){
      captcha_str="1234567890-";
      fin=Math.floor(Math.random()*captcha_str.length);
      for(let i=0; i<9; i++){
          fin+=captcha_str[Math.floor(Math.random()* 8)];
      }
      //console.log(captcha_str.length);
      console.log("Generated Webhook ID: "+fin)
      return fin;
      }
      function genTOKEN(captcha_str,fin){
      captcha_str="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      fin=Math.floor(Math.random()*captcha_str.length);
      for(let i=0; i<9; i++){
          fin+=captcha_str[Math.floor(Math.random()* 8)];
      }
      //console.log(captcha_str.length);
      console.log("Generated Webhook Token: "+fin)
      return fin;
      }
      document.getElementById("gen_id").value=genID();
      document.getElementById("gen_token").value=genTOKEN();
  }())
  </script>
  <center><a href="https://discord.com/invite/HxZzesDCbN" rel="noopener" class="black" target="_blank">Join our Discord Server?</a></center>
  </body>
  </html>`)
}
//Else If the type of data is 'delete' then does the function below:
else if (typo==="delete"){
//Decrypt the Webhook url piece by piece by removing the '/' slash sign and declaring it variable t
var t = webhook.split("/");
//Detect if the URL Contains The HOST Domain and in the url matches "ws" and has a maximium length of 6 Arrays
if (t[2]===req.headers['host'] && t[3]==="ws" && t.length === 6){
  axios
  .get(`http://${req.headers['host']}/${process.env['ws_folder']}${t[4]}.json`)
  .then(uio => {
    const u = uio.data;
    const o = encrypt(process.env['encryption_key'], u.token);
    if (o===t[5]){
      fs.unlink(process.env['ws_folder']+t[4]+'.json', function (err) {
        if (err){
            console.error(err)
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width">
              <title>MDA DisForwarder</title>
                <meta name="description" content="Look at all those webhooks that we made!" />
                <meta name="language" content="English" />
                <link href="https://mdapublishers.web.app/icons/terminal_mini.png" rel="icon">
                <meta property="og:image" content="https://mdapublishers.web.app/icons/terminal_mini.png" />
                <link href="./style.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
            <h1>MDA Webhooks/DisForwarders</h1>
            <p>Programmed by Mr Discord Animation</p>
            <hr>
            <p>When creating your webhook you accept Discord Terms of Service.</p>
            <form action="./webhooks.html" method="post">
            <label for="web"><p>Insert your Link to your Discord Webhook below:</p></label>
            <input type="url" name="webhook" id="web" placeholder="Link to Webhook." required>
            <input type="text" name="typo" hidden value="create" required>
            <input type="text" name="id" hidden id="gen_id" required>
            <input type="text" name="token" hidden id="gen_token" required>
            <button type="submit">Create!</button>
            </form>
            <hr>
            <p>Need of Deleting your Webhook? Paste yours/or a spammer/scammer down below! And we'll take it from here!</p>
            <tt>It's already deleted!</tt>
            <form action="./webhooks.html" method="post">
            <label for="webd"><p>Insert your Link to your DisForwarder Webhook below:</p></label>
            <input type="url" name="webhook" id="webd" placeholder="Link to Webhook.">
            <input type="text" name="typo" hidden value="delete" required>
            <button type="submit">Delete!</button>
            </form>
            <hr>
            <script>
            (function(){
                function genID(captcha_str,fin){
                captcha_str="1234567890-";
                fin=Math.floor(Math.random()*captcha_str.length);
                for(let i=0; i<9; i++){
                    fin+=captcha_str[Math.floor(Math.random()* 8)];
                }
                //console.log(captcha_str.length);
                console.log("Generated Webhook ID: "+fin)
                return fin;
                }
                function genTOKEN(captcha_str,fin){
                captcha_str="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                fin=Math.floor(Math.random()*captcha_str.length);
                for(let i=0; i<9; i++){
                    fin+=captcha_str[Math.floor(Math.random()* 8)];
                }
                //console.log(captcha_str.length);
                console.log("Generated Webhook Token: "+fin)
                return fin;
                }
                document.getElementById("gen_id").value=genID();
                document.getElementById("gen_token").value=genTOKEN();
            }())
            </script>
            <center><a href="https://discord.com/invite/HxZzesDCbN" rel="noopener" class="black" target="_blank">Join our Discord Server?</a></center>
            </body>
            </html>`)
        }
        //Respond saying that the webhook is deleted
        else{
          res.send(`<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>MDA DisForwarder</title>
              <meta name="description" content="Look at all those webhooks that we made!" />
              <meta name="language" content="English" />
              <link href="https://mdapublishers.web.app/icons/terminal_mini.png" rel="icon">
              <meta property="og:image" content="https://mdapublishers.web.app/icons/terminal_mini.png" />
              <link href="./style.css" rel="stylesheet" type="text/css" />
          </head>
          <body>
          <h1>MDA Webhooks/DisForwarders</h1>
          <p>Programmed by Mr Discord Animation</p>
          <hr>
          <p>When creating your webhook you accept Discord Terms of Service.</p>
          <form action="./webhooks.html" method="post">
          <label for="web"><p>Insert your Link to your Discord Webhook below:</p></label>
          <input type="url" name="webhook" id="web" placeholder="Link to Webhook." required>
          <input type="text" name="typo" hidden value="create" required>
          <input type="text" name="id" hidden id="gen_id" required>
          <input type="text" name="token" hidden id="gen_token" required>
          <button type="submit">Create!</button>
          </form>
          <hr>
          <p>Need of Deleting your Webhook? Paste yours/or a spammer/scammer down below! And we'll take it from here!</p>
          <tt>You have successfully deleted this Webhook: ${webhook}</tt>
          <form action="./webhooks.html" method="post">
          <label for="webd"><p>Insert your Link to your DisForwarder Webhook below:</p></label>
          <input type="url" name="webhook" id="webd" placeholder="Link to Webhook.">
          <input type="text" name="typo" hidden value="delete" required>
          <button type="submit">Delete!</button>
          </form>
          <hr>
          <script>
          (function(){
              function genID(captcha_str,fin){
              captcha_str="1234567890-";
              fin=Math.floor(Math.random()*captcha_str.length);
              for(let i=0; i<9; i++){
                  fin+=captcha_str[Math.floor(Math.random()* 8)];
              }
              //console.log(captcha_str.length);
              console.log("Generated Webhook ID: "+fin)
              return fin;
              }
              function genTOKEN(captcha_str,fin){
              captcha_str="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
              fin=Math.floor(Math.random()*captcha_str.length);
              for(let i=0; i<9; i++){
                  fin+=captcha_str[Math.floor(Math.random()* 8)];
              }
              //console.log(captcha_str.length);
              console.log("Generated Webhook Token: "+fin)
              return fin;
              }
              document.getElementById("gen_id").value=genID();
              document.getElementById("gen_token").value=genTOKEN();
          }())
          </script>
          <center><a href="https://discord.com/invite/HxZzesDCbN" rel="noopener" class="black" target="_blank">Join our Discord Server?</a></center>
          </body>
          </html>`)
        }
      });
    }
  })
  //Respond if the Webhook is not yet created, deleted or not found!
  .catch(error=>{console.log(error);res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>MDA DisForwarder</title>
      <meta name="description" content="Look at all those webhooks that we made!" />
      <meta name="language" content="English" />
      <link href="https://mdapublishers.web.app/icons/terminal_mini.png" rel="icon">
      <meta property="og:image" content="https://mdapublishers.web.app/icons/terminal_mini.png" />
      <link href="./style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  <h1>MDA Webhooks/DisForwarders</h1>
  <p>Programmed by Mr Discord Animation</p>
  <hr>
  <p>When creating your webhook you accept Discord Terms of Service.</p>
  <form action="./webhooks.html" method="post">
  <label for="web"><p>Insert your Link to your Discord Webhook below:</p></label>
  <input type="url" name="webhook" id="web" placeholder="Link to Webhook." required>
  <input type="text" name="typo" hidden value="create" required>
  <input type="text" name="id" hidden id="gen_id" required>
  <input type="text" name="token" hidden id="gen_token" required>
  <button type="submit">Create!</button>
  </form>
  <hr>
  <p>Need of Deleting your Webhook? Paste yours/or a spammer/scammer down below! And we'll take it from here!</p>
  <tt>We cannot find the Webhook! It's either deleted or not yet created!</tt>
  <form action="./webhooks.html" method="post">
  <label for="webd"><p>Insert your Link to your DisForwarder Webhook below:</p></label>
  <input type="url" name="webhook" id="webd" placeholder="Link to Webhook.">
  <input type="text" name="typo" hidden value="delete" required>
  <button type="submit">Delete!</button>
  </form>
  <hr>
  <script>
  (function(){
      function genID(captcha_str,fin){
      captcha_str="1234567890-";
      fin=Math.floor(Math.random()*captcha_str.length);
      for(let i=0; i<9; i++){
          fin+=captcha_str[Math.floor(Math.random()* 8)];
      }
      //console.log(captcha_str.length);
      console.log("Generated Webhook ID: "+fin)
      return fin;
      }
      function genTOKEN(captcha_str,fin){
      captcha_str="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      fin=Math.floor(Math.random()*captcha_str.length);
      for(let i=0; i<9; i++){
          fin+=captcha_str[Math.floor(Math.random()* 8)];
      }
      //console.log(captcha_str.length);
      console.log("Generated Webhook Token: "+fin)
      return fin;
      }
      document.getElementById("gen_id").value=genID();
      document.getElementById("gen_token").value=genTOKEN();
  }())
  </script>
  <center><a href="https://discord.com/invite/HxZzesDCbN" rel="noopener" class="black" target="_blank">Join our Discord Server?</a></center>
  </body>
  </html>`)})
}
//Respond if the webhook isn't made by us
else{
res.send(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>MDA DisForwarder</title>
    <meta name="description" content="Look at all those webhooks that we made!" />
    <meta name="language" content="English" />
    <link href="https://mdapublishers.web.app/icons/terminal_mini.png" rel="icon">
    <meta property="og:image" content="https://mdapublishers.web.app/icons/terminal_mini.png" />
    <link href="./style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<h1>MDA Webhooks/DisForwarders</h1>
<p>Programmed by Mr Discord Animation</p>
<hr>
<p>When creating your webhook you accept Discord Terms of Service.</p>
<form action="./webhooks.html" method="post">
<label for="web"><p>Insert your Link to your Discord Webhook below:</p></label>
<input type="url" name="webhook" id="web" placeholder="Link to Webhook." required>
<input type="text" name="typo" hidden value="create" required>
<input type="text" name="id" hidden id="gen_id" required>
<input type="text" name="token" hidden id="gen_token" required>
<button type="submit">Create!</button>
</form>
<hr>
<p>Need of Deleting your Webhook? Paste yours/or a spammer/scammer down below! And we'll take it from here!</p>
<tt>The Webhook you entered is not made from us!</tt>
<form action="./webhooks.html" method="post">
<label for="webd"><p>Insert your Link to your DisForwarder Webhook below:</p></label>
<input type="url" name="webhook" id="webd" placeholder="Link to Webhook.">
<input type="text" name="typo" hidden value="delete" required>
<button type="submit">Delete!</button>
</form>
<hr>
<script>
(function(){
    function genID(captcha_str,fin){
    captcha_str="1234567890-";
    fin=Math.floor(Math.random()*captcha_str.length);
    for(let i=0; i<9; i++){
        fin+=captcha_str[Math.floor(Math.random()* 8)];
    }
    //console.log(captcha_str.length);
    console.log("Generated Webhook ID: "+fin)
    return fin;
    }
    function genTOKEN(captcha_str,fin){
    captcha_str="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    fin=Math.floor(Math.random()*captcha_str.length);
    for(let i=0; i<9; i++){
        fin+=captcha_str[Math.floor(Math.random()* 8)];
    }
    //console.log(captcha_str.length);
    console.log("Generated Webhook Token: "+fin)
    return fin;
    }
    document.getElementById("gen_id").value=genID();
    document.getElementById("gen_token").value=genTOKEN();
}())
</script>
<center><a href="https://discord.com/invite/HxZzesDCbN" rel="noopener" class="black" target="_blank">Join our Discord Server?</a></center>
</body>
</html>`)
}
}
//Returns as Internal Server Error and there's no valid input
else return res.status(500).send("Uhh wrong type of Input I guess?")
})

//Does a function if posted to /ws/{insert_id}/{insert_token}
app.post('/ws/:id/:token', (req, res) => {
let { id, token } = req.params;
let cont = req.body.content;
let link = req.body.avatar_url;
let user = req.body.username;
if (!id || !token || !cont) return res.status(401).json({"status": 401, "msg": "The ID and Token and Discord Message cannot be blank!"})
else{
  axios
  .get(`http://${req.headers['host']}/${process.env['ws_folder']}${id}.json`)
  .then(uio => {
    function parseDATA(KO){
      if (KO===""||KO===undefined||KO==="undefined"||KO===null||KO==="null"){
        return "";
      }
      else return KO;
    }
    const u = uio.data;
    const i = decrypt(process.env['encryption_key'], u.url);
    const o = encrypt(process.env['encryption_key'], u.token);
    const k = {
      content: cont,
      avatar_url: parseDATA(link),
      username: parseDATA(user)
    };
    if (o===token){
      axios
      .post(i, k)
      .then(function (response) {
        console.log(response.data);
        res.status(200).json({"status": 200, "msg": "Webhook Posted Successfully to Discord!"})
      })
      .catch(function (error) {
        console.log(error);
        res.status(400).json({"status": 400, "msg": "We're unable to Post the Webhook! And we don't know why!"})
      });
    }
    else return res.status(401).json({"status": 401, "msg": "The Token on the URL doesn't match with the Token on the Webhook!"})
  })
  .catch(error=>res.status(404).json({"status": 404, "msg": "Cannot Find Webhook!"}))
}
})

app.get('/ws/:id/:token', (req, res) => {
  let { id, token } = req.params;
  if (!id || !token) return res.status(401).json({"status": 401, "msg": "The ID and Token and Discord Message cannot be blank!"})
  else{
    axios
    .get(`http://${req.headers['host']}/${process.env['ws_folder']}${id}.json`)
    .then(uio => {
      const u = uio.data;
      const i = decrypt(process.env['encryption_key'], u.url);
      const o = encrypt(process.env['encryption_key'], u.token);
      if (o===token){
        axios
        .get(i)
        .then(ko => {
          const oke = ko.data;
          function checkRETURNAVATAR(dt, td){
            if (td === undefined || td === null){return undefined;} else { return [`https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=16`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=32`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=64`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=128`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=256`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=512`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=1024`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=2048`, `https://cdn.discordapp.com/avatars/${dt}/${td}.png?size=4096`]}
          }
          res.json({
            "status": 200,
            "msg": "Webhook Found! Here's what we found!",
            //You can show the Webhook URL. [Optional]
            //"url": i,
            "info": {
              "id": oke.id,
              "name": oke.name,
              "avatar": oke.avatar,
              "channel_id": oke.channel_id,
              "guild_id": oke.guild_id,
              "application_id": oke.application_id,
              "token": oke.token,
              "type": oke.type,
              "avatar_url": checkRETURNAVATAR(oke.id, oke.avatar)
            }
          })
        })
        .catch(error=>res.json({
          "status": 200,
          "msg": "Webhook Found! Here's what we found!",
          "url": i,
          "info": null,
          "connection": false,
          "connection_mgs": "The Discord Webhook is either revoked or we're unable to Ping the Server!"
        }))
      }
      else return res.status(401).json({"status": 401, "msg": "The Token on the URL doesn't match with the Token on the Webhook!"})
    })
    .catch(error=>res.status(404).json({"status": 404, "msg": "Cannot Find Webhook!"}))
  }
})