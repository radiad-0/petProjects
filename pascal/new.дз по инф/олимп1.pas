var n,q:integer;f1,f2:text;m:string;
begin
 Assign(f1,'a.in');
 Assign(f2,'a.out');
 reset(f1);
 rewrite(f2);
 readln(f1,n);
 q:=0;
 for var i:=1 to n do
 begin
  readln(f1,m);
  if m[10]='6' then
   case m[5] of
   '9':case m[2] of
     '1':if m[1]='0' then q:=q+1;
     '8':if m[1]='0' then q:=q+1;
     '5':if m[1]='1' then q:=q+1;
     '2':if m[1]='2' then q:=q+1;
     '9':if m[1]='2' then q:=q+1;
     end;
   '0':case m[2] of
     '6':if m[1]='0' then q:=q+1;
     '3':if m[1]='1' then q:=q+1;
     '0':if m[1]='2' then q:=q+1;
     '7':if m[1]='2' then q:=q+1;
     end;
   '1':case m[2] of
     '3':if m[1]='0' then q:=q+1;
     '0':if m[1]='1' then q:=q+1;
     '7':if m[1]='1' then q:=q+1;
     '4':if m[1]='2' then q:=q+1;
     end;
   '2':case m[2] of
     '1':if m[1]='0' then q:=q+1;
     '8':if m[1]='0' then q:=q+1;
     '5':if m[1]='1' then q:=q+1;
     '2':if m[1]='2' then q:=q+1;
     '9':if m[1]='2' then q:=q+1;
     end;
   end;
  if m[10]='7' then
     case m[5] of
   '1':case m[2] of
     '5':if m[1]='0' then q:=q+1;
     '2':if m[1]='1' then q:=q+1;
     '9':if m[1]='1' then q:=q+1;
     '6':if m[1]='2' then q:=q+1;
     end;
   '2':case m[2] of
     '2':if m[1]='0' then q:=q+1;
     '9':if m[1]='0' then q:=q+1;
     '6':if m[1]='1' then q:=q+1;
     '3':if m[1]='2' then q:=q+1;
     end;
   '3':case m[2] of
     '2':if m[1]='0' then q:=q+1;
     '9':if m[1]='0' then q:=q+1;
     '6':if m[1]='1' then q:=q+1;
     '3':if m[1]='2' then q:=q+1;
     '0':if m[1]='3' then q:=q+1;
     end;
   '4':case m[2] of
     '6':if m[1]='0' then q:=q+1;
     '3':if m[1]='1' then q:=q+1;
     '0':if m[1]='2' then q:=q+1;
     '7':if m[1]='2' then q:=q+1;
     end;
   '5':case m[2] of
     '4':if m[1]='0' then q:=q+1;
     '1':if m[1]='1' then q:=q+1;
     '8':if m[1]='1' then q:=q+1;
     '5':if m[1]='2' then q:=q+1;
     end;
  end;
 end;
 write(f2,q);
 close(f1);
 close(f2);
end.