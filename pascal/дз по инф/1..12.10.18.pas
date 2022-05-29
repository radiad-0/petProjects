var a,b,c,d:integer;q,w:real;
begin
 readln(a,b,c,d);w:=0;
 q:=(a*5+b*4+c*3+d*2)/(a+b+c+d);
 while 1>0 do
 begin
  if (((a+w)*5+b*4+c*3+d*2)/((a+w)+b+c+d))>=4.5 then break
  else w:=w+1;
 end;
 write(q,' ',w)
end.