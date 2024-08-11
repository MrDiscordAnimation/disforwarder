// This code is made for ExpressJS. Copy and adjust it to your needs
// DisForwarder Link Creation
/*
If you want to post to /webhooks.html
You can post a body request to /webhooks.html
With the JSON contents:
{
    "id": "", //Token ID Required to create the Token/Leave blank if to delete the DisForwarder webhook
    "token": "", //Token Required to create the Token/Leave blank if to delete the DisForwarder webhook
    "typo": "", //Typo Required to create or delete the Token. Either it's "create" or "delete"
    "webhook": "" //Webhook Required to delete the DisForwarder webhook/Leave blank if to create the Token
}
*/
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
  //Return that the DisForwarder webhook has been created
  res.send(`Created https://${req.headers['host']}/ws/${id}/${encrypt(process.env['encryption_key'], token)}`)
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
            //Respond that webhook is already deleted
            res.send(`Webhook got deleted long ago`)
        }
        //Respond saying that the DisForwarder webhook is deleted
        else{
          res.send(`Deleted ${webhook}`)
        }
      });
    }
  })
  //Respond if the DisForwarder webhook is not yet created, deleted or not found!
  .catch(error=>{console.log(error);res.send(`Webhook not found`)})
}
//Respond if the webhook isn't made by us
else{
// Will respond if the DisForwarder webhook isn't made by this website.
res.send(`Webhook not made by us`)
}
}
//Returns as Internal Server Error and there's no valid input
else return res.status(500).send("Uhh wrong type of Input I guess?")
})

//Below is quite self explanitory
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
