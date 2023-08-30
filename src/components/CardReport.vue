<script>
import reports from "@/modules/reports.js";
import _ from 'lodash';

export default {
  name: "CardReport",
  props: ['reportName'],
  data() {
    return {
      reports: {type: Object},
      metadata: {type: Object}
    }
  },
  beforeMount() {
    try {
      this.metadata = reports.getMetadata(this.reportName);
      reports
          .getAllRecords(this.reportName)
          .then((d) => {
            this.reports = d.data;
          });
    } catch (e) {
      console.log('CardReport:', e);
    }
  }

}
</script>

<template>
  <div class="flex-container">
    <div class="card-item" v-for="report in reports">
      <div :class="[report['colorCode']]">
        <div class="item-header h5">{{ report['chart'] }}</div>
        <div class="item-content">
          <ul class="item-content-ul">
            <li class="item-content-ul-li" v-for="property in metadata.display">
              <span class="capitalize">{{ property }}</span>:<span class="content-value">{{ report[property] }}</span>
            </li>
          </ul>
        </div>
        <div class="item-footer">&nbsp;</div> <!-- Verdict: {{ report.verdict }} -->
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>