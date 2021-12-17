import React from 'react'

const PageCatalog = () => {
	return (
		<main className='main'>
			<a href='index.html' className='main__link'>
				<h1 className='main__title'>Попутчики</h1>
			</a>

			<section className='country-filter country-filter-popup container country-filter--closed'>
				<div className='country-filter-popup__wrapper'>
					<h3 className='country-filter-popup__head'>
						<span className='country-filter-popup__mobile-head'>
							Фильтрация по странам:
						</span>
					</h3>
					<button className='country-filter__toggle' type='button'>
						<span className='country-filter-popup__toggle-open'>
							Показать все
						</span>{' '}
						<span className='country-filter-popup__toggle-close'>Свернуть</span>
					</button>
					<ul className='country-filter-popup__list'>
						<li className='country-filter-popup__item'>
							<a
								href='#'
								className='country-filter-popup__link country-filter-popup__link--active'
							>
								Европа
							</a>
						</li>
						<li className='country-filter-popup__item'>
							<a href='#' className='country-filter-popup__link'>
								Азия
							</a>
						</li>
						<li className='country-filter-popup__item'>
							<a href='#' className='country-filter-popup__link'>
								Америка
							</a>
						</li>
						<li className='country-filter-popup__item'>
							<a href='#' className='country-filter-popup__link'>
								острова
							</a>
						</li>
					</ul>
				</div>
				<div className='country-filter-popup__table country-filter-table'>
					<div className='country-filter-table__cell letter country-filter-table__cell--active'>
						<a className='country-filter-table__link' href='#'>
							А
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/australia' className='letter__link'>
									Австралия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/austria' className='letter__link'>
									Австрия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/azerbaijan' className='letter__link'>
									Азербайджан
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/albania' className='letter__link'>
									Албания
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/algeria' className='letter__link'>
									Алжир
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/angola' className='letter__link'>
									Ангола
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/andorra' className='letter__link'>
									Андорра
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/antigua-and-barbuda' className='letter__link'>
									Антигуа и Барбуда
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/argentina' className='letter__link'>
									Аргентина
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/armenia' className='letter__link'>
									Армения
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/afghanistan' className='letter__link'>
									Афганистан
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Б
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/bahamas' className='letter__link'>
									Багамские Острова
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/bangladesh' className='letter__link'>
									Бангладеш
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/barbados' className='letter__link'>
									Барбадос
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/bahrain' className='letter__link'>
									Бахрейн
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/belarus' className='letter__link'>
									Белоруссия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/belize' className='letter__link'>
									Белиз
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/belgium' className='letter__link'>
									Бельгия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/benin' className='letter__link'>
									Бенин
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/bulgaria' className='letter__link'>
									Болгария
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/bolivia' className='letter__link'>
									Боливия
								</a>
							</li>
							<li className='letter__item'>
								<a
									href='/country/bosnia-and-herzegovina'
									className='letter__link'
								>
									Босния и Герцеговина
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/botswana' className='letter__link'>
									Ботсвана
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/brazil' className='letter__link'>
									Бразилия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/brunei' className='letter__link'>
									Бруней
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/burkina-faso' className='letter__link'>
									Буркина-Фасо
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/burundi' className='letter__link'>
									Бурунди
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/butane' className='letter__link'>
									Бутан
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							В
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/vanuatu' className='letter__link'>
									Вануату
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/great-britain' className='letter__link'>
									Великобритания
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/hungary' className='letter__link'>
									Венгрия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/venezuela' className='letter__link'>
									Венесуэла
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/east-timor' className='letter__link'>
									Восточный Тимор
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/vietnam' className='letter__link'>
									Вьетнам
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Г
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/gabon' className='letter__link'>
									Габон
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/haiti' className='letter__link'>
									Гаити
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/guyana' className='letter__link'>
									Гайана
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/gambia' className='letter__link'>
									Гамбия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/ghana' className='letter__link'>
									Гана
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/guatemala' className='letter__link'>
									Гватемала
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/guinea' className='letter__link'>
									Гвинея
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/guinea-bissau' className='letter__link'>
									Гвинея-Бисау
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/germany' className='letter__link'>
									Германия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/honduras' className='letter__link'>
									Гондурас
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/grenada' className='letter__link'>
									Гренада
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/greece' className='letter__link'>
									Греция
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/georgia' className='letter__link'>
									Грузия
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Д
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/denmark' className='letter__link'>
									Дания
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/djibouti' className='letter__link'>
									Джибути
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/dominica' className='letter__link'>
									Доминика
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/dominican-republic' className='letter__link'>
									Доминикана
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Е
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/egypt' className='letter__link'>
									Египет
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell country-filter-table__cell--none'>
						<a className='country-filter-table__link' href='#'>
							Ё
						</a>
					</div>
					<div className='country-filter-table__cell country-filter-table__cell--none'>
						<a className='country-filter-table__link' href='#'>
							Ж
						</a>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							З
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/Zambia' className='letter__link'>
									Замбия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/Zimbabwe' className='letter__link'>
									Зимбабве
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							И
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/israel' className='letter__link'>
									Израиль
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/india' className='letter__link'>
									Индия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/indonesia' className='letter__link'>
									Индонезия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/jordan' className='letter__link'>
									Иордания
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/iraq' className='letter__link'>
									Ирак
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/iran' className='letter__link'>
									Иран
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/ireland' className='letter__link'>
									Ирландия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/iceland' className='letter__link'>
									Исландия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/spain' className='letter__link'>
									Испания
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/italy' className='letter__link'>
									Италия
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell country-filter-table__cell--none'>
						<a className='country-filter-table__link' href='#'>
							Й
						</a>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							К
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/cape-verde' className='letter__link'>
									Кабо-Верде
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/kazakhstan' className='letter__link'>
									Казахстан
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/cambodia' className='letter__link'>
									Камбоджа
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/cameroon' className='letter__link'>
									Камерун
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/canada' className='letter__link'>
									Канада
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/qatar' className='letter__link'>
									Катар
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/kenya' className='letter__link'>
									Кения
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/cyprus' className='letter__link'>
									Кипр
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/kyrgyzstan' className='letter__link'>
									Киргизия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/kiribati' className='letter__link'>
									Кирибати
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/china' className='letter__link'>
									Китай
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/colombia' className='letter__link'>
									Колумбия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/comoros' className='letter__link'>
									Коморы
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/congo' className='letter__link'>
									Конго
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/dprk' className='letter__link'>
									КНДР
								</a>
							</li>
							<li className='letter__item'>
								<a
									href='/country/the-republic-of-korea'
									className='letter__link'
								>
									Республика Корея
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/costa-rica' className='letter__link'>
									Коста-Рика
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/cote-d’ivoire' className='letter__link'>
									Кот-д’Ивуар
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/cuba' className='letter__link'>
									Куба
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/kuwait' className='letter__link'>
									Кувейт
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Л
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/laos' className='letter__link'>
									Лаос
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/latvia' className='letter__link'>
									Латвия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/lesotho' className='letter__link'>
									Лесото
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/liberia' className='letter__link'>
									Либерия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/lebanon' className='letter__link'>
									Ливан
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/libya' className='letter__link'>
									Ливия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/lithuania' className='letter__link'>
									Литва
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/liechtenstein' className='letter__link'>
									Лихтенштейн
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/luxembourg' className='letter__link'>
									Люксембург
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							М
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/mauritius' className='letter__link'>
									Маврикий
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/mauritania' className='letter__link'>
									Мавритания
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/madagascar' className='letter__link'>
									Мадагаскар
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/malawi' className='letter__link'>
									Малави
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/malaysia' className='letter__link'>
									Малайзия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/mali' className='letter__link'>
									Мали
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/maldives' className='letter__link'>
									Мальдивы
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/malta' className='letter__link'>
									Мальта
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/morocco' className='letter__link'>
									Марокко
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/marshall-islands' className='letter__link'>
									Маршалловы Острова
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/mexico' className='letter__link'>
									Мексика
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/mozambique' className='letter__link'>
									Мозамбик
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/moldova' className='letter__link'>
									Молдавия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/monaco' className='letter__link'>
									Монако
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/mongolia' className='letter__link'>
									Монголия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/myanmar' className='letter__link'>
									Мьянма
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Н
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/namibia' className='letter__link'>
									Намибия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/nauru' className='letter__link'>
									Науру
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/nepal' className='letter__link'>
									Непал
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/niger' className='letter__link'>
									Нигер
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/nigeria' className='letter__link'>
									Нигерия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/netherlands' className='letter__link'>
									Нидерланды
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/nicaragua' className='letter__link'>
									Никарагуа
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/new-zealand' className='letter__link'>
									Новая Зеландия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/norway' className='letter__link'>
									Норвегия
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							О
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/uae' className='letter__link'>
									ОАЭ
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/oman' className='letter__link'>
									Оман
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							П
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/pakistan' className='letter__link'>
									Пакистан
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/palau' className='letter__link'>
									Палау
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/panama' className='letter__link'>
									Панама
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/papua-new-guinea' className='letter__link'>
									Папуа — Новая Гвинея
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/paraguay' className='letter__link'>
									Парагвай
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/peru' className='letter__link'>
									Перу
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/poland' className='letter__link'>
									Польша
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/portugal' className='letter__link'>
									Португалия
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter country-filter-table__cell--desktop-none'>
						<a className='country-filter-table__link' href='#'>
							Р
						</a>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							С
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/salvador' className='letter__link'>
									Сальвадор
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/samoa' className='letter__link'>
									Самоа
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/san-marino' className='letter__link'>
									Сан-Марино
								</a>
							</li>
							<li className='letter__item'>
								<a
									href='/country/sao-tome-and-principe'
									className='letter__link'
								>
									Сан-Томе и Принсипи
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/saudi-arabia' className='letter__link'>
									Саудовская Аравия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/north-macedonia' className='letter__link'>
									Северная Македония
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/seychelles' className='letter__link'>
									Сейшелы
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/senegal' className='letter__link'>
									Сенегал
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/saint-lucia' className='letter__link'>
									Сент-Люсия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/serbia' className='letter__link'>
									Сербия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/singapore' className='letter__link'>
									Сингапур
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/syria' className='letter__link'>
									Сирия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/slovakia' className='letter__link'>
									Словакия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/slovenia' className='letter__link'>
									Словения
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/usa' className='letter__link'>
									США
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/somalia' className='letter__link'>
									Сомали
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/sudan' className='letter__link'>
									Судан
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/suriname' className='letter__link'>
									Суринам
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/sierra-leone' className='letter__link'>
									Сьерра-Леоне
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Т
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/tajikistan' className='letter__link'>
									Таджикистан
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/thailand' className='letter__link'>
									Таиланд
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/tanzania' className='letter__link'>
									Танзания
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/togo' className='letter__link'>
									Того
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/tonga' className='letter__link'>
									Тонга
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/trinidad-and-tobago' className='letter__link'>
									Тринидад и Тобаго
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/tuvalu' className='letter__link'>
									Тувалу
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/tunisia' className='letter__link'>
									Тунис
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/turkmenistan' className='letter__link'>
									Туркмения
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/turkey' className='letter__link'>
									Турция
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							У
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/uganda' className='letter__link'>
									Уганда
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/uzbekistan' className='letter__link'>
									Узбекистан
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/ukraine' className='letter__link'>
									Украина
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/uruguay' className='letter__link'>
									Уругвай
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Ф
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/fiji' className='letter__link'>
									Фиджи
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/philippines' className='letter__link'>
									Филиппины
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/finland' className='letter__link'>
									Финляндия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/france' className='letter__link'>
									Франция
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Х
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/croatia' className='letter__link'>
									Хорватия
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell country-filter-table__cell--none'>
						<a className='country-filter-table__link' href='#'>
							Ц
						</a>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Ч
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/chad' className='letter__link'>
									Чад
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/montenegro' className='letter__link'>
									Черногория
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/czech' className='letter__link'>
									Чехия
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/chile' className='letter__link'>
									Чили
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Ш
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/switzerland' className='letter__link'>
									Швейцария
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/sweden' className='letter__link'>
									Швеция
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/sri-lanka' className='letter__link'>
									Шри-Ланка
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell country-filter-table__cell--none'>
						<a className='country-filter-table__link' href='#'>
							Щ
						</a>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Э
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/ecuador' className='letter__link'>
									Эквадор
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/eritrea' className='letter__link'>
									Эритрея
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/esvatini' className='letter__link'>
									Эсватини
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/estonia' className='letter__link'>
									Эстония
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/ethiopia' className='letter__link'>
									Эфиопия
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Ю
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/south-africa' className='letter__link'>
									ЮАР
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/south-sudan' className='letter__link'>
									Южный Судан
								</a>
							</li>
						</ul>
					</div>
					<div className='country-filter-table__cell letter'>
						<a className='country-filter-table__link' href='#'>
							Я
						</a>
						<ul className='letter__list'>
							<li className='letter__item'>
								<a href='/country/jamaica' className='letter__link'>
									Ямайка
								</a>
							</li>
							<li className='letter__item'>
								<a href='/country/japan' className='letter__link'>
									Япония
								</a>
							</li>
						</ul>
					</div>
				</div>
				<ul className='country-filter-popup__country-list'>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/afghanistan'
							className='country-filter-popup__country-name'
						>
							Афганистан
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/albania'
							className='country-filter-popup__country-name'
						>
							Албания
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/algeria'
							className='country-filter-popup__country-name'
						>
							Алгерия
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/andorra'
							className='country-filter-popup__country-name'
						>
							Андорра
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/argentina'
							className='country-filter-popup__country-name'
						>
							Аргентина
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/armenia'
							className='country-filter-popup__country-name'
						>
							Армения
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/australia'
							className='country-filter-popup__country-name'
						>
							Австралия
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/austria'
							className='country-filter-popup__country-name'
						>
							Австрия
						</a>
					</li>
					<li className='country-filter-popup__country-item'>
						<a
							href='/country/azerbaijan'
							className='country-filter-popup__country-name'
						>
							Азербайджан
						</a>
					</li>
				</ul>
				<button type='button' className='country-filter-popup__close button'>
					<span className='country-filter-popup__close-text'>Свернуть</span>
				</button>
			</section>
			<div className='wrapper container'>
				<div className='compilation'>
					<form
						className='compilation__form'
						method='get'
						action='https://echo.htmlacademy.ru'
					>
						<h3 className='compilation__head'>
							Подберите идеального попутчика
						</h3>
						<fieldset className='compilation__item compilation__item--hobby'>
							<legend className='compilation__legend'>Хобби</legend>
							<div className='compilation__wrapper compilation__wrapper--hobby compilation__wrapper--closed'>
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
										checked
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Спортзал
								</label>{' '}
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Кальян
								</label>{' '}
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Диван
								</label>
							</div>
							<button
								className='compilation__turn-btn compilation__turn-btn--hobby'
								type='button'
							>
								<span className='visually-hidden'>развернуть</span>
							</button>
						</fieldset>
						<fieldset className='compilation__item compilation__item--music'>
							<legend className='compilation__legend'>Музыка</legend>
							<div className='compilation__wrapper compilation__wrapper--music'>
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
										checked
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Тяжелый рок
								</label>{' '}
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Русский рэп
								</label>{' '}
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Евроденс
								</label>
							</div>
							<button
								className='compilation__turn-btn compilation__turn-btn--music'
								type='button'
							>
								<span className='visually-hidden'>свернуть</span>
							</button>
						</fieldset>
						<fieldset className='compilation__item compilation__item--food'>
							<legend className='compilation__legend'>Еда</legend>
							<div className='compilation__wrapper compilation__wrapper--food compilation__wrapper--closed'>
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
										checked
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Мясоед
								</label>{' '}
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Сидит на ПП
								</label>{' '}
								<label className='compilation__label'>
									<input
										className='compilation__checkbox visually-hidden'
										name='options'
										type='checkbox'
									/>{' '}
									<span className='compilation__checkbox-indicator'></span>{' '}
									Веган-сыроед
								</label>
							</div>
							<button
								className='compilation__turn-btn compilation__turn-btn--food'
								type='button'
							>
								<span className='visually-hidden'>развернуть</span>
							</button>
						</fieldset>
						<fieldset className='compilation__item compilation__item--transport transport'>
							<legend className='compilation__legend compilation__legend--transport'>
								Транспорт
							</legend>
							<div className='compilation__wrapper compilation__wrapper--transport'>
								<label className='transport__label'>
									<input
										className='transport__checkbox visually-hidden'
										name='transport'
										type='checkbox'
										checked
									/>{' '}
									<span className='transport__checkbox-indicator transport__checkbox-indicator--air'></span>
								</label>{' '}
								<label className='transport__label'>
									<input
										className='transport__checkbox visually-hidden'
										name='transport'
										type='checkbox'
									/>{' '}
									<span className='transport__checkbox-indicator transport__checkbox-indicator--bus'></span>
								</label>{' '}
								<label className='transport__label'>
									<input
										className='transport__checkbox visually-hidden'
										name='transport'
										type='checkbox'
									/>{' '}
									<span className='transport__checkbox-indicator transport__checkbox-indicator--bicycle'></span>
								</label>{' '}
								<label className='transport__label'>
									<input
										className='transport__checkbox visually-hidden'
										name='transport'
										type='checkbox'
									/>{' '}
									<span className='transport__checkbox-indicator transport__checkbox-indicator--foot'></span>
								</label>
							</div>
							<button
								className='compilation__turn-btn compilation__turn-btn--transport'
								type='button'
							>
								<span className='visually-hidden'>свернуть</span>
							</button>
						</fieldset>
						<fieldset className='compilation__item range'>
							<legend className='compilation__legend compilation__legend--range'>
								Левел
							</legend>
							<div className='compilation__wrapper compilation__wrapper--range'>
								<p className='range__lvl'>
									<input
										className='range__lvl-value range__lvl-value--min'
										value='30'
									/>{' '}
									<input
										className='range__lvl-value range__lvl-value--max'
										value='100'
									/>
								</p>
								<div className='range__scale'>
									<div className='range__bar'></div>
									<div className='range__toggle range__toggle--min'></div>
									<div className='range__toggle range__toggle--max'></div>
								</div>
							</div>
							<button
								className='compilation__turn-btn compilation__turn-btn--range'
								type='button'
							>
								<span className='visually-hidden'>свернуть</span>
							</button>
						</fieldset>
						<button className='compilation__btn button' type='submit'>
							Показать
						</button>
					</form>
				</div>
				<section className='roster'>
					<h2 className='visually-hidden'>Список попутчиков</h2>
					<ul className='roster__list'>
						<li className='roster__item companion'>
							<a className='companion__image-link' href='profile-firsova.html'>
								<img
									src='img/firsova-mobile@1x.jpg'
									srcSet='img/firsova-mobile@2x.jpg 2x'
									width='70'
									height='70'
									alt='foto'
									className='companion__image'
								/>
							</a>
							<a className='companion__name' href='profile-firsova.html'>
								Таня Фирсова
							</a>
							<p className='companion__likes'>
								<span className='companion__likes-box companion__likes-box--active'>
									<img
										className='companion__likes-image'
										src='img/heart-active.svg'
										alt='like'
										width='16'
										height='16'
									/>
								</span>
								1,5 M
							</p>
							<p className='companion__hashtag'>
								#ЗОЖ #ПП #Фитнес #пляж #авокадо #смузи
							</p>
							<p className='companion__text companion__text--country'>
								хочет посетить:
							</p>
							<ul className='companion__country country country--firsova'>
								<li className='country__item country__item--srilanka'>
									<img
										className='country__image'
										src='img/sri-lanka50.png'
										width='35'
										height='24'
										alt='srilanka'
									/>{' '}
									<b className='country__name'>Шри ланка</b>
								</li>
								<li className='country__item country__item--thailand'>
									<img
										className='country__image'
										src='img/thailand50.png'
										width='35'
										height='24'
										alt='thailand'
									/>{' '}
									<b className='country__name'>Тайланд</b>
								</li>
								<li className='country__item country__item--seychelles'>
									<img
										className='country__image'
										src='img/seychelles50.png'
										width='35'
										height='24'
										alt='seychelles'
									/>{' '}
									<b className='country__name'>Сейшелы</b>
								</li>
							</ul>
							<div className='companion__item-wrapper'>
								<div className='companion__wrapper'>
									<p className='companion__text companion__text--transport'>
										транспорт:
									</p>
									<ul className='companion__ways ways'>
										<li className='ways__item ways__item--air ways__item--active'>
											<img
												className='ways__image ways__image--air'
												src='img/plane.svg'
												width='16'
												height='16'
												alt='aircraft'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--air'>
												Авиаперелет
											</span>
										</li>
										<li className='ways__item ways__item--bus'>
											<img
												className='ways__image ways__image--bus'
												src='img/bus.svg'
												width='16'
												height='16'
												alt='bus'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bus'>
												Автотранспорт
											</span>
										</li>
										<li className='ways__item ways__item--bicycle'>
											<img
												className='ways__image ways__image--bicycle'
												src='img/bike.svg'
												width='16'
												height='16'
												alt='bicycle'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bicycle'>
												Велосипед
											</span>
										</li>
										<li className='ways__item ways__item--foot'>
											<img
												className='ways__image ways__image--foot'
												src='img/run.svg'
												width='16'
												height='16'
												alt='foot'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--foot'>
												Пешком
											</span>
										</li>
									</ul>
								</div>
								<div className='companion__wrapper companion__wrapper--level'>
									<p className='companion__text companion__text--level'>
										левел:
									</p>
									<div className='companion__progressbar'>
										<svg className='companion__stroke' width='45' height='45'>
											<use xlinkHref='#stroke-firsova'></use>
										</svg>
										<span className='companion__status-number'>99</span>{' '}
										<span className='companion__status-lvl'>level</span>
									</div>
								</div>
							</div>
							<a className='companion__btn button' href='profile-firsova.html'>
								Позвать!
							</a>
						</li>
						<li className='roster__item companion'>
							<a className='companion__image-link' href='profile-demin.html'>
								<img
									src='img/demin-mobile@1x.jpg'
									srcSet='img/demin-mobile@2x.jpg 2x'
									width='70'
									height='70'
									alt='foto'
									className='companion__image'
								/>
							</a>
							<a className='companion__name' href='profile-demin.html'>
								Петя Демин
							</a>
							<p className='companion__likes'>
								<span className='companion__likes-box'>
									<img
										className='companion__likes-image'
										src='img/heart.svg'
										alt='like'
										width='16'
										height='16'
									/>
								</span>
								150
							</p>
							<p className='companion__hashtag'>
								#бургер #бар #футбол #концерт #крафт
							</p>
							<p className='companion__text companion__text--country'>
								хочет посетить:
							</p>
							<ul className='companion__country country country--demin'>
								<li className='country__item country__item--belgium'>
									<img
										className='country__image'
										src='img/belgium50.png'
										width='35'
										height='24'
										alt='belgium'
									/>{' '}
									<b className='country__name'>Бельгия</b>
								</li>
								<li className='country__item country__item--сzech'>
									<img
										className='country__image'
										src='img/czech50.png'
										width='35'
										height='24'
										alt='сzech'
									/>{' '}
									<b className='country__name'>Чехия</b>
								</li>
							</ul>
							<div className='companion__item-wrapper'>
								<div className='companion__wrapper'>
									<p className='companion__text companion__text--transport'>
										транспорт:
									</p>
									<ul className='companion__ways ways'>
										<li className='ways__item ways__item--air ways__item--active'>
											<img
												className='ways__image ways__image--air'
												src='img/plane.svg'
												width='16'
												height='16'
												alt='aircraft'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--air'>
												Авиаперелет
											</span>
										</li>
										<li className='ways__item ways__item--bus ways__item--active'>
											<img
												className='ways__image ways__image--bus'
												src='img/bus.svg'
												width='16'
												height='16'
												alt='bus'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bus'>
												Автотранспорт
											</span>
										</li>
										<li className='ways__item ways__item--bicycle'>
											<img
												className='ways__image ways__image--bicycle'
												src='img/bike.svg'
												width='16'
												height='16'
												alt='bicycle'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bicycle'>
												Велосипед
											</span>
										</li>
										<li className='ways__item ways__item--foot ways__item--active'>
											<img
												className='ways__image ways__image--foot'
												src='img/run.svg'
												width='16'
												height='16'
												alt='foot'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--foot'>
												Пешком
											</span>
										</li>
									</ul>
								</div>
								<div className='companion__wrapper companion__wrapper--level'>
									<p className='companion__text companion__text--level'>
										левел:
									</p>
									<div className='companion__progressbar'>
										<svg className='companion__stroke' width='45' height='45'>
											<use xlinkHref='#stroke-demin'></use>
										</svg>
										<span className='companion__status-number'>80</span>{' '}
										<span className='companion__status-lvl'>level</span>
									</div>
								</div>
							</div>
							<a className='companion__btn button' href='profile-demin.html'>
								Позвать!
							</a>
						</li>
						<li className='roster__item companion'>
							<a className='companion__image-link' href='profile-smolov.html'>
								<img
									src='img/smolov-mobile@1x.jpg'
									srcSet='img/smolov-mobile@2x.jpg 2x'
									width='70'
									height='70'
									alt='foto'
									className='companion__image'
								/>
							</a>
							<a className='companion__name' href='profile-smolov.html'>
								Марк Смолов
							</a>
							<p className='companion__likes'>
								<span className='companion__likes-box'>
									<img
										className='companion__likes-image'
										src='img/heart.svg'
										alt='like'
										width='16'
										height='16'
									/>
								</span>
								150
							</p>
							<p className='companion__hashtag'>
								#рэп #тату #хайпбист #кроссовки #суприм
							</p>
							<p className='companion__text companion__text--country'>
								хочет посетить:
							</p>
							<ul className='companion__country country country--smolov'>
								<li className='country__item country__item--usa'>
									<img
										className='country__image'
										src='img/united-states-of-america50.png'
										width='35'
										height='24'
										alt='usa'
									/>{' '}
									<b className='country__name'>США</b>
								</li>
								<li className='country__item country__item--australia'>
									<img
										className='country__image'
										src='img/australia50.png'
										width='35'
										height='24'
										alt='australia'
									/>{' '}
									<b className='country__name'>Австралия</b>
								</li>
								<li className='country__item country__item--dominicana'>
									<img
										className='country__image'
										src='img/dominica50.png'
										width='35'
										height='24'
										alt='dominicana'
									/>{' '}
									<b className='country__name'>Доминикана</b>
								</li>
							</ul>
							<div className='companion__item-wrapper'>
								<div className='companion__wrapper'>
									<p className='companion__text companion__text--transport'>
										транспорт:
									</p>
									<ul className='companion__ways ways'>
										<li className='ways__item ways__item--air ways__item--active'>
											<img
												className='ways__image ways__image--air'
												src='img/plane.svg'
												width='16'
												height='16'
												alt='aircraft'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--air'>
												Авиаперелет
											</span>
										</li>
										<li className='ways__item ways__item--bus'>
											<img
												className='ways__image ways__image--bus'
												src='img/bus.svg'
												width='16'
												height='16'
												alt='bus'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bus'>
												Автотранспорт
											</span>
										</li>
										<li className='ways__item ways__item--bicycle ways__item--active'>
											<img
												className='ways__image ways__image--bicycle'
												src='img/bike.svg'
												width='16'
												height='16'
												alt='bicycle'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bicycle'>
												Велосипед
											</span>
										</li>
										<li className='ways__item ways__item--foot'>
											<img
												className='ways__image ways__image--foot'
												src='img/run.svg'
												width='16'
												height='16'
												alt='foot'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--foot'>
												Пешком
											</span>
										</li>
									</ul>
								</div>
								<div className='companion__wrapper companion__wrapper--level'>
									<p className='companion__text companion__text--level'>
										левел:
									</p>
									<div className='companion__progressbar'>
										<svg className='companion__stroke' width='45' height='45'>
											<use xlinkHref='#stroke-smolov'></use>
										</svg>
										<span className='companion__status-number'>25</span>{' '}
										<span className='companion__status-lvl'>level</span>
									</div>
								</div>
							</div>
							<a className='companion__btn button' href='profile-smolov.html'>
								Позвать!
							</a>
						</li>
						<li className='roster__item companion'>
							<a className='companion__image-link' href='profile-rogovaya.html'>
								<img
									src='img/rogovaya-mobile@1x.jpg'
									srcSet='img/rogovaya-mobile@2x.jpg 2x'
									width='70'
									height='70'
									alt='foto'
									className='companion__image'
								/>
							</a>
							<a
								className='companion__name companion__name--online'
								href='profile-rogovaya.html'
							>
								Лариса Роговая
							</a>
							<p className='companion__likes'>
								<span className='companion__likes-box'>
									<img
										className='companion__likes-image'
										src='img/heart.svg'
										alt='like'
										width='16'
										height='16'
									/>
								</span>
								23
							</p>
							<p className='companion__hashtag'>
								#образование #карьера #учеба #линкедин
							</p>
							<p className='companion__text companion__text--country'>
								хочет посетить:
							</p>
							<ul className='companion__country country country--rogovaya'>
								<li className='country__item country__item--greatbritain'>
									<img
										className='country__image'
										src='img/united-kingdom50.png'
										width='35'
										height='24'
										alt='greatbritain'
									/>{' '}
									<b className='country__name'>Великобритания</b>
								</li>
								<li className='country__item country__item--germany'>
									<img
										className='country__image'
										src='img/germany50.png'
										width='35'
										height='24'
										alt='germany'
									/>{' '}
									<b className='country__name'>Германия</b>
								</li>
							</ul>
							<div className='companion__item-wrapper'>
								<div className='companion__wrapper'>
									<p className='companion__text companion__text--transport'>
										транспорт:
									</p>
									<ul className='companion__ways ways'>
										<li className='ways__item ways__item--air ways__item--active'>
											<img
												className='ways__image ways__image--air'
												src='img/plane.svg'
												width='16'
												height='16'
												alt='aircraft'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--air'>
												Авиаперелет
											</span>
										</li>
										<li className='ways__item ways__item--bus ways__item--active'>
											<img
												className='ways__image ways__image--bus'
												src='img/bus.svg'
												width='16'
												height='16'
												alt='bus'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bus'>
												Автотранспорт
											</span>
										</li>
										<li className='ways__item ways__item--bicycle'>
											<img
												className='ways__image ways__image--bicycle'
												src='img/bike.svg'
												width='16'
												height='16'
												alt='bicycle'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--bicycle'>
												Велосипед
											</span>
										</li>
										<li className='ways__item ways__item--foot'>
											<img
												className='ways__image ways__image--foot'
												src='img/run.svg'
												width='16'
												height='16'
												alt='foot'
											/>{' '}
											<span className='ways__tooltip ways__tooltip--foot'>
												Пешком
											</span>
										</li>
									</ul>
								</div>
								<div className='companion__wrapper companion__wrapper--level'>
									<p className='companion__text companion__text--level'>
										левел:
									</p>
									<div className='companion__progressbar'>
										<svg
											className='companion__stroke'
											width='45'
											height='45'
											viewBox='0 0 120 120'
										>
											<use xlinkHref='#stroke-rogovaya'></use>
										</svg>
										<span className='companion__status-number'>50</span>{' '}
										<span className='companion__status-lvl'>level</span>
									</div>
								</div>
							</div>
							<a className='companion__btn button' href='profile-rogovaya.html'>
								Позвать!
							</a>
						</li>
					</ul>
					<a className='roster__btn button' href='travelers.html'>
						Показать еще
					</a>
					<div className='roster__pagination pagination'>
						<ul className='pagination__list'>
							<li className='pagination__item'>
								<a
									className='pagination__link pagination__link--active'
									href='#'
								>
									1
								</a>
							</li>
							<li className='pagination__item'>
								<a className='pagination__link' href='#'>
									2
								</a>
							</li>
							<li className='pagination__item'>
								<a className='pagination__link' href='#'>
									3
								</a>
							</li>
							<li className='pagination__item'>
								<a className='pagination__link' href='#'>
									4
								</a>
							</li>
						</ul>
						<ul className='pagination__button-list'>
							<li className='pagination__button-item'>
								<a
									href='#'
									className='pagination__button pagination__button--back pagination__button--disabled'
								>
									<span className='visually-hidden'>назад</span>
								</a>
							</li>
							<li className='pagination__button-item'>
								<a
									href='second-page.html'
									className='pagination__button pagination__button--forward'
								>
									<span className='visually-hidden'>вперед</span>
								</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</main>
	)
}

export default PageCatalog
