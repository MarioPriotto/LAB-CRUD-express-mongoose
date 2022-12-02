import { model, Schema } from "mongoose";

const  purchaseSchema = new Schema(
    {
        shippingAdress: {
            type: String,
            required: true
        },
        album: {
            type: Schema.Types.ObjectId, 
            ref: "Album"
        },
    },
    {
        timestamps: true,
    }
)

//                          *** tem que ser no singular
const PurchaseModel = model("Purchase", purchaseSchema)
//    quando rodar e fizer a conexão
//    lá na collections, vai virar plural "Employees"

export default PurchaseModel
