const myRoute = (app) => {
  app.route('/contact')
    .get((req, res) =>
      res.send('Get request sucessful'))
    
    .post((req, res) =>
      res.send('Post request sucessful!!!'));

    app.route('/contact/:contactId')
      .put((req, res) =>
        res.send('Put request sucessful'))
      
      .delete((req, res) =>
        res.send('Delete request sucessful!!!'));
    }

export default myRoute;