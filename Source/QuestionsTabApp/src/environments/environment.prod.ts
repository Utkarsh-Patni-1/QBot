export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-test.azurewebsites.net/api/Request/",
    selfUrl: "https://qbot-test-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "8dfd8a9b-74f2-43fa-985d-24c342cd7108",
        clientId: "ed336b1c-9697-4b32-bfec-c9359f0b4832",
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
