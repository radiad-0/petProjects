var n:string;a:array[0..1000000] of string;f1,f2:text;q:integer;
begin 
 Assign(f1,'a3.1..28.09.txt');
 Assign(f2,'a3.2..28.09.txt');
 reset(f1);
 rewrite(f2);
 readln(f1,n);q:=1;
 for var i11:=1 to length(n) do
 if n[i11]='1' then begin a[q]:='1'; q:=q+1; break end;
 for var i:=1 to length(n) do
 begin
  for var i1:=1 to length(n) do
  if n[i1]='0' then begin a[q]:='0'; q:=q+1; end;
  for var i2:=1 to length(n) do
  if n[i2]='1' then begin a[q]:='1'; q:=q+1; end;
  for var i3:=1 to length(n) do
  if n[i3]='2' then begin a[q]:='2'; q:=q+1; end;
  for var i4:=1 to length(n) do
  if n[i4]='3' then begin a[q]:='3'; q:=q+1; end;
  for var i5:=1 to length(n) do
  if n[i5]='4' then begin a[q]:='4'; q:=q+1; end;
  for var i6:=1 to length(n) do
  if n[i6]='5' then begin a[q]:='5'; q:=q+1; end;
  for var i7:=1 to length(n) do
  if n[i7]='6' then begin a[q]:='6'; q:=q+1; end;
  for var i8:=1 to length(n) do
  if n[i8]='7' then begin a[q]:='7'; q:=q+1; end;
  for var i9:=1 to length(n) do
  if n[i9]='8' then begin a[q]:='8'; q:=q+1; end;
  for var i0:=1 to length(n) do
  if n[i0]='9' then begin a[q]:='9'; q:=q+1; end;
 end;
 for var u:=1 to length(n) do
 write(f2,a[u]);
 close(f1);
 close(f2);
end.