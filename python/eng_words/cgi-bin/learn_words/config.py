def write(id, word, a1, a2, a3):
	f = open('cgi-bin/learn_words/learn_words', 'w')
	f.write(str(id) + '\n' + word + '\n' + a1 + '\n' + a2 + '\n' + a3)
	f.close()

def get_out(word, a1, a2, a3):
	f = open('cgi-bin/learn_words/LEARN_WORDS', 'r')
	print("Content-type: text/html")
	print()
	print(f.read().format(word, a1, a2, a3))
	f.close()

def get():
	f = open('cgi-bin/learn_words/learn_words', 'r')
	rls = f.readlines()
	id = int(rls[0])
	word = rls[1][:len(rls[1])-1]
	a1 = rls[2][:len(rls[2])-1]
	a2 = rls[3][:len(rls[3])-1]
	a3 = rls[4]
	f.close()
	return [id, word, a1, a2, a3]