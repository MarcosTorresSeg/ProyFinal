const moongose = require('mongoose');

const db = {
    host: 'cluster0.yxenl.mongodb.net',
    name: 'MyNote',
    user: 'coti',
    pass: 'Cavals011',
  };
  
  const mongodbConfig = {
      uri: `mongodb+srv://${db.host}/${db.name}?retryWrites=true&w=majority`,
      options: {
        user: db.user,
        pass: db.pass,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
    };

moongose.connect(mongodbConfig.uri, mongodbConfig.options)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));










    