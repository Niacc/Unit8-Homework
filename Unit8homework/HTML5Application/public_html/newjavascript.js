//8. Write a program that asks the user to enter a series of 20 numbers.  The 
//program should store the numbers in an array and then display the following data:
//
//The lowest number in the array
//The highest number in the array
//The total of the numbers in the array
//The average of the numbers in the array
//Write your program in JavaScript using NetBeans, create your own repository on
// GitHub for your program (different than the one for #7), and insert the link 
// to your repository in your homework document. (10 points)
//
// 
//
//Hint for problems 7 and 8:
//
//You’ll need to use a loop to do both of these problems.  You will loop to 
//capture the items from the user and store them in the array, and then loop 
//through the array to do the calculations.  In pseudocode this would look like:
//
//(This would capture the user input)
//
//for (i = 0; i < max items; i++)
//
//     array[i] = user input;
//
// 
//
//(This would total the items entered)
//
//total = 0;
//
//for (i = 0; i < array.length; i++)
//
//     total = total + array[i]
//
//    
//
//For finding the min, start by putting the first element in the array into a variable (like something called smallest).  Then loop through the rest of the array and compare each element to the value in smallest.  If you find a smaller item in the array, replace the value of smallest with the value of that item, and keep comparing until you get to the end of the array.  In pseudocode this would look like:
//
// 
//
//smallest = array[0];
//
//for (i = 1; I < array.length; i++)
//
//     if array[i] < smallest
//
//         smallest = array[i]






//------------------------------------------------------------------------------------
//7. Write a program that asks the user to enter a store's sales for each day of
// the week.  The amounts should be stored in an array.  Use a loop to calculate
// the total sales for the week and display the results. 
//
//Write your program in JavaScript using NetBeans, create your own repository on
// GitHub for your program, and insert the link to your repository in your 
// homework document. (10 points)
// 
// 
//defining the array

var dailyAmount = [0,0,0,0,0,0,0];    

//asking for the users input
for (i = 0; i < dailyAmount.length; i++) {
    dailyAmount[i] = Number(prompt("What was your daily amount earned?"));
}

//finding the total
total = 0;
for (i = 0; i < dailyAmount.length; i++) {
     total = total + dailyAmount[i];
     }

//finding the smallest
for (i = 1; i < dailyAmount.length; i++){
    if (dailyAmount[i] < smallest){
        smallest = dailyAmount[i];
    }
}
 
//finding the largest
var usersinput;
for (i = 0; i < dailyAmount.length; i++){
    dailyAmount[i] = usersinput;
}

//Finding the average
for (i = 0; i < dailyAmount.length; i++) {
    average = sum(dailyAmount[i])/total;
}


document.write("You total is", total,
"     Your Smallest is", smallest,
"     Your Largest is", usersinput,
"     Your Average amout is", average);




//-------------------------------------------------------------------------------------
//8. Write a program that asks the user to enter a series of 20 numbers.  The 
//program should store the numbers in an array and then display the following data:
//
//The lowest number in the array
//The highest number in the array
//The total of the numbers in the array
//The average of the numbers in the array
//Write your program in JavaScript using NetBeans, create your own repository on
// GitHub for your program (different than the one for #7), and insert the link 
// to your repository in your homework document. (10 points)


//defining the array

var dailyAmount=[];

//asking for the users input
for (i = 0; i < 20; i++) {
    dailyAmount[i] = Number(prompt("What was your daily amount earned?"));
}

//finding the total
total = 0;
for (i = 0; i < 20; i++) {
    total = total + dailyAmount[i];
}

//finding the smallest
for (i = 1; i < 20; i++) {
    if (dailyAmount[i] < smallest) {
        smallest = dailyAmount[i];
    }
}

//finding the largest
var usersinput;
for (i = 0; i < 20; i++) {
    dailyAmount[i] = usersinput;
}

//Finding the average
for (i = 0; i < 20; i++) {
    average = sum(dailyAmount[i]) / total;
}


document.write("You total is", total,
        "     Your Smallest is", smallest,
        "     Your Largest is", usersinput,
        "     Your Average amout is", average);



