const { program } = require('commander')

program
    .name('TGMsg')
    .version('TGMsg v0.1.6')
    .description('CLI to send telegram message.')
    .option('-c, --chatid <number>', 'Chat ID')
    .option('-t, --token <string>', 'Token')
    .option('-m, --message <string>', '要傳送的訊息')

program.parse(process.argv)
const options = program.opts()

const url = `https://api.telegram.org/bot${options.token}/sendMessage?chat_id=${options.chatid}&text=${options.message}`
fetch(url)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })