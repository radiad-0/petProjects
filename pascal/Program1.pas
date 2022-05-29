var
  s: string;
  i, l: integer;

begin
  read(s);
  l := length(s);
  i := 1;
  while i < l do
  begin
    if s[i] + s[i + 1] = '33' then begin
      s := copy(s, 1, i - 1) + '2' + copy(s, i + 2, l - i - 1);
      l := l - 1;
      i := 0;
    end
    else if s[i] + s[i + 1] = '22' then begin;
      s := copy(s, 1, i - 1) + '3' + copy(s, i + 2, l - i - 1);
      l := l - 1;
      i := 0;
    end;
    i := i + 1;
  end;
  write(s);
end.