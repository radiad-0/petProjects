document.addEventListener('DOMContentLoaded', mainMenu);

function mainMenu() {
	$("#body").html(mainPageInnerHTML);
	$("#show-empty").on('click', mainClickShowEmpty);
	$('#edit').on('click', mainClickEdit);
	$("#show-all").on('click', mainClickShowAll);
}

function mainClickShowEmpty() {
	$("#body").html(showEmptyPageInnerHTML);
	$("#edit").on('click', showEmptyClickAdd);
	$("#back").on('click', mainMenu);
}

function showEmptyClickAdd() {
	$("#body").html(addPageInnerHTML);
	$("#ready").on('click', function () {});
	$("#back").on('click', mainClickShowEmpty);
}

function mainClickEdit() {
	$("#body").html(editPageInnerHTML);
	$("#found").on('click', function () {});
	$("#back").on('click', mainMenu);
}

function mainClickShowAll() {
	$("#body").html(showAllPageInnerHTML);
	$("#back").on('click', mainMenu);
}


const mainPageInnerHTML =
	'<div class="menu">\n' +
	'    <div class="page">\n' +
	'        <div id="show-empty" class="button">Показать незаполненные</div>\n' +
	'        <div id="edit" class="button">Найти по трек номеру</div>\n' +
	'    </div>\n' +
	'    <div id="show-all" class="button single">Показать все</div>\n' +
	'</div>\n';

const showEmptyPageInnerHTML =
	'<div class="menu">\n' +
	'    <div class="page">\n' +
	'        <div id="edit" class="button">Редактировать</div>\n' +
	'        <div id="back" class="button">Назад</div>\n' +
	'    </div>\n' +
	'</div>\n' +
	'<div class="table">\n' +
	'    <table border="1">\n' +
	'        <caption>База данных</caption>\n' +
	'        <tr>\n' +
	'            <th>№</th>\n' +
	'            <th>x</th>\n' +
	'            <th>y</th>\n' +
	'            <th>R</th>\n' +
	'            <th>Result</th>\n' +
	'            <th>Start time of script</th>\n' +
	'            <th>End time of script</th>\n' +
	'            <th>script running time</th>\n' +
	'        </tr>\n' +
	'        <tr>\n' +
	'            <td><div class="text">123456789</div></td>\n' +
	'            <td><div class="text">NULL</div></td>\n' +
	'            <td><div class="text">NULL</div></td>\n' +
	'            <td><div class="text">NULL</div></td>\n' +
	'            <td><div class="text">NULL</div></td>\n' +
	'            <td><div class="text">NULL</div></td>\n' +
	'            <td><div class="text">NULL</div></td>\n' +
	'            <td><div class="text">NULL</div></td>\n' +
	'        </tr>\n' +
	'    </table>\n' +
	'</div>';

const addPageInnerHTML =
	'<div class="menu">\n' +
	'    <div class="page">\n' +
	'        <div id="ready" class="button">Готово</div>\n' +
	'        <div id="back" class="button">Назад</div>\n' +
	'    </div>\n' +
	'</div>\n' +
	'<div class="table">\n' +
	'    <table border="1">\n' +
	'        <caption>Введите данные</caption>\n' +
	'        <tr>\n' +
	'            <th>№</th>\n' +
	'            <th>x</th>\n' +
	'            <th>y</th>\n' +
	'            <th>R</th>\n' +
	'            <th>Result</th>\n' +
	'            <th>Start time of script</th>\n' +
	'            <th>End time of script</th>\n' +
	'            <th>script running time</th>\n' +
	'        </tr>\n' +
	'        <tr class="input">\n' +
	'            <td><div class="text">123456789</div></td>\n' +
	'            <td><input type="text" placeholder="write..."></td>\n' +
	'            <td><input type="text" placeholder="write..."></td>\n' +
	'            <td><input type="text" placeholder="write..."></td>\n' +
	'            <td><input type="text" placeholder="write..."></td>\n' +
	'            <td><input type="text" placeholder="write..."></td>\n' +
	'            <td><input type="text" placeholder="write..."></td>\n' +
	'            <td><input type="text" placeholder="write..."></td>\n' +
	'        </tr>\n' +
	'    </table>\n' +
	'</div>';

const editPageInnerHTML =
	'<div class="menu">\n' +
	'    <div class="page">\n' +
	'        <div id="search">\n' +
	'            <input type="text" id="track-number" placeholder="write track number">\n' +
	'        </div>\n' +
	'        <div id="found" class="button">Найти</div>\n' +
	'    </div>\n' +
	'    <div id="back" class="button single">Назад</div>\n' +
	'</div>';

const showAllPageInnerHTML =
	'<div class="menu">\n' +
	'    <div class="page">\n' +
	'        <div id="edit" class="button">Редактировать</div>\n' +
	'        <div id="back" class="button">Назад</div>\n' +
	'    </div>\n' +
	'</div>\n' +
	'<div class="table">\n' +
	'    <table border="1">\n' +
	'        <caption>База данных</caption>\n' +
	'        <tr>\n' +
	'            <th>№</th>\n' +
	'            <th>x</th>\n' +
	'            <th>y</th>\n' +
	'            <th>R</th>\n' +
	'            <th>Result</th>\n' +
	'            <th>Start time of script</th>\n' +
	'            <th>End time of script</th>\n' +
	'            <th>script running time</th>\n' +
	'        </tr>\n' +
	'        <tbody id="results"><tr><td>0</td><td>-1</td><td>1</td><td>2</td><td>miss</td><td>23:14:08:197602</td><td>23:14:08:197673</td><td>71 microseconds</td></tr><tr><td>1</td><td>-1</td><td>1</td><td>2</td><td>miss</td><td>23:14:08:695823</td><td>23:14:08:695888</td><td>65 microseconds</td></tr><tr><td>2</td><td>-1</td><td>1</td><td>2</td><td>miss</td><td>23:14:09:26451</td><td>23:14:09:26516</td><td>65 microseconds</td></tr></tbody>\n' +
	'    </table>\n' +
	'</div>';