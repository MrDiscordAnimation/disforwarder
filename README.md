# Project DisForwarder

Project DisForwarder is a Discord Webhook URL Protection which basically means that it's protects that Original URL of the Discord Webhook. Only people with the Secret Key can decrypt your webhook and find it's original url OR make a GET request to the Webhook and maybe the URL might or might not be shown.

You can clone the source code here on this Github. Github URL: https://github.com/MrDiscordAnimation/disforwarder/

So what does it do? Well it's does the same thing like every other Discord Webhook. Sending Messages!

This disforwarder is limited to only sending messages, changing the avatar of the embed and nickname, so basically it can't send embeds or send attachments.

### Creating a DisForwarder Webhook

To Create the DisForwarder Webhook Download this Github and host everything yourself or go to the prebuilt one: https://api.mrdiscord.repl.co/webhooks.html

Then Copy your Discord Webhook and find the section where it's says creating your webhook and paste it into the `Link to Webhook` and Click on `Create!` button.

It will then redirect to another page with your URL. Copy it! **IT WILL ONLY BE SHOWN ONCE!**

Note: The URL might be look like this: ``https://api.mrdiscord.repl.co/ws/github/jRv2h0BPAUhW7iyV``

### Sending Messages via the DisForwarder Webhook

To Send Messages Copy your Link it should look something like this: ``https://api.mrdiscord.repl.co/ws/github/jRv2h0BPAUhW7iyV``. Make a Post Request to the URL as a JSON Body and the structure should look something like this:
```
{
  "content": "Insert your Message",
  "username": "Your Username",
  "avatar_url": "https://mdapublishers.web.app/icons/terminal_mini.png"
}
```
Note: If you received a **400** Error it might be that:

- The Content/Message is too long surpassed the limit.
- The Username is too long surpassed the limit.
- Or Maybe something went wrong at the discord servers that we don't know about!

### Deleting the DisForwarder Webhook

To Invalidate the Webhook please go to the same page that you create yours at and then.

Locate the Delete section it should be at the bottom and paste your DisForwarder Webhook and **NOT DISCORD WEBHOOK** and click on `Delete!` after that you cannot undo it!

It should redirect you to another page where it's says that it deleted the DisForwarder Webhook!

You can host it yourself and try it or try our prebuilt and more secure one here: https://api.mrdiscord.repl.co/webhooks.html

Built by [Mr Discreet Animation#8833](https://discord.com/users/696558802492719145) Discord Server: https://discord.com/invite/HxZzesDCbN
