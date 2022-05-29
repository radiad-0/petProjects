var a,m:integer;q,w,e,r:real;
begin
 writeln('a=');
 read(a);
 writeln('m=');
 read(m);
 q:=m*0.000001;
 w:=m*0.001;
 e:=m*1000;
 r:=m*100;
 case a of
 1: writeln(m,'килограмм');
 2: writeln(q,'килограмм');
 3: writeln(w,'килограмм');
 4: writeln(e,'килограмм');
 5: writeln(r,'килограмм');
 else writeln(a,'нет такой еденицы');
 end;
end.