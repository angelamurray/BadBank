var ui = {};

ui.navigation = `

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" onclick = "defaultModule()" >BadBank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link" href="#" onclick = "loadCreateAccount()">Create Account</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onclick = "loadLogin()">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onclick = "loadDeposit()">Deposit</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onclick = "loadWithdraw()">Withdraw</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onclick = "loadTransactions()">Transactions</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onclick = "loadBalance()">Balance</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onclick = "loadAllData()">All Data</a>
        </li>
        </ul>
  </div>
</nav> 
`;

ui.createAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="InputName">Name</label>
                    <input type="text" class="form-control" id="InputName" >
                </div>
                <div class="form-group">
                <label for="InputEmail">Email address</label>
                <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                <label for="InputPassword">Password</label>
                <input type="password" class="form-control" id="InputPassword">
                </div>
                <button type="submit" class="btn btn-light" onclick = "create()">Create Account</button>
            </form>
            <div id = "status"></div> 
        
        </div>
    </div>
`;

ui.login = `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Login</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter email address">
                </div>
                <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" placeholder="Enter password">
                </div>
                <button type="submit" class="btn btn-light" onclick = "login()">Login</button>
            </form>
            <div id = "status"></div> 
        
        </div>
    </div>
`;

ui.deposit = `
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter email address">
                </div>
                <div class="form-group">
                <label for="Deposit">Amount</label>
                <input type="number" class="form-control" id="Deposit" placeholder="Enter amount">
                </div>
                <button type="submit" class="btn btn-light" onclick="deposit()">Deposit</button>
            </form>
            <div id = "status"></div>

        </div>
    </div> 
`;

ui.withdraw = `

    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Withdraw</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter email address">
                </div>
                <div class="form-group">
                <label for="Withdraw">Amount</label>
                <input type="number" class="form-control" id="Withdraw" placeholder="Enter amount">
                </div>
                <button type="submit" class="btn btn-light" onclick = "withdraw()">Withdraw</button>
            </form>
            <div id = "status"></div> 
        
        </div>
    </div>

`;

ui.transactions = `
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">Transactions</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter email address">
                </div>

                <button type="submit" class="btn btn-light" onclick = "transactions()">Show Transactions</button>
            </form>
            <div id = "status"></div>
        
        </div>
    </div>
`;

ui.balance = `
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Balance</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter email address">
                </div>

                <button type="submit" class="btn btn-light" onclick= "balance()">Show Balance</button>
            </form>
        <div id = "status"></div>
        
        </div>
    </div> 
`;

ui.default = `
    <div class="card" style="width: 25rem;">
    
        <div class="card-body">
        <h5 class="card-title">Angela's Bank</h5>
        <h6 class="card-subtitle mb-2 text-muted">Welcome to Angela's unsecure bank</h6>
        <p class="card-text">You can move around using the navigation bar</p>

        </div>
        <img src="bank.png" class="card-img-top" alt="bank">
    </div>

`;

ui.allData = `

    <div class="header"><h2>All Data in Store</h2></div>
    <button type="button" class="btn btn-secondary" onclick = "allData()">Show All Data</button>
    <div id = "status"></div> 

`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
