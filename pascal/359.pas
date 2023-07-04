﻿var
  i, u, n, m, q, w: integer;
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
    w:=w+1;
 
  write(w);
 
end.