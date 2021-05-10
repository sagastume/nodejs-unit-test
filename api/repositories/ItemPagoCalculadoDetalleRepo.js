module.exports = {
    find: async (_qry)=>{
        return ItemPagoCalculadoDetalle.find({ id: _pagoDetalleId })
    }
}