var n,q,w,e:integer;f1,f2:text;
begin
 Assign(f1,'дзна1.1..13.10.18');
 Assign(f2,'дзна1.2..13.10.18');
 reset(f1);
 rewrite(f2);
 readln(f1,n);
 w:=0;e:=10;
 while n>0 do
 begin
  q:=n mod 10;
  n:=n div 10;
  if q>w then w:=q;
  if q<e then e:=q;
 end;
 write(f2,e,' ',w);
 close(f1);
 close(f2);
end.