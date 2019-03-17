'use strict';
const mailer = require('./mailer');

module.exports.sendReminder = (event, context, callback) => {
  const today = new Date();
  const user = {
    name: 'Pepito Aja',
    email: 'pepito@aja.com'
  };

  const mailOptions = {
    from: '"serverless Reminder 👻" <reminder@example.com>',
    to: `${user.email}, foo@example.com, jorcalle11@gmail.com`,
    subject: 'Daily Reminder ✔',
    html: `
      <h3>Reminder</h3>
      Hey <b>${user.name}</b>,
      <p>
        This is a daily reminder, keep learning serverless framework! <br/>
        Time is <b>${today.toDateString()}<b>
      </p>
    `
  };

  mailer
    .sendEmail(mailOptions)
    .then(res => callback(null, res))
    .catch(callback);
};
