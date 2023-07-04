#!/usr/bin/env python3

f = open('cgi-bin/dictionary/edit_dictionary/edit_dictionary', 'r')
print("Content-type: text/html")
print()
print(f.read())
f.close()