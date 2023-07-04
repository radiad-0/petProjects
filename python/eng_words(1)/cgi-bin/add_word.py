#!/usr/bin/env python3

import cgi
import sqlite3 as sql

form = cgi.FieldStorage()
word = form.getfirst("word", None)
translation = form.getfirst("translation", None)
example1 = form.getfirst("example1", None)
example2 = form.getfirst("example2", None)
example3 = form.getfirst("example3", None)
example4 = form.getfirst("example4", None)
example5 = form.getfirst("example5", None)

con = sql.connect('words.db')
with con:
	cur = con.cursor()
	cur.execute("CREATE TABLE IF NOT EXISTS `words` (id INTEGER, `word` STRING, `translation` STRING, `example1` STRING, `example2` STRING, `example3` STRING, `example4` STRING, `example5` STRING)")
	cur.execute("SELECT * FROM `words`")
	rows = cur.fetchall()

	if len(rows) != 0:
		id = rows[len(rows)-1][0] + 1
	else:
		id = 0

	cur.execute('INSERT INTO `words` VALUES ({}, "{}", "{}", "{}", "{}", "{}", "{}", "{}")'.format(id, word, translation, example1, example2, example3, example4, example5))
	con.commit()
	cur.close()
	
print("Content-type: text/html")
print()
print("<script>window.location = 'http://localhost:8000/add_word.html'</script>")