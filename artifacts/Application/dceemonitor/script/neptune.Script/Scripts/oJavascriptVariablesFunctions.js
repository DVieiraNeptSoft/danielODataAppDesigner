var tablaData;
var gv_total_fob;
var gv_total_flete;
var gv_total_seguro;
var gv_total_otros;
var Miro_QCab = [];
var Miro_QDet = [];

var s_modify = {};

var exe_api_detalles;

function f_SetBusy(value) {
    oApp.setBusy(value);
}

// function f_quitarPuntos(num) {

//     var search = ","; //43
//     var replaceWith = "";
//     var result = num.split(search).join(replaceWith);
//     var other = result.split(".").join(".");
//     // var other2 = parseFloat(other)
//     return other;

// }

// Custom Init - Happens only once
sap.ui.getCore().attachInit(function (startParams) {

    getODataoList("/Mc_LifnrSet", { method: "POST" });

});