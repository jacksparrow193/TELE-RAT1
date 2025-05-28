const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7921407912:AAGm93dKXOWEd_nlmM87vdbRbvl5cMRzUsA',
  id: isNaN(parsedId) ? 2120258506 : parsedId // replace 12345.. with your telegram chat id
};
