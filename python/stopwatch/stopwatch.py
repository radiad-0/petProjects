# секундомер
# графика - tkinter

import mouse
import tkinter

# глобальный счетчик времени
counter = 0

# ключ активности таймера
running = False

def counter_label(label):

	def count():
		if running:
			global counter

			# распределение счестчика на секунды, минуты, часы и дни
			temp_count = counter
			
			msecs = temp_count % 100
			temp_count //= 100

			secs = temp_count % 60
			temp_count //= 60

			mins = temp_count % 60
			temp_count //= 60

			hours = temp_count % 24
			temp_count //= 24

			days = temp_count

			# форматиравание времени с разделителем ":"
			stime = str(days).zfill(2) + str(hours).zfill(2) + str(mins).zfill(2) + str(secs).zfill(2) + str(msecs).zfill(2)
			temp_count = int(stime)
			display = ''
			separators = 0

			while temp_count > 0:
				display = str(temp_count % 100).zfill(2) + display
				temp_count //= 100
				if temp_count == 0 and separators:
					break
				display = ':' + display
				separators += 1

			if int(stime) > 360000:
				separators -= 1
				display = display[:len(display)-3]

			display = display.zfill(separators*3+2)



			label['text'] = display   # Или label.config (text = display)

			# label.after (arg1, arg2) задерживает
			# первый аргумент в миллисекундах
			# и затем вызывает функцию, заданную в качестве второго аргумента.
			# Вообще как здесь нам нужно позвонить
			# функция, в которой он присутствует повторно.
			# Задержка на 1000 мс = 1 секунда и повторный счетчик вызовов.

			label.after(10, count) 

			counter += 1

	# Запуск запуска счетчика.
	count()     


# функции кнопок
def Start(label):
	global running
	running = True
	counter_label(label)
	start['state'] = 'disabled'
	stop['state'] = 'normal'
	reset['state'] = 'normal'

def Stop():
	global running
	start['state'] = 'normal'
	stop['state'] = 'disabled'
	reset['state'] = 'normal'
	running = False

def Reset(label):
	global counter, running
	counter = 0

	reset['state'] = 'disabled'
	label['text'] = '00:00'

	if running == True:
		running = False
		start['state'] = 'normal'
		stop['state'] = 'disabled'



# код для работы перетаскивания окна ( https://coderoad.ru/29641616/Перетаскивание-окна-при-использовании-overrideredirect )
global x, y

def standard_bind():
   root.bind('<B1-Motion>', lambda e: event(e, Mode=True))

def event(widget, Mode=False):
	global x, y
	if Mode:
		x = widget.x
		y = widget.y
	root.bind('<B1-Motion>', lambda e: event(e))
	root.geometry('+%d+%d' % (mouse.get_position()[0]-x, mouse.get_position()[1]-y))

root = tkinter.Tk()

root.overrideredirect(True)
root.bind('<B1-Motion>', lambda e: event(e, Mode=True))
root.bind('<ButtonRelease-1>', lambda e: standard_bind())



# название (которое не отображается)
root.title("Stopwatch")
# размер окна
root.geometry('230x73')


# элементы в окне
label = tkinter.Label(root, text="00:00", fg="#7fc7ff", font="Verdana 22")
start = tkinter.Button(root, text='Start', fg="#FFCC00", command=lambda:Start(label))
stop = tkinter.Button(root, text='Stop', fg="#FFCC00", state='disabled', command=Stop)
reset = tkinter.Button(root, text='Reset', fg="#FFCC00", state='disabled', command=lambda:Reset(label))
close = tkinter.Button(root, text='close', fg="#FF0033", command=root.destroy)

root.configure(background='#181818')
label.configure(background='#181818')
start.configure(background='#181818', highlightbackground='#181818')
stop.configure(background='#181818', highlightbackground='#181818')
reset.configure(background='#181818', highlightbackground='#181818')
close.configure(background='#181818', highlightbackground='#181818')


# общая прозрачность
root.wait_visibility(root)
root.attributes("-alpha", 0.8)

# позиционирование элементов ( https://metanit.com/python/tutorial/9.4.php )
label.pack()
start.place(x=3, y=42, height=30, width=55)
stop.place(x=59, y=42, height=30, width=55)
reset.place(x=115, y=42, height=30, width=55)
close.place(x=171, y=42, height=30, width=55)


root.mainloop()