module.exports = function(app) {

  app.io.on('connection', (client) => {
    //Test Socket
    client.on('subscribeToTimer', (interval) => {
      console.log('client is subscribing to timer with interval ', interval);
      setInterval(() => {
        client.emit('timer', new Date());
      }, interval);
    });

    //Get User Info
    client.on('getUserInfo', (userId) => {
      console.log('client is subscribing to user info with interval ', userId);
      app.users.findByID(userId).then((user, err) => {
        if(err)
          console.log(err);

        client.emit(user._id, user);
      });
    });

    
  });

}