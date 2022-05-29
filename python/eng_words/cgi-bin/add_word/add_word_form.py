#!/usr/bin/env python3

f = open('cgi-bin/add_word/add_word', 'r')
print("Content-type: text/html")
print()
print(f.read())
f.close()