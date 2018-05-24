# Steemit-Payout-Bot

You should not use this bot unless you understand exactly what it does. It requires your *active_key* and its use is not recommended. Do not ask me for support if it sends all of your money somewhere.

As with all of my tools, this disclaimer applies:
```
Affirmer offers the Work as-is and makes no representations or warranties of any kind concerning the Work, express, implied, statutory or otherwise, including without limitation warranties of title, merchantability, fitness for a particular purpose, non infringement, or the absence of latent or other defects, accuracy, or the present or absence of errors, whether or not discoverable, all to the greatest extent permissible under applicable law.
```

##This Bot performs transactions of a certain amount of Steem or SBD to the list of users provided by the operator.


## Installation
```
$ git clone https://github.com/Eutectico/steemit-payout-bot.git
$ cd steemit-payout-bot
$ npm install
```

## Configuration
First rename config-example.json to config.json:
```
$ mv config-example.js config.js
```

Then set the following options in config.js:
```
var config = {};

config.steem = {};

//Global Configuration
config.steem.username = process.env.STEEM_USER || 'yourbotaccount';
config.steem.password =  process.env.STEEM_PASSWORD || 'your_private_active_key';
config.steem.url = 'https://rpc.buildteam.io';
config.steem.auth_type = 'owner'; //owner, posting

//delay in milliseconds between each write transaction
config.steem.delay = 250;

//memos only
config.steem.list =  'list.txt'; //The location of the list file containing one listed Steem account name per line
config.steem.message = 'Hello @username, Test message.'; //message to be sent in each memo (@username will be replaced)
config.steem.amount = '0.001 SBD'; //amount of SBD or STEEM to send to each Account
config.steem.send_memos_to = true;//an array of accounts to send memos to, else false

//and thats that
module.exports = config;


```

### userlist
You must create a list of users where the payouts will be made. The file must contain only one Steem account name on each line and nothing else in the following example:

```
account_1
account_2
account_3
```

## Run
```
$ nodejs payout.js
```
