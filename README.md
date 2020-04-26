# Interactive Web Applications - CCT College!

 As a student I have been tasked to Create an API service by my lecture Mikhail Timofeev.
 My repo on github [https://github.com/Annytitinha/mongodbCA2_IWA](https://github.com/Annytitinha/mongodbCA2_IWA)

# Module Learning Outcomes Assessed

 - MLO1 Assess the limitations of static Web solutions and design dynamic interactive web application solutions using a variety of industry standard Web application APIs and technologies
 - MLO4 Analyse existing web applications needs to further integrate new cross-site communications services
 - MLO5 Review and critique currently available development frameworks to aid user experience and recently developed technologies for future implementation
 - MLO7 Design embeddable services that can integrate simple web applications into hosted web services

## Assignment Description

 1. Create an API service (you must use Node.js and MongoDB) that supports full CRUD for your existing CA1 app.
 3. Update your existing CA1 app to allow populating the HTML table with JSON data provided by the API, implement the ability to Add and Delete items from that table using your new API only from your front-end. You are free to use any available front-end    frameworks/plugins to implement that functionality (Vanilla JavaScript, jQuery, Angular, etc.)
 4. Deploy your application to Heroku and your database to MongoDB Atlas.
 5. Possess a coherent commit history on GitHub (at least 8 valid and logical commits) and have your final submission code present in your Git repository.
 6. The finished application should be accompanied by a report (5 pages max) that outlines the difference between the existing CA1 and the resulting CA2 apps, reviews which approach was better in your opinion (CA1 vs. CA2) and explains the reasons of choosing a particular framework/plugin for your app at Step 2. The cover sheet for the report should include a full student name, student number, project title, the project’s GitHub repository link and the link to     the deployed application on Heroku.

## Using an online IDE – Gitpod.io 
To automatically clone a GitHub repository to Gitpod, note that just need to use the url below:
https://gitpod.io/#https://github.com/url_of_your_REPO_on_GitHub


# # Building a Simple CRUD app with Node, Express, and MongoDB
**[Express](https://expressjs.com/)  is a framework for building web applications on top of  [Node.js](https://nodejs.org/en/)**.
First, Our database will be hosted remotely on [MongoDB](https://www.mongodb.com/cloud/atlas)) and created a database. Atlas offers a nice free tier that we can use to test our application. This is the place where I am storeing information for your webApp).


## Commands used to get started

   

    npm install morgan cors http express body-parser mongoose dotenv
    
    npm  install node.js
    
    node server.js
    
    
    //Confirm your code in the repository and deploy it to Heroku using Git.
    
    npm i -g heroku
    
    heroku login  
    git add .
    
    git commit -a -m "start heroku" (do not need commit message either)
    
    git push heroku master
    
    heroku create –regeion eu

## # Connecting the app to the remote Database
I need to inform our app that it should be communicating with the database I have just created.
...

     // server.js
     mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology:  true, useNewUrlParser:  true, useFindAndModify:  false });

      mongoose.connection.on('error', (err) => {
    	    console.log('Mongodb Error: ', err);
        process.exit();
        });
        mongoose.connection.on('connected', () => {
        console.log('MongoDB is successfully connected');
    
    });

## Body Parser
Body Parser is an npm package that is used to parse the incoming request bodies in a middleware.

    app.use(bodyParser.json());

#  Implementing the endpoints

 
## CRUD - **_Controllers_**

-   **Create (POST)**  - Create item
-   **Read (GET)**- Get item
-   **Update (PUT)**  - Change item
-   **Delete (DELETE)**- Remove item

   

     //route.js...
     
    
        router.post('/', itemCtrl.createItem); // create an item
        router.get('/', itemCtrl.getItems);// get item
        router.get('/items/:_id', itemCtrl.getItem); // read item
        router.delete('/items/:_id', itemCtrl.deleteItem);// delete item
        router.put('/items/:_id', itemCtrl.updateItem); // update item
     
    
    module.exports = router;

## CREATE
What the function does is it simply created a new item using the data coming from a POST request and saves it to our database.

    exports.createItem = function(req, res) {
        var newItem = new Item(req.body);
        console.log(req.body);
        newItem.save(function (err, item) {
        if (err) {
        res.status(400).json(err);
        }
        res.redirect('back');
        });
    
    };

## GET

    // CRUD - get , read item
    
    exports.getItems = function(req, res) {
    Item.find({}, function (err, items) {
    if (err) {
    res.status(400).json(err);
    }
    res.render('index', {
    data: items
    })
    
    });
    
    };

## UPDATE

    // CRUD update
    
    exports.getItem = function(req, res) {
        Item.findOne({_id: req.params.id}, function (err, item) {
        if (err) {
        res.status(400).json(err);
        }
        res.json(item);
        });
    
    };
    
    //Getting item from mongodb
    
    exports.updateItem = function(req, res) {
        Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, item) {
        if (err) {
        res.status(400).json(err);
        }
        res.json(item);
    
    });
    
    };


##  DELETE

    // CRUD Delete
    
    exports.deleteItem = function(req, res) {
    Item.findByIdAndRemove(req.params.id, function (err, item) {
        if (err) {
        res.status(400).json(err);
        }
        res.json(item);
        });
        };

## Using EJS

    npm  install ejs --save

## References

 - YouTube. 2020. REST API Tutorial (Node, Express & Mongo). [ONLINE]
   Available at: https://www.youtube.com/watch?v=MvY8vcrojYw. [Accessed
   25 April 2020].
 - YouTube. 2020. Curso de Node.js - Exibindo HTML #10. [ONLINE] Available at: https://www.youtube.com/watch?v=UkwLcuzJRDQ. [Accessed 26 April 2020].
 - YouTub. 2020. Fullstack MyJournal - Home Posts CRUD in HTML EJS. [ONLINE] Available at: https://www.youtube.com/watch?v=vVfremnOKXs. [Accessed 26 April 2020].
 - Z. 2020. Building a Simple CRUD app with Node, Express, and MongoDB. [ONLINE] Available at: https://zellwk.com/blog/crud-express-mongodb/. [Accessed 26 April 2020].
