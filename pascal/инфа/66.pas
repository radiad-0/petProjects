var a:array[0..100] of integer;n,q:integer;
begin
 read(n);
 for var i:=1 to n do
 begin
  write('a[',i,']=');read(a[i]);
 end;
 for var i:=1 to n do
 if a[i]<a[i+1] then q:=q+1;
 write(q);
end.
 