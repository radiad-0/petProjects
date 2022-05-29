uses crt;

var
  a, a1, a2, a3, per, sa1, sa2, s: string;
  i, i1, q, w, e, ne, en, s2, u1, v, v1, nv, sd, qwe: integer;
  ab, vr: array[,] of integer;
  d: array of string;
  g: char;

begin
  textbackground(0);
  clrscr;
  
  textcolor(10);
  writeln('КАЛЬКУЛЯТОР ЛОГИЧЕСКИХ ВЫРАЖЕНИЙ');
  textcolor(12);
  writeln('Функции:');
  textcolor(14);
  write('1.инверсия - "');textcolor(15);write(' - или -( ... ) ');textcolor(14);writeln('"');
  textcolor(14);
  write('2.конъюкция - "');textcolor(15);write(' * ');textcolor(14);writeln('"');
  textcolor(14);
  write('3.дизюнкция - "');textcolor(15);write(' + ');textcolor(14);writeln('"');
  textcolor(14);
  write('4.имплекация - "');textcolor(15);write(' > ');textcolor(14);writeln('"');
  textcolor(14);
  write('5.эквеволннтность - "');textcolor(15);write(' <> ');textcolor(14);writeln('"');
  textcolor(14);
  write('6.XOR(сложение по модулю 2) - "');textcolor(15);write(' -( <> ) ');textcolor(14);writeln('"'); //для красоты
  textcolor(13);
  writeln('введите пример: ');
  textcolor(15);
  
  qwe := 1;
  
  while qwe = 1 do
  begin
    
    nv := 1;sd := 0;
    
    read(A);
    
    for i := 1 to length(a) do
    begin
      if i > length(a) then break;
      if a[i] = '<' then
      begin
        for var u := i + 1 to length(a) do
          if u + 1 <= length(a) then
            a[u] := a[u + 1];
        a := copy(a, 1, length(a) - 1);
      end;
    end;
    
    per := '';
    for var p := 1 to length(a) do
      if a[p] in ['a'..'z'] then
      begin
        e := 0;
        for var u := 1 to length(per) do
          if per[u] = a[p] then e := 1;
        if e <> 1 then per := per + a[p];
      end;
    //writeln(length(per));//количество логических высказываний
    
    for var u := 1 to length(per) do
      for i := 1 to length(per) do
        if i + 1 <= length(per) then
          if per[i] > per[i + 1] then
          begin
            g := per[i];
            per[i] := per[i + 1];
            per[i + 1] := g;
          end;
    
    e := 0;
    setlength(ab, length(per) + 1, trunc(power(2, length(per))) + 1);
    
    
    for var qe := 1 to length(per) do
      for var qw := 1 to trunc(power(2, length(per))) do
        ab[qe, qw] := 11;
    
    
    e := 0;
    for var p := 1 to length(a) do
      if a[p] in ['+', '-', '*', '<', '>'] then
        e := e + 1;
    //writeln(e);//количество действий
    
    setlength(vr, e + 1, trunc(power(2, length(per))) + 1 );
    
    ne := 2;s2 := 1;u1 := 1;
    for var p := 1 to length(per) do
    begin
      en := 0;
      u1 := 1;
      for var o := 1 to ne do
      begin
        for var u := u1 to trunc(power(2, length(per) - s2)) + u1 - 1 do
          ab[p, u] := en;
        en := en + 1;
        if en mod 2 = 0 then en := 0;
        for var qw := 1 to trunc(power(2, length(per))) do
          if ab[p, qw] = 11 then begin u1 := qw;break; end;
      end;
      s2 := s2 + 1;
      ne := ne * 2;
    end;
    
    s := a;
    //writeln(ab);//проверка
    //writeln(a,' qwe');//проверка
    //____ начало
    
    
    
    
    
    for var sk2 := 1 to length(a) do
      if a[sk2] = ')' then q := q + 1;
    
    for var qw := 1 to q do
      for var sk2 := 1 to length(a) do
      begin
        w := 0;
        if a[sk2] = ')' then
          for var sk1 := sk2 downto 1 do
            if a[sk1] = '(' then
            begin
              
              //1234567890123456789012
              //a*(c+-(-b+c))+b*-(a*c)
              //a*b+-c+a<>b
              
              //writeln(a,' AAA');//проверка
              
              a1 := copy(a, sk1 + 1, sk2 - 1 - sk1);
              a2 := copy(a, 1, sk1 - 1);
              a3 := copy(a, sk2 + 1, length(a) - sk2);
              
              //writeln(a1,' a1 ',sk1,' ',sk2);//проверка
              
              for var o := 1 to length(a1) do
                if a1[o] = '-' then sd := sd + 1;
              
              for var prost := 1 to sd do
                for i := 1 to length(a1) do
                begin
                  if i > length(a1) then break;
                  if a1[i] = '-' then
                  begin
                    v := 0;
                    if a1[i + 1] in ['a'..'z'] then
                    begin
                      for var p := 1 to length(per) do
                      begin
                        v := v + 1;
                        if a1[i + 1] = per[p] then break;
                      end;
                      for var u := 1 to trunc(power(2, length(per))) do
                        if ab[v, u] = 1 then vr[nv, u] := 0
                        else vr[nv, u] := 1;
                    end
                    else for var u := 1 to trunc(power(2, length(per))) do
                        if vr[strtoint(a1[i + 1]), u] = 1 then vr[nv, u] := 0
                        else vr[nv, u] := 1;
                    
                    sa1 := copy(a1, 1, i - 1);
                    sa2 := copy(a1, i + 2, length(a1) - i + 1);
                    a1 := sa1 + inttostr(nv) + sa2;
                    
                    nv := nv + 1;
                  end;
                end;
              
              //writeln(a1,' =a1');//проверка
              
              sd := 0;
              for var o := 1 to length(a1) do
                if a1[o] = '*' then
                  sd := sd + 1;
              
              for var prost := 1 to sd do
                for i := 1 to length(a1) do
                begin
                  if i > length(a1) then break;
                  if a1[i] = '*' then
                  begin
                    v := 0;v1 := 0;
                    if (a1[i - 1] in ['a'..'z']) and (a1[i + 1] in ['a'..'z']) then
                    begin
                      for var p := 1 to length(per) do
                      begin
                        v := v + 1;
                        if a1[i - 1] = per[p] then break;
                      end;
                      for var p := 1 to length(per) do
                      begin
                        v1 := v1 + 1;
                        if a1[i + 1] = per[p] then break;
                      end;
                      for var u := 1 to trunc(power(2, length(per))) do
                        if (ab[v, u] = 1) and (ab[v1, u] = 1) then vr[nv, u] := 1
                        else vr[nv, u] := 0;
                    end;
                    
                    if (a1[i - 1] in ['a'..'z']) and not (a1[i + 1] in ['a'..'z']) then
                    begin
                      for var p := 1 to length(per) do
                      begin
                        v := v + 1;
                        if a1[i - 1] = per[p] then break;
                      end;
                      v1 := strtoint(a1[i + 1]);
                      for var u := 1 to trunc(power(2, length(per))) do
                        if (ab[v, u] = 1) and (vr[v1, u] = 1) then vr[nv, u] := 1
                        else vr[nv, u] := 0;
                    end;
                    
                    if not (a1[i - 1] in ['a'..'z']) and (a1[i + 1] in ['a'..'z']) then
                    begin
                      v := strtoint(a1[i - 1]);
                      for var p := 1 to length(per) do
                      begin
                        v1 := v1 + 1;
                        if a1[i + 1] = per[p] then break;
                      end;
                      for var u := 1 to trunc(power(2, length(per))) do
                        if (vr[v, u] = 1) and (ab[v1, u] = 1) then vr[nv, u] := 1
                        else vr[nv, u] := 0;
                    end;
                    
                    if not (a1[i - 1] in ['a'..'z']) and not (a1[i + 1] in ['a'..'z']) then
                    begin
                      v := strtoint(a1[i - 1]);
                      v1 := strtoint(a1[i + 1]);
                      for var u := 1 to trunc(power(2, length(per))) do
                        if (vr[v, u] = 1) and (vr[v1, u] = 1) then vr[nv, u] := 1
                        else vr[nv, u] := 0;
                    end;
                    
                    sa1 := copy(a1, 1, i - 2);
                    sa2 := copy(a1, i + 2, length(a1) - i + 1);
                    a1 := sa1 + inttostr(nv) + sa2;
                    
                    nv := nv + 1;
                  end;
                end;
              
              //writeln(a1,' =a1');//проверка
              
              sd := 0;
              for var o := 1 to length(a1) do
                if a1[o] in ['+', '<', '>'] then sd := sd + 1;
              
              for var prost := 1 to sd do
                for i := 1 to length(a1) do
                begin
                  if i > length(a1) then break;
                  if a1[i] in ['+', '<', '>'] then
                  begin
                    v := 0;v1 := 0;
                    if (a1[i - 1] in ['a'..'z']) and (a1[i + 1] in ['a'..'z']) then
                    begin
                      for var p := 1 to length(per) do
                      begin
                        v := v + 1;
                        if a1[i - 1] = per[p] then break;
                      end;
                      for var p := 1 to length(per) do
                      begin
                        v1 := v1 + 1;
                        if a1[i + 1] = per[p] then break;
                      end;
                      for var u := 1 to trunc(power(2, length(per))) do
                      begin
                        
                        if a1[i] = '+' then
                          if (ab[v, u] = 0) and (ab[v1, u] = 0) then vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '>' then
                          if (ab[v, u] = 1) and (ab[v1, u] = 0) then vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '<' then
                          if ab[v, u] = ab[v1, u] then vr[nv, u] := 1
                          else vr[nv, u] := 0;
                      end;
                    end;
                    
                    if (a1[i - 1] in ['a'..'z']) and not (a1[i + 1] in ['a'..'z']) then
                    begin
                      for var p := 1 to length(per) do
                      begin
                        v := v + 1;
                        if a1[i - 1] = per[p] then break;
                      end;
                      v1 := strtoint(a1[i + 1]);
                      for var u := 1 to trunc(power(2, length(per))) do
                      begin
                        
                        if a1[i] = '+' then
                          if (ab[v, u] = 0) and (vr[v1, u] = 0) then vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '>' then
                          if (ab[v, u] = 1) and (vr[v1, u] = 0) then vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '<' then
                          if ab[v, u] = vr[v1, u] then vr[nv, u] := 1
                          else vr[nv, u] := 0;
                      end;
                    end;
                    
                    if not (a1[i - 1] in ['a'..'z']) and (a1[i + 1] in ['a'..'z']) then
                    begin
                      v := strtoint(a1[i - 1]);
                      for var p := 1 to length(per) do
                      begin
                        v1 := v1 + 1;
                        if a1[i + 1] = per[p] then break;
                      end;
                      for var u := 1 to trunc(power(2, length(per))) do
                      begin
                        
                        if a1[i] = '+' then
                          if (vr[v, u] = 0) and (ab[v1, u] = 0) then vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '>' then
                          if (vr[v, u] = 1) and (ab[v1, u] = 0) then vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '<' then
                          if vr[v, u] = ab[v1, u] then vr[nv, u] := 1
                          else vr[nv, u] := 0;
                      end;
                    end;
                    
                    if not (a1[i - 1] in ['a'..'z']) and not (a1[i + 1] in ['a'..'z']) then
                    begin
                      v := strtoint(a1[i - 1]);
                      v1 := strtoint(a1[i + 1]);
                      for var u := 1 to trunc(power(2, length(per))) do
                      begin
                        
                        if a1[i] = '+' then
                          if (vr[v, u] = 0) and
                          (vr[v1, u] = 0) then 
                            vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '>' then
                          if (vr[v, u] = 1) and (vr[v1, u] = 0) then vr[nv, u] := 0
                          else vr[nv, u] := 1;
                        
                        if a1[i] = '<' then
                          if vr[v, u] = vr[v1, u] then vr[nv, u] := 1
                          else vr[nv, u] := 0;
                      end;
                    end;
                    
                    sa1 := copy(a1, 1, i - 2);
                    sa2 := copy(a1, i + 2, length(a1) - i + 1);
                    a1 := sa1 + inttostr(nv) + sa2;
                    
                    nv := nv + 1;
                  end;
                end;
              
              //writeln(vr,' =vr'); writeln(a1, ' a1, nv ', nv);//проверка
              
              a := a2 + inttostr(nv - 1) + a3;
              
              w := 1;
              break;
            end;
        if w = 1 then break;
      end;
    
    
    
    
    //___этап 2
    
    for var o := 1 to length(a) do
      if a[o] = '-' then sd := sd + 1;
    
    for var prost := 1 to sd do
      for i := 1 to length(a) do
      begin
        if a[i] = '-' then
        begin
          v := 0;
          if a[i + 1] in ['a'..'z'] then
          begin
            for var p := 1 to length(per) do
            begin
              v := v + 1;
              if a[i + 1] = per[p] then break;
            end;
            for var u := 1 to trunc(power(2, length(per))) do
              if ab[v, u] = 1 then vr[nv, u] := 0
              else vr[nv, u] := 1;
          end
          else for var u := 1 to trunc(power(2, length(per))) do
              if vr[strtoint(a[i + 1]), u] = 1 then vr[nv, u] := 0
              else vr[nv, u] := 1;
          
          sa1 := copy(a, 1, i - 1);
          sa2 := copy(a, i + 2, length(a) - i + 1);
          a := sa1 + inttostr(nv) + sa2;
          
          nv := nv + 1;
          
          break;
        end;
      end;
    
    //writeln(ab);//проверка
    //writeln(a);//проверка
    
    sd := 0;
    for var o := 1 to length(a) do
      if a[o] = '*' then sd := sd + 1;
    
    for var prost := 1 to sd do
      for i := 1 to length(a) do
      begin
        if i > length(a) then break;
        if a[i] = '*' then
        begin
          v := 0;v1 := 0;
          if (a[i - 1] in ['a'..'z']) and (a[i + 1] in ['a'..'z']) then
          begin
            for var p := 1 to length(per) do
            begin
              v := v + 1;
              if a[i - 1] = per[p] then break;
            end;
            for var p := 1 to length(per) do
            begin
              v1 := v1 + 1;
              if a[i + 1] = per[p] then break;
            end;
            for var u := 1 to trunc(power(2, length(per))) do
              if (ab[v, u] = 1) and (ab[v1, u] = 1) then vr[nv, u] := 1
              else vr[nv, u] := 0;
          end;
          
          if (a[i - 1] in ['a'..'z']) and not (a[i + 1] in ['a'..'z']) then
          begin
            for var p := 1 to length(per) do
            begin
              v := v + 1;
              if a[i - 1] = per[p] then break;
            end;
            v1 := strtoint(a[i + 1]);
            for var u := 1 to trunc(power(2, length(per))) do
              if (ab[v, u] = 1) and (vr[v1, u] = 1) then vr[nv, u] := 1
              else vr[nv, u] := 0;
          end;
          
          if not (a[i - 1] in ['a'..'z']) and (a[i + 1] in ['a'..'z']) then
          begin
            v := strtoint(a[i - 1]);
            for var p := 1 to length(per) do
            begin
              v1 := v1 + 1;
              if a[i + 1] = per[p] then break;
            end;
            for var u := 1 to trunc(power(2, length(per))) do
              if (vr[v, u] = 1) and (ab[v1, u] = 1) then vr[nv, u] := 1
              else vr[nv, u] := 0;
          end;
          
          if not (a[i - 1] in ['a'..'z']) and not (a[i + 1] in ['a'..'z']) then
          begin
            v := strtoint(a[i - 1]);
            v1 := strtoint(a[i + 1]);
            for var u := 1 to trunc(power(2, length(per))) do
              if (vr[v, u] = 1) and (vr[v1, u] = 1) then vr[nv, u] := 1
              else vr[nv, u] := 0;
          end;
          
          sa1 := copy(a, 1, i - 2);
          sa2 := copy(a, i + 2, length(a) - i + 1);
          a := sa1 + inttostr(nv) + sa2;
          
          nv := nv + 1;
        end;
      end;
    
    //writeln(a);//проверка
    
    sd := 0;
    for var o := 1 to length(a) do
      if a[o] in ['+', '<', '>'] then sd := sd + 1;
    
    for var prost := 1 to sd do
      for i := 1 to length(a) do
      begin
        if i > length(a) then break;
        if a[i] in ['+', '<', '>'] then
        begin
          v := 0;v1 := 0;
          if (a[i - 1] in ['a'..'z']) and (a[i + 1] in ['a'..'z']) then
          begin
            for var p := 1 to length(per) do
            begin
              v := v + 1;
              if a[i - 1] = per[p] then break;
            end;
            for var p := 1 to length(per) do
            begin
              v1 := v1 + 1;
              if a[i + 1] = per[p] then break;
            end;
            for var u := 1 to trunc(power(2, length(per))) do
            begin
              
              if a[i] = '+' then
                if (ab[v, u] = 0) and (ab[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '>' then
                if (ab[v, u] = 1) and (ab[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '<' then
                if ab[v, u] = ab[v1, u] then vr[nv, u] := 1
                else vr[nv, u] := 0;
            end;
          end;
          
          if (a[i - 1] in ['a'..'z'])
          and not (a[i + 1] in ['a'..'z']) then
          begin
            for var p := 1 to length(per) do
            begin
              v := v + 1;
              if a[i - 1] = per[p] then break;
            end;
            v1 := strtoint(a[i + 1]);
            for var u := 1 to trunc(power(2, length(per))) do
            begin
              
              if a[i] = '+' then
                if (ab[v, u] = 0) and (vr[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '>' then
                if (ab[v, u] = 1) and (vr[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '<' then
                if ab[v, u] = vr[v1, u] then vr[nv, u] := 1
                else vr[nv, u] := 0;
            end;
          end;
          
          if not (a[i - 1] in ['a'..'z']) and (a[i + 1] in ['a'..'z']) then
          begin
            v := strtoint(a[i - 1]);
            for var p := 1 to length(per) do
            begin
              v1 := v1 + 1;
              if a[i + 1] = per[p] then break;
            end;
            for var u := 1 to trunc(power(2, length(per))) do
            begin
              
              if a[i] = '+' then
                if (vr[v, u] = 0) and (ab[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '>' then
                if (vr[v, u] = 1) and (ab[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '<' then
                if vr[v, u] = ab[v1, u] then vr[nv, u] := 1
                else vr[nv, u] := 0;
            end;
          end;
          
          if not (a[i - 1] in ['a'..'z']) and not (a[i + 1] in ['a'..'z']) then
          begin
            v := strtoint(a[i - 1]);
            v1 := strtoint(a[i + 1]);
            for var u := 1 to trunc(power(2, length(per))) do
            begin
              
              if a[i] = '+' then
                if (vr[v, u] = 0) and (vr[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '>' then
                if (vr[v, u] = 1) and (vr[v1, u] = 0) then vr[nv, u] := 0
                else vr[nv, u] := 1;
              
              if a[i] = '<' then
                if vr[v, u] = vr[v1, u] then vr[nv, u] := 1
                else vr[nv, u] := 0;
            end;
          end;
          
          sa1 := copy(a, 1, i - 2);
          sa2 := copy(a, i + 2, length(a) - i + 1);
          a := sa1 + inttostr(nv) + sa2;
          
          nv := nv + 1;
        end;
      end;
    
    //writeln(vr);writeln(a, ' ', nv);//проверка
    
    
    //вывод данных: setlength(vr, e + 1, trunc(power(2, length(per))) + 1 );
    
    q := 0;nv := 1;a := '';i1 := 2;
    for i := 2 to length(s) - 1 do
    begin
      if s[i1] in ['(', ')', '-', '+', '*', '<', '>', 'a'..'z'] then s := copy(s, 1, i1 - 1) + ' ' + copy(s, i1, length(s) - i1 + 1);
      i1 := i1 + 2;
      //writeln(s,' ',i1,' ',i);
    end;
    
    
    setlength(d, length(s) + 1);
    for i := 1 to length(s) do d[i] := ' ';
    
    a := s;
    
    for var sk2 := 1 to length(a) do
      if a[sk2] = ')' then
        for var sk1 := sk2 downto 1 do
          if a[sk1] = '(' then
          begin
            
            for i := sk1 to sk2 do
              if s[i] = '-' then
                if d[i] = ' ' then begin d[i] := inttostr(nv);nv := nv + 1; end;
            for i := sk1 to sk2 do
              if a[i] = '*' then
                if d[i] = ' ' then begin d[i] := inttostr(nv);nv := nv + 1; end;
            for i := sk1 to sk2 do
            begin
              if a[i] in ['>', '+'] then
                if d[i] = ' ' then begin d[i] := inttostr(nv);nv := nv + 1; end;
              if a[i] = '<' then
                if d[i] = ' ' then begin d[i] := inttostr(nv) + ' ';nv := nv + 1; end;
            end;
            
            a[sk1] := ' ';
            a[sk2] := ' ';
            
            break;
          end;
    
    for i := 1 to length(s) do
      if s[i] = '-' then
        if d[i] = ' ' then begin d[i] := inttostr(nv);nv := nv + 1; end;
    for i := 1 to length(s) do
      if s[i] = '*' then
        if d[i] = ' ' then begin d[i] := inttostr(nv);nv := nv + 1; end;
    for i := 1 to length(s) do
    begin
      if s[i] in ['>', '+'] then
        if d[i] = ' ' then begin d[i] := inttostr(nv);nv := nv + 1; end;
      if s[i] = '<' then
        if d[i] = ' ' then begin d[i] := inttostr(nv) + ' ';nv := nv + 1; end;
    end;
    
    writeln;textcolor(11);
    for i := 1 to length(s) do
      write(d[i]);
    writeln;
    
    textcolor(15);
    for i := 2 to length(s) do
      if s[i] = '<' then begin
        s := copy(s, 1, i) + '>' + copy(s, i + 1, length(s) - i);
      end;
    s := copy(s, 1, length(s) - 1) + ' ' + s[length(s)];
    writeln(s);
    
    q := 0;
    textcolor(14);
    for var st := 1 to length(per) do
    begin
      write(per[st], ' ');
      q := q + 1;
    end;
    write(' ');
    for i := 1 to nv - 1 do
      write(i, ' ');
    writeln;
    
    textcolor(15);
    for i := 1 to trunc(power(2, length(per))) do
    begin
      for var o := 1 to length(per) do
        write(ab[o, i], ' ');write(' ');
      for var u := 1 to e do
        write(vr[u, i], ' ');
      writeln;
    end;
    
    writeln('продолжить вычесления - 1');
    writeln('закончить программу - 0');
    readln(qwe);
    if qwe = 1 then begin
      textcolor(13);
      writeln('введите пример: ');
      textcolor(15);
    end;
    
  end;
end.