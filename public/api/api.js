
function create() {

    var name = document.getElementById('InputName').value;
    var email = document.getElementById('InputEmail').value;
    var password = document.getElementById('InputPassword').value;
    var url = '/account/create/'+ name +'/'+ email + '/'+ password;
    var status = document.getElementById('status');

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = res.text; 
            }
        });   
}

function login() {

    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    var status = document.getElementById('status');
    var url = '/account/login/'+ email + '/' + password;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = res.text;
            }
        });
}

function deposit() {

    var email = document.getElementById('Email').value;
    var deposit = document.getElementById('Deposit').value;
    var status = document.getElementById('status');
    var url = '/account/deposit/' + email+ '/' + deposit;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = res.text;
            }
        });
}

function withdraw() {

    var email = document.getElementById('Email').value;
    var withdraw = document.getElementById('Withdraw').value;
    var status = document.getElementById('status');
    var url = '/account/withdraw/' + email+ '/' + withdraw;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = res.text;
            }
        });
}

function transactions() {
    var email = document.getElementById('Email').value;
    var status = document.getElementById('status');
    var url = '/account/transactions/' + email;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                //status.innerHTML = JSON.stringify(res.body);
                status.innerHTML = res.text;
            }
        });
}

function balance() {
    var email = document.getElementById('Email').value;
    var status = document.getElementById('status');
    var url = '/account/get/'+ email;
   
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = res.text;
            }
        });
}

function allData() {
    var status = document.getElementById('status');
    var url = '/account/all';
   
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.text);
                //status.innerHTML = res.text;
            }
        });


}

