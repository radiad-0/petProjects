var n,k,x,i,q:integer;
 begin
 read(n);
 for i:=1 to n do
 begin
 read(k);
 if (k>0) then x:=x+1
 else q:=q+1;
 end;
 if x>q then writeln('положительных больше')
 else writeln('отрицательных больше');
 end.
 