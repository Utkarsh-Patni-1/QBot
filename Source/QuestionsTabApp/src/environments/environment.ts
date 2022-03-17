export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-tcs-edu-test.azurewebsites.net/api/Request/",
    selfUrl: "https://qbot-tcs-edu-test-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "569188aa-58a1-40d3-bb39-5a0c569ea981",
        clientId: "dfffba11-81e2-458d-9763-a598ae95aeb4",
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
