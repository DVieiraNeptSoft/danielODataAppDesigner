var sValue = this.getValue();

var filtroC = [];

var type = "PO";

filtroC.push(new sap.ui.model.Filter("Type", sap.ui.model.FilterOperator.EQ, type));

if (oSelectTProveedor.getSelectedKey() == "Código") {
    filtroC.push(new sap.ui.model.Filter("Lifnr", sap.ui.model.FilterOperator.EQ, sValue));
} else {
    filtroC.push(new sap.ui.model.Filter("Name1", sap.ui.model.FilterOperator.EQ, sValue));
}

// f_SetBusy(true);

getODataoTableFProveedor( "/Mc_LifnrSet", { filters: filtroC }, { method:"POST" } );