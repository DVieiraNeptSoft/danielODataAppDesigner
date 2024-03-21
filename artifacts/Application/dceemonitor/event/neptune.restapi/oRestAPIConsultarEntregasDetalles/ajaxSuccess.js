if (exe_api_detalles === '') {

    console.log(modeloMultiModelConsultarEntregaDetalles.getData());
    modeloTable.setData(modeloMultiModelConsultarEntregaDetalles.getData().t_zdc_facturad);
    modeloTableFOB.setData(modeloMultiModelConsultarEntregaDetalles.getData().t_zdc_facturah);
    modeloTableFlete.setData(modeloMultiModelConsultarEntregaDetalles.getData().t_zdc_facturah);
    modeloTableSeguros.setData(modeloMultiModelConsultarEntregaDetalles.getData().t_zdc_facturah);
    modeloTableOtrosG.setData(modeloMultiModelConsultarEntregaDetalles.getData().t_zdc_facturah);

    // console.log(modeloTable.getData());

    oDialogDetalle.open();
} else {

}