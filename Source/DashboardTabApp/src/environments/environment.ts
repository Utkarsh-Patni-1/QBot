export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-plus-utkarsh.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "8dfd8a9b-74f2-43fa-985d-24c342cd7108",
        clientId: "d4cb612d-dcb8-40c1-9889-10fa9d64e1f4",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
