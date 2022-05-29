var n,q,w,e,r,t:integer;
begin
 write('n=');readln(n);
  for var i:=1 to n do
  begin
    e:=0;r:=i;t:=i;
    while r>0 do
    begin
     q:=r mod 10;
     r:=r div 10;
     w:=w+1;
    end;
    for var u:=1 to w do
     begin
       q:=t mod 10;
       if q=0 then e:=e+1
       else if i mod q=0 then e:=e+1;
       t:=t div 10;
     end;  
    if e=w then write(i,';'); 
  end;
end. 