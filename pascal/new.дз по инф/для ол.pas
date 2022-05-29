var a,s:integer;s1,s2:text;
begin
 Assign(s1,'s.in');
 Assign(s2,'s.out');
 reset(s1);
 rewrite(s2);
 readln(s1,a);
 s:=a+46;
 writeln(s2,s);
 close(s1);
 close(s2);
end.