oODataSource.create("/Mc_LifnrSet", { filters: filtroC }, {
    success: function (oData, oResponse) {
        debugger;
        modeloTableFProveedor.setData(oData.Mc_LifnrSet.results)
    }, error: function (oError) { }
})