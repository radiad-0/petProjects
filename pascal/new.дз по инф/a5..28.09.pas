{1430}
var n,q,w:integer;f1,f2:text;
begin
 Assign(f1,'a5.1..28.09.txt');
 Assign(f2,'a5.2..28.09.txt');
 reset(f1);
 rewrite(f2);
 readln(f1,n);
 q:=1;w:=1;
 while n>0 do
 begin
  for var i:=w to q do write(f2,q,' ');
  if n-q>q then n:=n-q
  else if n<>1 then 
       begin w:=n-q;
        n:=0;
        q:=q+1;
        for var u:=1 to w do write(f2,q,' ');
       end;
  q:=q+1;
 end;
 close(f1);
 close(f2);
end.