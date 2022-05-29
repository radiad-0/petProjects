var n,m,q:integer;
 begin
 writeln('n=');readln(n);
 for var i:=1 to n do
  if n mod i=0 then 
  write(i,';');
end.