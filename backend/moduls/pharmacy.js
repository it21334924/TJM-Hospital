const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pharmacySchema = new Schema({

    drugId: {
        type: String,
        required: true
    },
    drugName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Analgesics', 'Antiacids' , 'Antipyretics' , 'Antivirals' , 'Barbiturates', 'Cytotoxics' , 'Diuretics', 'Hormones' , 'Laxatives']
    },
    storeBox: {
        type: String,
        required: true,
        enum: ['Box - A1', 'Box - A2' , 'Box - B1' , 'Box - A2' ,  'Box - C1' , , 'Box - C2' , 'Box - D1', 'Box - D2']
    },
   sellingPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
        enum: ['Johnson & Johnson', 'Pfizer' , 'Merk $ Co.' , 'GlaxoSmithKline' , 'Takeda', 'Shanghai Pharmaceuticals Holding' , 'AbbVie', 'Sanofi' , 'Novartis' ]
    },
    effects: {
        type: String,
        required: true,
        enum: ['headache', 'muscle pain', 'chills' , 'Rash' , 'Hives', 'vomiting' , 'dizziness', 'weight gain']
     },
    expireDate: {
        type: Date,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("pharmacy", pharmacySchema);
