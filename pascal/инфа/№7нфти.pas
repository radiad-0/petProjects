var x:real;q:integer;
{1*32 надо сколько способов на 1*1 и 1*5}
begin
 for var i:=1 to 999 do
 begin
  x:=(-3+sqrt(3*3-4*(-279-i*i)))/2;
  if x=trunc(x) then q:=q+2;
  writeln(x,' ',q,' ',i);
 end;
 write(q);
end.