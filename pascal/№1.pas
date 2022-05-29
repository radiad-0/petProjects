var s, s1: string;
  q, i: integer;

begin
  read(s);
  s := s + ' ';
  q := -1;
  while s <> '' do
    for i := 1 to length(s) do
      if s[i] = ' ' then
      begin
        s1 := copy(s, 1, i - 1);
        if s1[1]=s1[length(s1)] then
        writeln(s1);
        delete(s, 1, i);
        break;
      end;
end.