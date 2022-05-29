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
con = sql.connect("words.db")
with con:
	cur = con.cursor()
	cur.execute("SELECT * FROM words")
	rows = cur.fetchall()

	number = 0
	for row in rows:
		number += 1
		a = "onclick='{}'".format('window.open("https://translate.google.com/?sl=en&tl=ru&text={}&op=translate")'.format(row[1]))
		a_edit = "onclick='{}'".format('window.location = "/cgi-bin/dictionary/edit_dictionary/edit_dictionary_form.py"')
		table1 += '<tr {}><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td {}>edit</td></tr>'.format(*f(a, number, row[1], row[2], row[3], row[4], row[5], row[6], row[7], a_edit))

	cur.execute("SELECT * FROM learned_words")
	rows = cur.fetchall()

	number = 0
	for row in rows:
		number += 1
		a = "onclick='{}'".format('window.open("https://translate.google.com/?sl=en&tl=ru&text={}&op=translate")'.format(row[1]))
		table2 += '<tr {}><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>'.format(*f(a, number, row[1], row[2], row[3], row[4], row[5], row[6], row[7]))

	con.commit()
	cur.close()

f = open('cgi-bin/dictionary/dictionary', 'r')
print("Content-type: text/html")
print()
print(f.read().format(table1, table2))
f.close()
#href="delete_last_entry.py"