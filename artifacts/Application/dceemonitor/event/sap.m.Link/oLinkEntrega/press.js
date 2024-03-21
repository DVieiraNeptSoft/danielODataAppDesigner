tablaData = {};
gv_total_fob = gv_total_flete = gv_total_seguro = gv_total_otros = 0;

var context = oEvent.oSource.getBindingContext("oMultiModelConsultarEntrega");  
// Get Single Field
var value = context.getProperty("ENTREGA");

// Todos los datos seleccionados
tablaData = context.getObject();
debugger;
console.log(tablaData);
console.log(tablaData.ENTREGA);

// tablaData.FECHAEP = new Date(tablaData.FECHAEP);
console.log(tablaData.FECHAEP);

var binding = oTableDetail.getBinding("items");
var filter = new sap.ui.model.Filter({
    filters: [
        new sap.ui.model.Filter("ENTREGA", "EQ", value),
        ],
    and: false
})
binding.filter([filter]);
oPanelDetail.setHeaderText(oTextDetalleDe.getText() + " " + value);

oPanelDetail.setVisible(true);

setTimeout(function() {

    oTableDetail.focus();

}, 500);
