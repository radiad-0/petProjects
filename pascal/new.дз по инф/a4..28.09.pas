{346}
var n,q,w,e,a:integer;f1,f2:text;
begin
 Assign(f1,'a4.1..28.09.txt');
 Assign(f2,'a4.2..28.09.txt');
 reset(f1);
 rewrite(f2);
 readln(f1,n);
 q:=0;w:=0;e:=0;
 for var i:=1 to n do
 begin
  readln(f1,a);
  if a=0 then q:=q+1;
  if a>0 then w:=w+1;
  if a<0 then e:=e+1;
 end;
 writeln(f2,q,' ',w,' ',e);
 close(f1);
 close(f2);
end.