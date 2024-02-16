let options = prompt("Press 1 to Check Balance \nPress 2 to Deposit \nPress 3 to Withdraw \nPress 4 to Exit")

let balance = 25000;

switch (options) {
    case "1":
        document.write(`Your Balance is ${balance}`)
        break;

    case "2":
        let deposit = +prompt("Enter amount to Deposit:")
        
        if (deposit < 0){
            document.write("Invalid Amount")
        }
        else{
            document.write(`Your New Balance is ${balance + deposit}`)
        }
        break;

    case "3":
            let withdraw = +prompt("Enter amount to Withdraw:")
            
            if (withdraw < 0){
                document.write("Invalid Amount")
            }

            else if (balance - withdraw >= 0) {
                document.write(`Your New Balance is ${balance - withdraw}`)
            }
        
        else {
            document.write("Insufficient Balance")
        }
        break;

    case "4":
        document.write("Bye!")
        break;

    default:
        alert("Invalid Option")
        break;
}