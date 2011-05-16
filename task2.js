function solve2()
{
          // Значения переменных берем из полей ввода
      var x = parseInt(document.forms["task2form"].x.value, 10);
      var k = parseInt(document.forms["task2form"].k.value, 10);
      
      // переходим к решению
      var a = x * x // первый член ряда
      var s = a // сумма первых к членов ряда при к = 1
      for (var i = 2; i <= k; i++)
          {
	      a = a * x / (i-1); // для каждого i находим i-й член ряда
	      s = s + a; // На каждом шаге цикла S - сумма i  членов ряда
	  }
			   
    printTask2Result(k,x,s); // Выводим результат на экран
}