var q,w,e:integer;
{1*32 надо сколько способов на 1*1 и 1*5}
begin
 e:=0;
 for var i:=0 to 5 do
 begin
  q:=(32-5*i-4);
  w:=1;
  while w<(32-5*i-4) do
  begin
   q:=q+i*(32-5*i-4-w);writeln(q,' ',w);
   w:=w+1;
  end;
  e:=e+q;
  writeln(e,'e');
 end;
 write(e+1);
end.