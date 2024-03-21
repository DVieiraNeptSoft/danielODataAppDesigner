debugger;

modeloTableCabCont.setData(xhr.responseJSON.d.Miro_QDet.results);
modeloTableCab.setData(xhr.responseJSON.d.Miro_QCab.results);

console.log(modeloTableCab.getData());
console.log(modeloTableCabCont.getData());

oDialogDetContabilizacion.open();