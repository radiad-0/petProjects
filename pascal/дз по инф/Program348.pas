var a,b,c,d,i,x:integer;
begin
 read(a);read(b);read(c);read(d);
 for i:=1 to 1000 do
 begin
 if a*x*x*x+b*x*x+c*x+d=0 then write('x=',x);
 x:=x+1
 end;
 end.