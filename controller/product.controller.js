const pool = require("../database/index-db")
const postsController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from produit")
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getByCode: async (req, res) => {
        try {
            const { code } = req.params
            const [rows, fields] = await pool.query("select * from produit where code = ?",[code])
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { libelle, quantite, date } = req.body
            const sql = "insert into produit (libelle, quantite, date) values (?,?,?)"
            const [rows, fields] = await pool.query(sql,[libelle,quantite,date])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { libelle, quantite, date } = req.body
            const { code } = req.params
            const sql = "update produit set libelle=?, quantite=?, date=? where code=?"
            const [rows, fields] = await pool.query(sql, [libelle, quantite, date, code])
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { code } = req.params
            const [rows, fields] = await pool.query("delete from produit where code = ?",[code])
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }

}

module.exports = postsController