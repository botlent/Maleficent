

const fs = require('fs')
const chalk = require('chalk')

// --------- SETTING OWNER -------- //

global.nomerOwner ="62895615063060" //nomor kamu
global.nomerOwner2 = "62895615063060" //ini juga mau sama mau beda terserah
global.ownerName = "Maleficent " //namankamu buat di owner
global.namabot = "© Maleficent  MD " //nama bot kamu
global.botName = "© Maleficent  MD ν2" // ini juga
global.fake = "© Maleficent  MD ν2" // ini juga terserah
global.autoJoin = true //gatau terserah mau true atau false mending gausah di ubah aja
global.sessionName = 'session' //hati hati nanti error
global.packName = "©Sticker" //buat stiker
global.authorName = "Created By Maleficent MD " //ini juga buat stiker
global.namastore = "Fiibotz Store" // terserah
global.nodana = "08984116728" //nomor kamu
global.nogopay = "0895615063060" //nomor kamu
global.noovo = "08984116728" // yang inu juga
global.qris = "-" // ini juga
global.TextT = `Fiibotz` //terserah
global.textT = `Fiibotz` //bodoamat
global.sgc = 'https://chat.whatsapp.com/F8XgPV6AUdF0oxut5bC97C'
global.syt = 'https://youtube.com/@alfisyahrial9029'
global.sig = 'https://instagram.com/alfisyahriaal'
// --------- SETTING OWNER -------- //

// --------- BIARIN AJA -------- //
const mess = {
wait: '_Loading please wait..._',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan Rangel Sebagai Admin Terlebih Dahulu!!!'
}

}

global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://telegra.ph/file/048acba09543c168246e5.jpg",
    "https://telegra.ph/file/b703c289a5da46a8dd82f.jpg",
    "https://telegra.ph/file/0315147548aeb78f65154.jpg",
    "https://telegra.ph/file/07e2ff838762aab24008e.jpg",
    "https://telegra.ph/file/faf0c849c0cebd98a3203.jpg",
   
    ]
// Apikey 
global.api = {
ehz: 'always ehz',
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
//Gausah Juga
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

/* BOT BY FOXSTORE [ RECODE ]
   BASE ASLI BY EHANZ */
