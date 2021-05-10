module.exports = {
	findOne: async (_qry)=>{
        return PagoDetalle.findOne({ id: _pagoDetalleId })
    },
    find: async (_qry)=>{
        return PagoDetalle.find({ id: _pagoDetalleId })
    }
}