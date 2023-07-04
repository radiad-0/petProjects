#!/usr/bin/env python3

import sqlite3 as sql

con = sql.connect('words.db')
with con:
	cur = con.cursor()
	cur.execute("SELECT * FROM words")
	rows = cur.fetchall()
	if len(rows) != 0:
		id_max = rows[len(rows)-1][0]
		cur.execute('DELETE FROM words WHERE id={};'.format(id_max))
		con.commit()
	cur.close()

print("Content-type: text/html")
print()
print('<script>window.location="/cgi-bin/dictionary/dictionary.py"</script>')