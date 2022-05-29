﻿var
  i, u, n, q: integer;
  a: array [,] of integer;
 
begin
  read(n);
  setlength(a, n + 1, n + 1);
  for i := 1 to n do
    for u := 1 to n do
    begin
      read(a[i, u]);
    end;
  q := 0;
  for i := 1 to n do
  begin
    for u := n downto i + 1 do
      if a[i, u] <> a[u, i] then begin q := 1; break; end;
    if q = 1 then break;
  end;
 
  if q = 1 then write('no')
  else write('yes');
end.
