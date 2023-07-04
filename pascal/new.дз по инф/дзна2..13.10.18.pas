var n,e,i,r:integer;f1,f2:text;q,w:real;
begin
 Assign(f1,'дзна2.1..13.10.18');
 Assign(f2,'дзна2.2..13.10.18');
 reset(f1);
 rewrite(f2);
 readln(f1,n);
 w:=0;e:=0;i:=0;r:=n;
 while r>0 do begin
 r:=r div 10;i:=i+1;end;
 for var u:=i downto 1 do
 begin
  q:=n mod 10;
  n:=n div 10;
  w:=w+q*power(10,u-1);
  e:=e+1;
 end;
 w:=w*2;
 write(f2,w);
 close(f1);
 close(f2);
end.