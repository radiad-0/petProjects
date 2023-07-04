var q,w,e,r,t,x1,x2,x3,x4,y1,y3:integer;
begin
 write('x1=');readln(x1);
 write('x2=');readln(x2);
 write('x3=');readln(x3);
 write('x4=');readln(x4);
 write('y1=');readln(y1);
 write('y3=');readln(y3);
 if (x3>x2) or (x1>x4) then  write('фигуры не пересекаются')
 else
  begin
  writeln('фигуры пересекаются');
  w:=abs(y1-y3);
  q:=x2-x3;r:=x2-x1;
  e:=x4-x1;t:=x4-x3;
  if (x3<=x2) and (x3>=x1) and (x4>x2) then writeln('S=',q*w);
  if (x4>=x1) and (x2>=x4) and (x1>x3) then writeln('S=',e*w);
  if (x4>=x2) and (x1>=x3) then writeln('S=',r*w);
  if (x2>x4) and (x3>x1) then writeln('S=',t*w);
  end;
end.