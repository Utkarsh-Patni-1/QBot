export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-utkarsh-edu.azurewebsites.net/api/Request/",
    selfUrl: "https://qbot-utkarsh-edu-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "569188aa-58a1-40d3-bb39-5a0c569ea981",
        clientId: "c5acddb9-aa14-4055-8860-3962be8c88b1",
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
