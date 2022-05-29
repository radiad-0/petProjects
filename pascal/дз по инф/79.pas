var a,s:integer;
begin
 writeln('a=');
 read(a);
 s:=a mod 10;
 s:=s*s*s;
 s:=s mod 10;
 writeln('s=');
 write(s);
end.