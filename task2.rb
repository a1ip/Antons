# -*- coding: utf-8 -*-
# Чтобы не вычислять для каждого члена ряда факториал в знаменателе
# заметим что, начиная со второго, каждый член ряда
# выражается через предыдущий: а(к) = а(к-1) * х / (к-1)
# 0! = 1, поэтому а(1) = х*х/0! = x*x
print "Введите целое х: "
x = gets.to_f
print "Введите натуральное к (сколько членов ряда суммировать): "
k = gets.to_i
a = x * x # первый член ряда
s = a # сумма к первых членов ряда при к = 1
for i in 2..k do
  a = a * x / (i-1)
  s = s + a
end
puts "Сумма k первых членов ряда равна: #{s}"