const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


// transport.sendMail({
//     from: 'Joseph pradeep <joseph.pradeep@hotmail.com>',
//     to: 'jajp777@gmail.com',
//     subject: 'Just trying things out!',
//     html: 'hey i ',
//     text: 'hey i'
// });
const generateHTML = (filename, options = {}) => {
    const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options);
    const inlined = juice(html);
    //console.log(inlined);
    return inlined;
}
exports.send =async (options) => {
    const html = generateHTML(options.filename, options);
    const text = htmlToText.fromString(html);
    const mailOptions = {
        from: `Wes bos <noreply@wesbos.com>`,
        to: options.user.email,
        subject: options.subject,
        html,
        text
    };

    const sendMail = promisify(transport.sendMail, transport);

    return sendMail(mailOptions);
};