// debugger;

var options = {
    "format": "json",

    headers: {
        "x-csrf-token": xhr.getResponseHeader("x-csrf-token"), // Optional.
        "contentType": "application/json",
        "Accept": "application/json"
    },

    data: {
        // "Miro_QCab": [{ "Mandt": "", "Xblnr": "PA01-202206-0008" }],
        // "Miro_QDet": [{ "Mandt": "", "Xblnr": "PA01-202206-0008" }]

        "Miro_QCab": [{ "Mandt": "", "Xblnr": tablaData.ENTREGA }],
        "Miro_QDet": [{ "Mandt": "", "Xblnr": tablaData.ENTREGA }]
    }
};
debugger;
apioRestAPI_POST(options);