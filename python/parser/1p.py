print("Hello \nI'm parser")

import requests
from bs4 import BeautifulSoup as BS

quest = '%'.join(input().split())
HEADERS = {'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3', 'accept-encoding':'gzip, deflate, br', 'accept-language':'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7', 'cache-control':'no-cache', 'dnt': '1', 'pragma': 'no-cache', 'sec-fetch-mode': 'navigate', 'sec-fetch-site': 'none', 'sec-fetch-user': '?1', 'upgrade-insecure-requests': '1', 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'}
URL = 'https://yandex.ru/search/?text=' + quest + '&lr=172'
r = requests.get(URL)
soup = BS(r.content, 'html.parser')
item = soup.select('div', class_ = 'fact-layout')
soup = BS(str(item), 'html.parser')
ressult = soup.find('div', class_ = 'fact__description')
print(ressult)
if not ressult:
	ressult = soup.find('div', class_ = 'fact-answer')
	print(ressult)
if ressult:
	print(ressult.text)