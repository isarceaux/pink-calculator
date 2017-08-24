var result = $('.result')
var first_number_string = "";
var second_number_string = "";
var current_number_string = "";
var current_operator = "";
var should_clear = "false";

function add(first,second)
{
  var result = 0.0;
  first = parseInt(first);
  second = parseInt(second);
  result = first + second;
  return result;
}

function multiply(first,second)
{
  var result = 0.0;
  first = parseInt(first);
  second = parseInt(second);
  result = first * second;
  return result;
}

function divide(first,second)
{
  if(parseInt(second)===0)
  {
    alert("Impossible de diviser par 0 !")
    return null;
  }
  else
  {
    var result = 1.0;
    first = parseInt(first);
    second = parseInt(second);
    result = first / second;
    return result;  
  }
}

function substract(first,second)
{
  var result = 0;
  first = parseInt(first);
  second = parseInt(second);
  result = first - second;
  return result;
}

function clear()
{
  current_number_string = "";
  result.text(current_number_string);
}

function clearAll()
{
  first_number_string = "";
  second_number_string = "";
  current_operator = "";
  clear();
}

function operate()
{
  switch(current_operator)
  {
    case "/":
      current_number_string = divide(first_number_string,second_number_string);
      result.text(current_number_string);
      break;
    case "*":
      current_number_string = multiply(first_number_string,second_number_string);
      result.text(current_number_string);
      break;
    case "+":
      current_number_string = add(first_number_string,second_number_string);
      result.text(current_number_string);
      break;
    case "-":
      current_number_string = substract(first_number_string,second_number_string);
      result.text(current_number_string);
      break;
  }
}

function equal()
{
  second_number_string = current_number_string;
  clear();
  // alert(first_number_string + " " + current_operator + " " + second_number_string );
  operate();
  second_number_string="";
  first_number_string="";
}

$('.number').on('click',function()
{
  if(should_clear)
  {
    clear();
    should_clear=false;
  };
  var number = this.innerHTML;
  current_number_string += number;
  result.text(current_number_string);
})


$('.clear').on('click',function()
{
 clearAll();
})

$('.operator').on('click',function()
{
  if(first_number_string === "")
  {
    first_number_string = current_number_string;
    current_operator = this.innerHTML;
    clear();  
  }
  else
  {
    second_number_string = current_number_string;
    var temporary_number = current_number_string;
    should_clear = true;
    operate();
    // clear(); 
    first_number_string = temporary_number;
  }
  
})

$('.equal').on('click',function()
{
 equal(); 
})