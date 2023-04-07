//Bank Class...

class bank {
    constructor (balance) {
        this.balance=balance;
    }

    withdraw(amount){
        //guard clause
        if(this.balance-amount<=0){
            console.log("Sorry, you dont have sufficient balance");
            console.log({balance:this.balance})
            return;
        }
        this.balance-=amount;
        console.log('withdrew', `Rs ${amount}`)
        console.log({balance: this.balance})
    }

    deposit(amount){
        this.balance+=amount;
        console.log('deposited', `Rs ${amount}`)
        console.log({balance: this.balance})
    }
}

const sAmount = document.getElementById('samount')
const savingAmount = Number(sAmount.value);

// MyAccount object

const MyAccount = new bank(savingAmount)

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const currentBalance=document.getElementById('balance')

depositButton.onclick = () => {
    const amount =Number(amountInput.value)
    MyAccount.deposit(amount)
    currentBalance.innerText = `Balance: ${MyAccount.balance}`
}

withdrawButton.onclick=()=>{
    const amount=Number(amountInput.value)
    MyAccount.withdraw(amount)
    currentBalance.innerText=`Balance ${MyAccount.balance}`
}
