export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-utkarsh-local.azurewebsites.net/api/Request/",
    selfUrl: "https://qbot-utkarsh-local-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "8dfd8a9b-74f2-43fa-985d-24c342cd7108",
        clientId: "df6e2beb-7188-454d-b2fd-c9882d71ed70",
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
    gid: "",
    cname: ""
};
