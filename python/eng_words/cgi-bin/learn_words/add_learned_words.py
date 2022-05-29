#!/usr/bin/env python3

import sqlite3 as sql
from config import write, get_out, get

id, word, a1, a2, a3 = get()
temp = []

con = sql.connect("words.db")
with con:
	cur = con.cursor()
	cur.execute("SELECT * FROM words")
	rows = cur.fetchall()

	for row in rows:
		if row[0] == id:
			temp = row
			break
	cur.execute('DELETE FROM words WHERE id={};'.format(id))

	cur.execute("SELECT * FROM words")
	rows = cur.fetchall()
	id = 0
	for row in rows:
		cur.execute("UPDATE words SET id = {} WHERE word = '{}'".format(id, row[1]))
		id += 1


	cur.execute("SELECT * FROM learned_words")
	rows = cur.fetchall()

	if len(rows) != 0:
		id = rows[len(rows)-1][0] + 1
	else:
		id = 0

	cur.execute('INSERT INTO `learned_words` VALUES ({}, "{}", "{}", "{}", "{}", "{}", "{}", "{}")'.format(id, temp[1], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7]))

	con.commit()
	cur.close()

print("Content-type: text/html")
print()
print('<script>window.location="/cgi-bin/learn_words/learn_words.py"</script>')