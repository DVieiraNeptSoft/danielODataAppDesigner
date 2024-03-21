// f_quitarPuntos

if (tablaData.ENTREGASAP == undefined) {

} else {

    var objeto = {};
    var EE_Upddel = [];
    var EE_Updout = [];

    // console.log(oDatePickerMEntregaProveedor.getDateValue());
    // debugger;

    var data = modeloDialogModificarEntrega.getData();

    var fechaepformat = oDatePickerMEntregaProveedor.getValue().replace(/\./g, '').substr(0, 10);
    var fechacgformat = data.FECHACG.replace(/-/g, ',').substr(0, 10);
    var fechapcformat = oDatePickerMPartidaCarga.getValue().replace(/\./g, '').substr(0, 10);
    var fechaeaformat = oDatePickerMEstAlmac.getValue().replace(/\./g, '').substr(0, 10);

    var fechacgformat = fechacgformat.replace(/\,/g, '');

    // var cantbult = f_quitarPuntos(tablaData.ANZPK);
    var cantbult = data.ANZPK;
    // var idpesom = f_quitarPuntos(tablaData.BTGEW);
    var idpesom = data.BTGEW;

    console.log(oDatePickerMEntregaProveedor.getValue());

    console.log(modeloDialogModificarEntrega.getData());

    debugger;

    EE_Upddel.push({
        "Funcion": "U",
        "Xblnr": data.ENTREGA,
        "Vbeln": data.ENTREGASAP,
        "Fechaep": fechaepformat,
        "Fechacg": fechacgformat,
        "Bolnr": data.BOLNR,
        "Fechapc": fechapcformat,
        "Fechaea": fechaeaformat,
        // "Anzpk": this.onquitarpuntos(sap.ui.getCore().byId("txtcantbult").getValue().toString()),
        "Anzpk": oInputMCantBulto.getValue(),
        "Expvz": oInputMVia.getValue(),
        // "Btgew": this.onquitarpuntos(sap.ui.getCore().byId("idpesom").getValue().toString()),
        "Btgew": oInputMPeso.getValue(),
        "Gewei": oInputMUnidadPeso.getValue()
    });

    objeto.EE_Upddel = EE_Upddel;
    objeto.EE_Updout = EE_Updout;

    console.log(objeto);

    oODataSource.create("/EE_UpdateSet", objeto, {
        success: function (result, oResponse) {
            console.log(result.EE_Updout.results[0].Message);
            debugger;
            if (result.EE_Updout.results[0].Type == "S") {

                sap.m.MessageToast.show("Entrega SAP: " + tablaData.ENTREGASAP + " modificada", {
                    duration: 5000,
                });

                oDialogModificarEntrega.close();

                debugger;

                var options = {
                    data: EE_Upddel
                };

                apioRestAPI_ModificarEntrega(options);

            } else {

                sap.m.MessageToast.show(result.EE_Updout.results[0].Message, {
                    duration: 5000,
                });

            }
        }, error: function (oError) {
            debugger;
            sap.m.MessageToast.show("Error al tratar de modificar entrega SAP", {
                duration: 5000,
            });

        }
    });

}