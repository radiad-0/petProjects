var n,m,q,w,e:integer;
 begin
 write('n=');readln(n);
 write('m=');readln(m);
 w:=0;
 for var u:=n to m do
 begin
  q:=0;
  for var i:=1 to u do
  begin
   if u mod i=0 then
    q:=q+1;
  end;
   if w<q then
   begin
    w:=q;e:=u;
   end  
 end;
  writeln(e);
end.