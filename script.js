// Function to calculate the Interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Principal Validation : Value should be greater than 0
    if(principal <= 0) {
        alert("Enter a Positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML="";
        return false;
    }

    // Calculate the Amount
    var amount = principal * years * rate / 100;

    // Calculate the Last Year based on the no of years selected.
    var year = new Date().getFullYear()+parseInt(years);

    //Show the result to the user
    document.getElementById("result").innerHTML="If you deposit <span class='highlight_value'>"+principal+"</span>,\<br\>at an interest rate of <span class='highlight_value'>"+rate+"%</span>.\<br\>You will receive an amount of <span class='highlight_value'>"+amount+"</span>,\<br\>in the year <span class='highlight_value'>"+year+"</span>\<br\>";
}

// Function to show the percentage selected form the Range slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
