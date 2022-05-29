var n,k,q,a,w:integer;
begin
writeln('n=');
read(n);
writeln('k=');
read(k);
q:=n div 10;
w:=k div 10;
if q=0 then
begin
if w=0 then
begin
a:=100*k+10*n+1*k;
end
a:=100*k+10*n+1*k;
end
else
begin
a:=1000*k+10*n+k;
end;
write(a);
end.