#!/usr/bin/env python3

import sqlite3 as sql
import random
from config import write, get_out

word = '<h3>no one word in dictionary</h3>'
a1 = '<a class="button" href="/cgi-bin/learn_words/learn_words_a1.py">show translation</a>'
a2 = '<a class="button" href="/cgi-bin/learn_words/learn_words_a2.py">show examples</a>'
a3 = '<a class="button" href="/cgi-bin/learn_words/learn_words.py">skip word</a>'

con = sql.connect("words.db")
with con:
	cur = con.cursor()
	cur.execute("SELECT * FROM words")
	rows = cur.fetchall()

	if len(rows) != 0:
		id_max = rows[len(rows)-1][0] + 1
		random.seed()
		random_id = random.randint(0, id_max)

		for row in rows:
			if row[0] == random_id:
				word = '<h3>' + row[1] + '</h3>'
				break

	get_out(word, a1, a2, a3)

	con.commit()
	cur.close()

write(random_id, word, a1, a2, a3)