// https://github.com/NUSHOHEL/solved-problem




// KILOMETER TO METER PROBLEM (SOLVED)

function kilometerToMeter(Kilometer){
    if(Kilometer > 0){
        var meter = Kilometer * 1000;
        
    }
    else if(Kilometer <= 0){
        return "Negative Value is not allowed"
    }

    return meter
}




// BUDGET CALCULATOR PROBLEM (SOLVED)





function budgetCalculator(watch, mobile, laptop){
    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop * 500;
    var budget = watch + mobile + laptop;
    return budget
}




// HOTEL COST PROBLEM (SOLVED)




 function hotelCost(days){
        if(days > 0){
            var cost = 0;
            if(days <= 10){
                cost = days * 100;
            }
            else if (days <= 20){
                var withoutDiscount = 10 * 100;
                var remaining = days -10;
                var firstDiscount = remaining *80;
                cost = withoutDiscount + firstDiscount;
            }
            else{
                var withoutDiscount = 10* 100;
                var firstDiscount = 10 * 80;
                var remaining = days -20;
                var secondDiscount = remaining * 50;
                cost = withoutDiscount + firstDiscount + secondDiscount;
            }
        }
        else{

            return "negative value is not allowed"

        }
        return cost
}





// MEGAFRIEND PROBLEM (SOLVED)




function megaFriend(arr) {
      var largestName = "";
      for (var i = 0; i < arr.length; i++) {
        if (largestName.length < arr[i].length) {
          largestName = arr[i];
        }
      }
      return largestName;
      

      }
    