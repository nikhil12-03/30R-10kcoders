
# 1.table of given number
def table(num):
    i=1
    while i<=20:
      print(f'{num}x{i}={num*i}')
      i+=1
table(8)    
         
#.2 factorial
def factorial(n):
   factorial_result=1
   if (n==0 or n==1):
      return factorial_result  
   while n!=0:
      factorial_result*=n
      n-=1
   return factorial_result
print(factorial(4))

# 3.Print all numbers from 1 to 100 that are divisible by 3 and 5 using a for loop.
for i in range(0,101):
   if i%3==0 and i%5==0:
      print(i)
      