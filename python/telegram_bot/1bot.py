from config import API_TOKEN, dict_of_cities, states, messeges
import logging
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.contrib.middlewares.logging import LoggingMiddleware
from aiogram import Bot, Dispatcher, executor, types

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot, storage=MemoryStorage())
dp.middleware.setup(LoggingMiddleware())


@dp.message_handler(commands=['start'])
async def process_start_command(message: types.Message):
    await message.answer(messeges.start)

@dp.message_handler(commands=['help'])
async def process_help_command(message: types.Message):
    await message.answer(messeges.help)

@dp.message_handler(lambda message: message.text == 'погода', state='*')
async def weather_part_0(message:types.Message):
    state = dp.current_state(user=message.from_user.id)
    await state.set_state(states[0])
    await message.answer(messeges.which_city)
@dp.message_handler(state=states[0])
async def weather_part_1(message:types.Message):
    if message.text in dict_of_cities:
        state = dp.current_state(user=message.from_user.id)
        await state.reset_state()
        await message.answer(messeges.get_weather(message.text))
    else:
        await message.answer(messeges.city_not_found)

@dp.message_handler()
async def echo(message: types.Message):
    await message.answer(message.text)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)