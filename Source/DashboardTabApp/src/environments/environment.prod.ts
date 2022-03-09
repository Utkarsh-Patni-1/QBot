export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-utkarsh.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "8dfd8a9b-74f2-43fa-985d-24c342cd7108",
        clientId: "d36a2671-79b4-40bb-a72a-69e0f30e00b2",
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
