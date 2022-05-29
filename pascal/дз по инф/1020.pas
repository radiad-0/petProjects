var n,q,w:integer;a:string;
begin
 readln(n);w:=0;a:='NO';
 for var i:=1 to n do
 begin
  readln(q);
  if w<q then w:=q;
  if q=0 then a:='YES';
 end;
 writeln(w);
 writeln(a);
end.