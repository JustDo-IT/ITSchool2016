module.exports.connections = {

  localDiskDb: {
    adapter: 'sails-disk'
  },

   postgresql: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    user: '', // optional
    password: '', // optional
    database: '' //optional 
  }
};
