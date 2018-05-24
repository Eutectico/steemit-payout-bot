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
config.steem.amount = '0.001 SBD'; //amount of SBD or STEEM to send to each follower/following
config.steem.send_memos_to = true;//an array of accounts to send memos to, else false

//and thats that
module.exports = config;
