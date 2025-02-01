class BankAccount 
{

    constructor(accountHolder, accountNumber, balance = 0) 
    {
        this.AccName = accountHolder
        this.AccNumber = accountNumber
        this.AccBalance = balance
    }

    deposit(amount) 
    {
        if(amount > 0)
            this.AccBalance += amount
        this.showBalance()
    }

    widthdraw(amount) 
    {
        if(amount > 0 && amount <= this.AccBalance)
            this.AccBalance -= amount

        this.showBalance()
    }

    showBalance(){
        console.log(`Balance is ${this.AccBalance}`)
    }
}

