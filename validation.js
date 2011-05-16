// Вывод ответа на экран
function printTask2Result(k,x,s) 
{
    document.getElementById("task2output").style.visibility = "visible";
    var elem = document.getElementById("num");
    var txt = document.createTextNode(k);
    elem.replaceChild(txt, elem.firstChild);
    elem = document.getElementById("ex");
    txt = document.createTextNode("(" + x + ")");
    elem.replaceChild(txt, elem.firstChild);
    elem = document.getElementById("sum");
    txt = document.createTextNode(s);
    elem.replaceChild(txt, elem.firstChild);
}
		     
function printTask3Result(a,b,x,y,z)
{
      document.getElementById("task3output").style.visibility = "visible"; 
      var txt = document.createTextNode("[ " + a.join(", ") + "]");
      var elem = document.getElementById("arrA");
      elem.replaceChild(txt, elem.firstChild);
      txt = document.createTextNode("[ " + b.join(", ") + "]");
      elem = document.getElementById("arrB");
      elem.replaceChild(txt, elem.firstChild);
      txt = document.createTextNode(x);
      elem = document.getElementById("minA");
      elem.replaceChild(txt, elem.firstChild);
      txt = document.createTextNode(y);
      elem = document.getElementById("maxB");
      elem.replaceChild(txt, elem.firstChild);
      txt = document.createTextNode(z);
      elem = document.getElementById("result");
      elem.replaceChild(txt, elem.firstChild);		     
}	     
		     
// Проверяем, что в текстовое поле введен хотя бы один символ
function isNotEmpty(elem) 
{
	var str = elem.value;
    var re = /.+/;
    if(!str.match(re)) 
    {
        alert("Не все исходные данные введены!");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}
//проверка того, что введено положительное или отрицательное число
function isNumber(elem) 
{
    var str = elem.value;
    var re = /^[-+]?\d*$/;
    str = str.toString();
    if (!str.match(re)) {
        alert("Можно вводить только целые числа.");
        setTimeout("focusElement('" + elem.form.id + "', '" + elem.id + "')", 0);
        return false;
    }
    return true;
}

// проверка того, что k - больше нуля		     
function isPositive (elem) 
{
    if (parseInt(elem.value, 10) < 1) 
    {
	alert("Число k должно быть натуральным!");
        setTimeout("focusElement('" + elem1.form.id + "', '" + elem1.id + "')", 0);
        return false;
    }
    return true;		     
}
		     
// проверка того, что нижняя граница диапазона меньше верхней
function isLimitsCorrect(elem1, elem2) 
{
	var bottom = parseInt(elem1.value, 10), top = parseInt(elem2.value, 10);
    if (bottom > top) 
    {
        alert("Нижняя граница диапазона не может быть больше вехней!");
        setTimeout("focusElement('" + elem1.form.id + "', '" + elem1.id + "')", 0);
        return false;
    }
    return true;
}

function validateForm2() 
{
    var x = document.forms["task2form"].x, k = document.forms["task2form"].k;	     
    if (isNotEmpty(x)) 
    {
        if (isNotEmpty(k)) 
	{
            if (isNumber(x)) 
	    {
	        if (isNumber(k)) 
		{
		    if (isPositive(k)) 
		    {
		        return true;
		    }
	        }
	    }		  
	}		  
    }			  
    return false;			  
}			  
// процедура конечной проверки введенных данных
function validateForm3() 
{
    var form = document.forms["task3form"];	     
    if (isNotEmpty(form.a_bottom_limit)) 
    {
        if (isNotEmpty(form.a_top_limit)) 
	{
            if (isNotEmpty(form.b_bottom_limit)) 
	    {
                if (isNotEmpty(form.b_top_limit)) 
		{
                    if (isNumber(form.a_bottom_limit)) 
		    {
                        if (isNumber(form.a_top_limit)) 
			{
		            if (isNumber(form.b_bottom_limit)) 
			    {
		                if (isNumber(form.b_top_limit)) 
				{
		                    if (isLimitsCorrect(form.a_bottom_limit, form.a_top_limit)) 
				    {
			                if (isLimitsCorrect(form.b_bottom_limit, form.b_top_limit)) 
					{
                                             return true;
			                }
	                            }
		                }
		            }  
                        }
                    }
                }
            }
        }
    }
    return false;
}		     
