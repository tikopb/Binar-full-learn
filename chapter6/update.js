const { Article } = require('./models')
const query = {
    where: { id: 1 }
}
Article.update({
    approved: true
}, query)
    .then(() => {
        console.log("artikel berhasil update")
        process.exit()
    })
    .catch(err => {
        console.error("Gagal mengupdate artikel")
    })