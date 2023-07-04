var a:array[0..100] of integer;q,w,e,r:integer;
const n=5;
begin
 q:=0;w:=10000000000;
 for var i:=1 to n do
 begin
 write('a[',i,']=');read(a[i]);
 if a[i]>q then begin q:=a[i]; e:=i; end;
 if a[i]<w then begin w:=a[i]; r:=i; end;
 end;
 a[e]:=w;a[r]:=q;
 for var i:=1 to n do
 write(a[i],' ');
end.
 