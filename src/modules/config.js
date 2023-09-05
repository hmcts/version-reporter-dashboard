const config = {
    getDate: () => {
        const today = new Date();
        return today
            .toUTCString()
            .toLowerCase();
    },
    getMetadata: (reportName) => {
        const data = meta
            .filter((d) => d.reportName === reportName)
            .pop();

        if (data === undefined) {
            return meta.find((d) => d.reportName === "Unknown");
        }
        return data;
    },
    getDateTimeCurrentHour: () => {
        const value = new Intl.DateTimeFormat('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'long',
            hour: 'numeric',
            hour12: true,
            timeZone: 'Europe/London'
        }).format(Date.now());
        return value.toString();

    }
};

const meta = [
    {
        "reportName": "renovate",
        "reportTitle": "Renovate PR's",
        "displayName": "Open Renovate Pull Requests",
        "reportType": "table",
        "display": {
            column: [
                {title: "PR Title", field: "title"},
                {title: "Repository", field: "repository"},
                {title: "By", field: "createdBy"},
                {title: "On", field: "createdAt"},
                {title: "Days", field: "daysOpened"},
                // {title: "Verdict", field: "verdict"}
            ]
        }
    },
    {
        "reportName": "helmcharts",
        "reportTitle": "Helm Charts",
        "displayName": "HELM Repositories",
        "reportType": "card",
        "display": [
            "cluster",
            "namespace",
            "installed",
            "latest",
            "deprecated"
        ]
    },
    {
        "reportName": "paloalto",
        "reportTitle": "Palo Alto",
        "displayName": "Palo Alto Resources",
        "reportType": "list",
        "display": [
            "resource",
            "environment",
            "latest",
            "installed",
            "desired",
            "verdict"
        ]
    },
    {
        "reportName": "docsoutdated",
        "reportTitle": "PlatOps Documentation",
        "displayName": "Documentation Out of Date",
        "reportType": "card",
        "display": [
            "docName",
            "reviewed",
            "expiry"
        ]
    },
    {
        "reportName": "Unknown",
        "reportTitle": "Unknown report",
        "displayName": "Report may not exist",
        "reportType": "",
        "display": []
    }
]

export default config;