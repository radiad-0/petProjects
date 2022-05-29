﻿var
  i, u, n, m, q, w, p: integer;
  a: array [,] of integer;
  d: array of integer;
 
begin
  read(n, m);
  setlength(a, n + 1, m + 1);
  setlength(d, n + 1);
  for i := 1 to n do
    for u := 0 to m - 1 do
    begin
      read(a[i, u]);
    end;
 
  for i := 1 to n do
  begin
    d[i] := -1;
    for u := 0 to m - 1 do
      if a[i, u] > d[i] then d[i] := a[i, u];
  end;
 
  q := -1; w := 0;
  for i := 1 to n do
    if d[i] > q then q := d[i];
 
  for i := 1 to n do
    if d[i] = q then
    begin
     
      w := w + 1; u := i;
     
      if w = 2 then
      begin
       
        for u := 1 to n do
          if d[u] = q then
          begin
            d[u] := 0;
            for p := 0 to m - 1 do
              d[u] := d[u] + a[u, p];
          end
          else d[u] := 0;
       
        break;
       
      end;
    end;
 
  if w <> 1 then begin
   
    q := -1;
    for i := 1 to n do
      if d[i] > q then q := d[i];
   
    for i := 1 to n do
      if d[i] = q then
      begin
       
        u := i;
        break;
       
      end;
  end;
 
  write(u - 1);
 
end.
