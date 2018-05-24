var config = require('./config');
var library = require('./library');
var library_auth = require('./library_auth');
var utils = require('./utils');
var userlist = [];

var steem = require('steem');
steem.api.setOptions({ url: config.steem.url });

function filterAccounts( accounts = [] ) {

  steem.api.getAccounts(accounts, function(err, response){
  	let filtered_accounts = [];
    for (var i = response.length - 1; i >= 0; i--) {
      if( parseInt(response[i].reputation) > parseInt(1000000) ) {
        filtered_accounts.push( response[i].name );
      }
    }

    let count = accounts.length - filtered_accounts.length;
    console.log( 'filtered accounts: ' + count );
	library_auth.sendMemos( filtered_accounts );
  });
}

if( config.steem.send_memos_to ) {
  console.log( config.steem.send_memos_to );
	library_auth.sendMemos( config.steem.send_memos_to )
 if( config.steem.list != ''){
	utils.loadUserList(config.steem.list, function(list) {
    if(list)
      userlist = list;
      console.log( 'listed accounts: ' + userlist );
      console.log( 'Number of accounts: '+ userlist.length);
      library_auth.sendMemos(userlist)
  });
}}
else
	console.log( 'config.steem.list The location of the list file containing one listed Steem account name per line')
