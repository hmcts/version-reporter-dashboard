<script>
import CardReport from "@/components/CardReport.vue";
import ListReport from "@/components/ListReport.vue";
import TableReport from "@/components/TableReport.vue";
import config from "@/modules/config.js";
import reports from "@/modules/reports.js";

const {getDateTimeCurrentHour} = config;

export default {
  name: "ReportsPage",
  components: {TableReport, ListReport, CardReport},
  data() {
    return {
      metadata: {type: Object},
      reportName: {type: String},
      lastUpdate: {type: String}
    };
  },
  methods: {
    loadReport(reportName) {
        this.reportName = reportName;
        this.lastUpdate = getDateTimeCurrentHour();
        this.metadata = reports.getMetadata(this.reportName);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.loadReport(to.params.reportName);
    })
  },
  beforeRouteUpdate(to, from) {
    this.loadReport(to.params.reportName);
  },
  // beforeRouteLeave(to, from) {
  //   console.log('beforeRouteLeave');
  // },
};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            {{ metadata.reportTitle }}
          </h4>
          <p class="card-category">
            {{ metadata.displayName }}
          </p>
        </div>
        <div class="card-body">
          <div class="vrs-report">
            <CardReport v-if="(metadata.reportType === 'card')" :reportName="reportName" />
            <ListReport v-else-if="(metadata.reportType === 'list')" :reportName="reportName" />
            <TableReport v-else-if="(metadata.reportType === 'table')" :reportName="reportName" />
            <div v-else>No data or report type</div>
          </div>
          <div class="footer">
            <div class="chart-legend">
              <div>
                <i class="fa fa-circle text-info"></i> Ok
                <i class="fa fa-circle text-warning"></i> Review
                <i class="fa fa-circle text-danger"></i> Upgrade
              </div>
            </div>
            <hr>
            <div class="stats">
              <span><i class="fa fa-refresh"></i> Updated {{ lastUpdate }}</span></div>
            <div class="pull-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>