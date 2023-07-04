var a:array[0..100] of integer;n:integer;
begin
 read(n);
 for var i:=0 to n-1 do
 begin
 write('a[',i,']=');read(a[i]);
 end;
 for var i:=0 to n-1 do
 if i mod 2=0 then
 write(a[i],' ');
end.
 