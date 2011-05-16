def minimum array
  min_elem = array[0]
  array.each { |element| min_elem = element if element < min_elem }
  return min_elem
end

def maximum array
  max_elem = array[0]
  array.each { |element| max_elem = element if element > max_elem }
  return max_elem
end

a = Array.new
b = Array.new
25.times { a << rand(100)}
30.times { b << rand(10)}
p a,b
puts 0.2*minimum(a)-maximum(b)**2
