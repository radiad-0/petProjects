var m,n,q,i,w,e,u:integer;s1,s2:text;
begin
 Assign(s1,'s.in');
 Assign(s2,'s.out');
 reset(s1);
 rewrite(s2);
 readln(s1,m,n);
 q:=0;i:=0; 
 if n=1 then
  for i:=1 to m do q:=q+i
 else if m=1 then for i:=1 to n do q:=q+i
  else begin
   for i:=1 to n do q:=q+i;w:=m*q+(q-n)+1;
   for i:=1 to m do q:=q+i;e:=n*q-m*n+(q-m);
 end;
 if m<=n then for u:=n downto 1 do 
 if n=u then n:=n-1
 else m:=m*n;
 writeln(s2,q);
 close(s1);
 close(s2);
end.