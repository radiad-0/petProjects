{339}
var n:integer;f1,f2:text;
begin
 Assign(f1,'a3.1..28.09.txt');
 Assign(f2,'a3.2..28.09.txt');
 reset(f1);
 rewrite(f2);
 readln(f1,n);
 for var i:=2 to n do
 if n mod i=0 then
 begin
  write(f2,i);
  break
 end;
 close(f1);
 close(f2);
end.