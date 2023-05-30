import Product from '../model/Product.js'

export const getProductsBySearch = async (req, res) =>{
    const query = req.query.q
    console.log(query)
    try{
        const result = await Product.find({
            title  : {$regex: query, $options : 'i'}
        }).limit(20)
        res.status(200).json(result)
    } catch (err){
        res.status(400).json(err)
    }
}