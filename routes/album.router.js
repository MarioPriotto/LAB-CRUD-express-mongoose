import express, { response } from 'express'
//import PurchaseModel from '../models/purchase.models.js'
import AlbumModel from '../models/album.model.js'
const router = express.Router()

// http://localhost:8080/albums
// no POSTMAN chamar com POST -conteúdo no BODY, raw, json

router.post('/', async (request, response) => {
    try {
        const afetado = await AlbumModel.create(request.body)
        return response.status(201).json(afetado)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo de errado não está certo - /create "})
    }
})


// http://localhost:8080/albums
// testando de NAVEGADOR
// testando de POSTMAN (GET)

router.get('/', async (request, response) => {
    try {
        const afetado = await AlbumModel.find()
        return response.status(200).json(afetado)        
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo de errado não está certo - / "})
    }
})


// http://localhost:8080/albums/id
// testando de NAVEGADOR
// testando de POSTMAN (GET)

router.get('/:id', async (request,response) => {
    try {
        const { id } = request.params
        const afetado = await AlbumModel.findById(id)
        if (!afetado) {
            return response.status(404).json({ masg: "Album não foi encontrado"})
        }
        return response.status(200).json(afetado)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo de errado não está certo - GET BY ID - /id "})
    }
})


// http://localhost:8080/albums/id
// no POSTMAN chamar com PUT -conteúdo no BODY, raw, json
// remover, de body: _id, __v, createdAt, updatedAt

router.put('/:id', async (request,response) => {
    try {
        const { id } = request.params
        const afetado = await AlbumModel.findByIdAndUpdate(
            id,
            { ...request.body },
            { new: true, runValidators: true}
        )
        return response.status(200).json(afetado)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo de errado não está certo - /id "})
    }
})


// http://localhost:8080/albums/id
// no POSTMAN chamar com DELETE

router.delete('/:id',async (request, response) => {
    try { 
        const { id } = request.params
        // const statusExiste = await FuncionarioModel.findOne({setor: id})
        // if ( statusExiste ) {
        //     console.log("Não é possível excluir este Setor porque há funcionários nele")
        //     return response.status(500).json({ msg: "Não é possível exluir este Setor porque há funcionários nele - /delete/id "})
        // }
        const afetado = await AlbumModel.findByIdAndDelete(id)
        return response.status(200).json(afetado)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: "Algo de errado não está certo - /id "})
    }
})


export default router