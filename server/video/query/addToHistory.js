const { con } = require('../../db/connection')

module.exports = async (req, res) => {
console.log(req.body)
const { user, video, inHistory } = req.body
console.log(req.body.description)
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const sqlDatetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

console.log(sqlDatetime);

    if(inHistory){
    await con.query('UPDATE historique SET date= ? WHERE id_user = ? AND id_video = ?', [sqlDatetime, user, video ])
        res.sendStatus(200)

    }else{
        await con.query('INSERT INTO historique(id_user, id_video) VALUES(?, ?)', [user, video])
        res.sendStatus(200)

    }

}