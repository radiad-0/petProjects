var n,q,w,e,r,a,b:integer;
begin
writeln('n=');
read(n);
if n<=9999 then
begin
a:=n div 100;
b:=n div 1000;
q:=n mod 10;
n:=n div 10;
w:=n mod 10;
n:=n div 10;
e:=n mod 10;
n:=n div 10;
r:=n mod 10;
if (a=0) and (b=0) then
begin
write('нет 3-х одинаковых чисел');
end
else
begin
if ((q=w) and (w=e)) or ((q=w) and (w=r))  or ((q=e) and (e=r)) or ((e=w) and (e=r)) then
begin
write('есть 3-и одинаковых числа');
end;
end;
end
else 
begin
write('не по условию');
end;
end.