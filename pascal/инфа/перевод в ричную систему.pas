var q,w,e,r:integer;t:real;
begin
 write('����� � 10�� ������� ���������� - ');readln(q);
 write('������� ���������� - ');readln(e);
 t:=0;r:=0;
 while q>0 do 
 begin
  w:=q mod e;
  q:=q div e;
  t:=t+w*Power(10,r);
  r:=r+1;
 end;
 write('����� � ������� ���������� ',e,' - ',t);
end.