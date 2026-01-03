import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let wktugeneral = `${wibh}:${wibm}:${wibs}`

let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
global.Func = (await import('./lib/function.js')).default

/*============= Config =============*/
global.owner = ["6281393998039", "6285395673670"]
global.costumpairing = "LIZETTAA"
global.mods = []
global.prems = []
global.readMore = readMore
global.linkch = "https://chat.whatsapp.com/IY6IKAj5xawLk14AllNyZC"
global.tz = "Asia/Jakarta"
global.nomor = "6285395673670"
global.botname = 'Lizetta'
global.ownername = 'Lizetta Yomiyama'
global.saluran = '120363278979339728@newsletter',

/*============= Message =============*/
global.wait = 'Please Wait...'
global.eror = 'Error!'

global.apikey = {
   conn: "https://api.lizetta.web.id"
};
global.web = "https://lizetta.io/"
global.githubToken = "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"

global.menu = {
   contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
         newsletterJid: global.saluran,
         serverMessageId: 103,
         newsletterName: global.botname
      },
      externalAdReply: {
         title: global.botname,
         body: global.ownername,
         mediaType: 1,
         thumbnail: fs.readFileSync('./media/thumbnail.jpg'),
         sourceUrl: global.apikey,
         renderLargerThumbnail: true
      }
   }
}

global.chnl = {
   contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
         newsletterJid: global.saluran,
         serverMessageId: 103,
         newsletterName: global.botname
      },
   }
}

global.replyCostum = async (text) => {
    return {
        text: text,
        /**
        document: fs.readFileSync("./package.json"),
        mimetype: "image/null",
        jpegThumbnail: (await resize(fs.readFileSync("./media/thumbnail2.jpg"), 300, 300)),
        contextInfo: global?.chnl?.contextInfo,
        fileName: botname,
        productCategory: {
            limited_time_offer: {
                text: global?.botname,
                url: "https://t.me/ilizetta",
                copy_code: global?.ownername,
                expiration_time: Date.now() * 999
            },
            tap_target_configuration: {
                title: "▸ X ◂",
                description: "bomboclard",
                canonical_url: "https://t.me/lizetta",
                domain: global?.web,
                button_index: 0
            },
            product_category: {
                surface: 1,
                category_id: "cat_1437",
                biz_jid: "0@s.whatsapp.net",
                title: global?.botname,
                description: "Hmmm, Ntah",
                button_label: "Lihat Produk"
            }
        },
        **/
    }
}

global.adReply = {
   contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
         newsletterJid: global.saluran,
         serverMessageId: 103,
         newsletterName: global.botname
      },
      externalAdReply: {
         title: global.botname,
         body: global.ownername,
         mediaType: 1,
         thumbnail: fs.readFileSync('./media/thumbnail2.jpg'),
         sourceUrl: global.apikey,
         renderLargerThumbnail: false
      }
   }
}

let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    import(`${file}?update=${Date.now()}`)
})
