module.exports.connections = {

  localDiskDb: {
    adapter: 'sails-disk'
  },

   postgresql: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    user: 'testingsystem', // optional
    password: 'dke43de4dka', // optional
    database: 'testingsystem' //optional 
  }
};
