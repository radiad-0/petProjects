var s,a,d:string;
begin
 readln(s);
  while pos(' ',s)>0 do
 begin
  a:=copy(s,1,pos(' ',s)-1);
   for var i:=length(a) downto 1 do
   begin
    d:=d+a[i];
   end;
   d:=d+' ';
  delete(s,1,pos(' ',s));
 end;
 for var i:=length(s) downto 1 do
   begin
    d:=d+s[i];
   end;
 writeln(d);
end. 