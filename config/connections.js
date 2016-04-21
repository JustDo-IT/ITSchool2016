module.exports.connections = {

  localDiskDb: {
    adapter: 'sails-disk'
  },

   postgresql: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    user: 'testingsystem', // optional
    password: 'password', // optional
    database: 'password' //optional
  }
};
