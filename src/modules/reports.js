import config from "@/modules/config.js";
import axios from "axios";

const {getMetadata} = config;

const reports = {
    getMetadata: (reportName) => {
        return getMetadata(reportName);
    },
    getAllRecords: async (reportName) => {
        const hostPath = `${window.location.host}/version-reporter-dashboard`;
        const reportUrl = `${hostPath}/reports/${reportName}.json`;
        try {
            return axios.get(reportUrl, {responseType: 'json'});
            // return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default reports;