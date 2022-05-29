var m,q,w,e,r:integer;
 begin
 writeln('m=');readln(m);
 e:=9;
 for var i:=10 to 99 do
 begin
  e:=e+1;
  q:=e mod 10;
  w:=e div 10;
  q:=q*q;
  w:=W*w;
  r:=q+w;
  if r mod m=0 then 
  write(e,';');
 end;
end.