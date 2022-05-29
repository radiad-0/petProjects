import config
import requests
from bs4 import BeautifulSoup as BS

def get_weather(city):

	HEADERS = {'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3', 'accept-encoding':'gzip, deflate, br', 'accept-language':'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7', 'cache-control':'no-cache', 'dnt': '1', 'pragma': 'no-cache', 'sec-fetch-mode': 'navigate', 'sec-fetch-site': 'none', 'sec-fetch-user': '?1', 'upgrade-insecure-requests': '1', 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'}
	URL = 'https://yandex.ru' + config.dict_of_cities[city]
	r = requests.get(URL)
	soup = BS(r.content, 'html.parser')

	weather_all = ''

	#city name
	item = soup.find('h1', class_ = 'title')
	weather_all += 'В' + item.text[8:]

	#time
	item = soup.find('time', class_ = 'time')
	weather_all += ' c' + item.text[1:]

	item = soup.find('div', class_ = 'fact__temp-wrap')

	#cloudy
	weather_all += item.find('div', class_ = 'link__condition').text

	#precipitation for 2 hours
	weather_all += ', ' + soup.find('p', class_ = 'maps-widget-fact__title').text

	#temp_now
	weather_all += '\n' + item.find('span', class_ = 'temp__value').text

	#feel
	weather_all += ' (' + item.find('div', class_ = 'term__label').text

	#feel_temp
	weather_all += ' ' + item.find_all('span', class_ = 'temp__value')[1].text + ')'

	item = soup.find('div', class_ = 'fact__props')
	arr = item.find_all('div', class_ = 'term__value')

	#wind
	weather_all += '\n' + 'Ветер ' + arr[0].text

	#humidity
	weather_all += ' | ' + 'Влажность ' + arr[1].text

	#pressure
	weather_all += ' | ' + 'Давление ' + arr[2].text

	#sunrise & sunset
	item = soup.find_all('div', class_ = 'sun-card__sunrise-sunset-info')
	weather_all += '\n' + item[0].text[:6] + ' в ' + item[0].text[6:]
	weather_all += ' | ' + item[1].text[:5] + ' в ' + item[1].text[5:]

	return weather_all