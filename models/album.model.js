import { model, Schema } from "mongoose";

const  albumSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        performer: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

//                          *** tem que ser no singular
const AlbumModel = model("Album", albumSchema)
//    quando rodar e fizer a conexão
//    lá na collections, vai virar plural "Employees"

export default AlbumModel

