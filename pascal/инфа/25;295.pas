var s:string;q,w,e:integer;
begin
 readln(s);
 q:=1;w:=length(s);
 while q<w do
 begin
  if s[q]=s[w] then e:=e+1;
  q:=q+1;w:=w-1;
 end;
 if e=length(s) div 2 then writeln('палиндром')
 else writeln('не палиндом');
end. 
