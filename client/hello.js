if (Meteor.isClient) {
  // counter starts at 0


  Template.hello.helpers({
    test: function () {
	    Meteor.call('test',function(error,result){
			Session.set('counter',result);
	    });
      return Session.get('counter');
    },
	  test1: function () {
		  Meteor.call('test1',function(error,result){
			  Session.set('counter1',result);
		  });
		  return Session.get('counter1');
	  },
	  test2: function () {
		  Meteor.call('test2',function(error,result){
			  Session.set('counter2',result);
		  });
		  return Session.get('counter2');
	  },
	  twit: function () {
		  Meteor.call('twit',function(error,result){
			  console.log(result);
		  });

		  return "No function is blocking because of this.unblock() method ";
	  }

  });


}
