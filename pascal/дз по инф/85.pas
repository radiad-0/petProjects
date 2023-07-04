var a,q,w,e,r,z,x,c,v:integer;
begin
 writeln('a=');
 read(a);
 v:=a div 10000;
 z:=a div 1000;
 x:=a div 100;
 c:=a div 10;
 q:=a mod 10;
 a:=a div 10;
 w:=a mod 10;
 a:=a div 10;
 e:=a mod 10;
 a:=a div 10;
 r:=a mod 10;
 if v=0 then 
 begin
 a:=q*w*e*r;
 end;
 if z=0 then 
 begin
 a:=q*w*e;
 end;
 if x=0 then 
 begin
 a:=q*w;
 end;
 if c=0 then 
 begin
 a:=q;
 end;
 writeln(a);
end.