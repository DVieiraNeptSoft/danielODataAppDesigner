// Cabecera--------------------------------------------------------------------------------
var fdate;

// fdate = tablaData.FECHACREA.replace(/-/g, ".").substr(0, 10);
// oInputMFechaCrea.setValue(fdate);

modeloDialogModificarEntrega.setData(tablaData);

// console.log(modeloDialogModificarEntrega.getData());

// modeloDialogModificarEntrega = tablaData;

// oInputMPackingList.setValue(tablaData.ENTREGA);
// oInputMEntEntrante.setValue(tablaData.ENTREGASAP);
// oInputMProveedor.setValue(tablaData.LIFNR);
// oInputMNombreProveedor.setValue(tablaData.NAME1);
// oInputMPaisOrigen.setValue(tablaData.LAND1O);
// oInputMPaisDestino.setValue(tablaData.LAND1D);
// oInputMSociedad.setValue(tablaData.BUKRSD);
// oInputMMoneda.setValue(tablaData.WAERS);

// if (tablaData.VOLUM !== null) {
//     oInputMVolumen.setValue(tablaData.VOLUM);
// } else {
//     oInputMVolumen.setValue(0);
// }


// oInputMUnidadMonetaria.setValue(tablaData.VOLEH);

// Campos modificables----------------------------------------------------------------------
// fdate = tablaData.FECHAEP.replace(/-/g, ".").substr(0, 10);
// oDatePickerMEntregaProveedor.setValue(fdate);

// fdate = tablaData.FECHAPC.replace(/-/g, ".").substr(0, 10);
// oDatePickerMPartidaCarga.setValue(fdate);

// fdate = tablaData.FECHAEA.replace(/-/g, ".").substr(0, 10);
// oDatePickerMEstAlmac.setValue(fdate);

// fdate = tablaData.FECCREA.replace(/-/g, ".").substr(0, 10);
// oDatePickerMEmReal.setValue(fdate);

// oInputMDocTransp.setValue(tablaData.BOLNR);
// oInputMCantBulto.setValue(tablaData.ANZPK);
// oInputMVia.setValue(tablaData.EXPVZ);
// oInputMPeso.setValue(tablaData.BTGEW);
// oInputMUnidadPeso.setValue(tablaData.GEWEI);

oDialogModificarEntrega.open();