var q,w,e,r:integer;f1,f2:text;n,s,d,f:string;a:array[0..10000000] of string;b:array[0..100] of integer;
{
11 10
       p  
 cucumber 
 a a   a  
 r b     p
 r b p   u
tomato g m
 t g t a p
   e a r k
     t l i
     onion
       c  
}
begin
 Assign(f1,'a.in');
 Assign(f2,'a.out');
 reset(f1);
 rewrite(f2);
 readln(f1,q,w);
 e:=0;
 for var i:=1 to q{строк} do begin
  readln(f1,n);
  r:=0;
  for var u:=1 to w{символ} do
  begin
   if n[u]='.' then else
   begin
    e:=e+1;
    r:=r+1;
    a[i]:=a[i]+IntToStr(u);
   end;
  end;
  b[i]:=r;
 end;
 for var y:=1 to q do
 for var l:=1 to b[y-1] do
 for var o:=1 to b[y] do
 for var p:=1 to b[y+1] do
 begin
  s:=a[y];
  d:=a[y+1];
  f:=a[y-1];
  if (s[o]<>f[l]) and (s[o]=d[p]) then
  e:=e+5;writeln(f,' ',s,' ',d,' ',e);
 end;
 write(e);
 close(f1);
 close(f2);
end.
 