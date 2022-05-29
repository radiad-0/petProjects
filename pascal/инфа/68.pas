var a:array[0..100] of integer;n,q:integer;
begin
 read(n);q:=0;
 for var i:=1 to n do
 begin
  write('a[',i,']=');read(a[i]);
 end;
 for var i:=1 to n do
 if (a[i+1]<>0) and (a[i-1]<>0) then
 if (a[i]>a[i+1]) and (a[i]>a[i-1]) then q:=q+1;
 write(q);
end.