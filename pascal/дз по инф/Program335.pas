var q,d:real; var i,b,a:integer;
begin
 read(a,b);
 q:=a+1;
 for i:=a to b do
 begin
 d:=sqrt(q);
 if round(d)=d then writeln(q);
 q:=q+1;
 end;
end. 