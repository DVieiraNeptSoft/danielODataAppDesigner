// YYYY.MM.DD
var fecha;
var fecha_format;

oEntregaDet.setValue(tablaData.ENTREGA); // para enviar los datos
oEntregasapDet.setValue(tablaData.ENTREGASAP);
oFechaEE.setValue(tablaData.FECHACREA);
oProveedorDet.setValue(tablaData.LIFNR);
oProvName.setValue(tablaData.NAME1);

oFechaEProv.setValue(tablaData.FECHAEP); //YYYY-MM-DD
fecha = oFechaEProv.getValue();
fecha_format = fecha.replace(/-/g, ".");
oFechaEProv.setValue(fecha_format); //YYYY.MM.DD

oFechaEMReal.setValue(tablaData.FECHACG);


oFechaEAlm.setValue(tablaData.FECHAEA);
oFechaPart.setValue(tablaData.FECHAPC);
oBolnrDet.setValue(tablaData.BOLNR);
oBultos.setValue(tablaData.ANZPK);
oVia.setValue(tablaData.EXPVZ);
oPeso.setValue(tablaData.BTGEW);
oUMPeso.setValue(tablaData.GEWEI);
oVolumen.setValue(tablaData.VOLUM);
oVolumenUM.setValue(tablaData.VOLEH);


// oEntregaDet.setValue(); //Para limpiar los datos

exe_api_detalles = '';

var options = {
    parameters: {
        "nroEntrega": tablaData.ENTREGA, // Optional
        "tippFactura": tablaData.TIPOFACTURA // Optional
    }
};

apioRestAPIConsultarEntregasDetalles(options);