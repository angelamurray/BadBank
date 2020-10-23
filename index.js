// setup server
var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// setup directory used to serve static files
app.use(express.static('public'));


// required data store structure
db.defaults({ accounts: []}).write();

app.get('/account/create/:name/:email/:password', function (req, res) {

    // Create account route
    // return success or failure string

    var account = {

        "name"        : req.params.name,
        "email"       : req.params.email,
        "balance"     : 0,
        "password"    : req.params.password,
        "transactions": []
    };
    db.get('accounts').push(account).write();
    console.log(db.get('accounts').value());
    res.send("Account successfully created");
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null

    var inputemail = req.params.email;
    var inputpass = req.params.password;
    var user = db.get('accounts').find({email : inputemail}).value();
      
    if (user == undefined){
        res.send("User not found");

    }else{
        var storedpass = user.password;
        if (inputpass == storedpass){
            console.log(user);
            res.send("Login Successful");

        } else{
            res.send("Login Failed");
        }
    }

});

app.get('/account/get/:email', function (req, res) {
    // YOUR CODE
    // Return account based on email
    
    var inputemail = req.params.email;
    var user = db.get('accounts').find({email : inputemail}).value();
    if (user == undefined){
        res.send("User not found");

    } else{
        console.log(user);
        res.send(`Your balance is $${user.balance}`);
    }
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string

    var inputemail = req.params.email;
    var amount = Number(req.params.amount);
    var user = db.get('accounts').find({email : inputemail});

    if (user.value() == undefined){
        res.send("User not found");

    } else{
        newbalance= user.value().balance + amount;
        user.assign({balance: newbalance}).write();
        user.value().transactions.push(new Date() + ' Deposit: $' + amount + ' New balance: $' + newbalance);
        console.log(user.value());
        res.send(`Deposit successful. Your new balance is $${user.value().balance}`);
    }

});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string

    var inputemail = req.params.email;
    var amount = Number(req.params.amount);
    var user = db.get('accounts').find({email : inputemail});

    if (user.value() == undefined){
        res.send("User not found");

    } else{
        newbalance= user.value().balance - amount;
        user.assign({balance: newbalance}).write();
        user.value().transactions.push(new Date() + ' Withdrawal: $' + amount + ' New balance: $' + newbalance);
        console.log(user.value());
        res.send(`Withdrawl successful. Your new balance is $${user.value().balance}`);
    }

});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
    var inputemail = req.params.email;
    var user = db.get('accounts').find({email : inputemail});
    
    if (user.value() == undefined){
        res.send("User not found");

    } else{
        console.log(user.value());
        res.send(user.value().transactions);
    }

});

app.get('/account/all', function (req, res) {
 
    res.send(db.get('accounts').value());
});


// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running at port 3000');
})
