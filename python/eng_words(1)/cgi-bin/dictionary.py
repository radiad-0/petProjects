#!/usr/bin/env python3

import sqlite3 as sql

def f(*arr):
	args = list(arr)
	for i in range(len(arr)):
		if arr[i] == 'None':
			args[i] = '-'
	return args

table1 = ''
table2 = ''
con = sql.connect("/home/aidar/1/python/eng_words/words.db")
with con:
	cur = con.cursor()
	cur.execute("SELECT * FROM words")
	rows = cur.fetchall()

	for row in rows:
		a = "onclick='{}'".format('window.open("https://translate.google.com/?sl=en&tl=ru&text={}&op=translate")'.format(row[1]))
		table1 += '<tr {}><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>'.format(*f(a, row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]))

	cur.execute("SELECT * FROM learned_words")
	rows = cur.fetchall()

	for row in rows:
		a = "onclick='{}'".format('window.open("https://translate.google.com/?sl=en&tl=ru&text={}&op=translate")'.format(row[1]))
		table2 += '<tr {}><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>'.format(*f(a, row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]))

	con.commit()
	cur.close()

f = open('cgi-bin/dictionary', 'r')
print("Content-type: text/html")
print()
print(f.read().format(table1, table2))
f.close()
#href="delete_last_entry.py"