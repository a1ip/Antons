function solve3()
{
          // Значения границ диапазонов для заполнения массивов берутся из полей ввода.
      
      var form = document.forms["task3form"];
      var a_bottom_limit = parseInt(form.a_bottom_limit.value, 10),
      a_top_limit = parseInt(form.a_top_limit.value, 10),
      b_bottom_limit = parseInt(form.b_bottom_limit.value, 10),
      b_top_limit = parseInt(form.b_top_limit.value, 10);      
      
      // Заполняем массивы случайными целыми числами в заданных диапазонах значений
      
      var a = new Array(25);
      var b = new Array(30);
      for (var i = 0; i < a.length; i++)
	{
	  a[i]= Math.floor(Math.random() * (a_top_limit - a_bottom_limit + 1)) + a_bottom_limit;
	}
      for (var i = 0; i < b.length; i++)
	{
	  b[i]= Math.floor(Math.random() * (b_top_limit - b_bottom_limit + 1)) + b_bottom_limit;
	}
			  
      // x - минимальный среди первых i элементов массива a	
			  
      var x = a[0];
      for (var i = 1; i < a.length; i++)
	{
          if (a[i] < x)
            {
              x = a[i];
            }
	}
		     
      // y - максимальный среди первых i элементов массива b	 
		     
      var y = b[0];
      for (var i = 1; i < b.length; i++)
	{
          if (b[i] > y)
            {
              y = b[i];
            }
	}	

      // Вычисляем и выводим на экран результат
		     
      var z = 0.2*x - y*y;
      printTask3Result(a,b,x,y,z);
}