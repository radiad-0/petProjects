#!/usr/bin/env python3

import sqlite3 as sql
from config import write, get_out, get

id, word, a1, a2, a3 = get()
a1 = '<h3>no one word in dictionary</h3>'

con = sql.connect("words.db")
with con:
	cur = con.cursor()
	cur.execute("SELECT * FROM words")
	rows = cur.fetchall()

	for row in rows:
		if row[0] == id:
			a1 = '<h3>' + row[2] + '</h3>'
			break
	get_out(word, a1, a2, a3)

	con.commit()
	cur.close()

write(id, word, a1, a2, a3)