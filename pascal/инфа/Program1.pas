var w,q:real;
begin
 while q>-999 do
  if (trunc(q+1/q)=q+1/q) and (trunc(4*q-q*q)=4*q-q*q) then
  w:=w+abs(q);
end.