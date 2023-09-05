<script>
import reports from "@/modules/reports.js";
import dayjs from 'dayjs';
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
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('ddd MMM D, YYYY');
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
        <div class="item-header h5" v-if="reportName == 'helmcharts'">
          {{ report['chart'] }}
        </div>
        <div class="item-header h5" v-if="reportName == 'docsoutdated'">
          <a class="header-link" :href="report['url']" target="_blank" :title="report['docTitle']">{{ report['docTitle'] }}</a>
        </div>
        <div class="item-content">
          <ul class="item-content-ul">
            <li class="item-content-ul-li" v-for="property in metadata.display">
              <span class="capitalize">{{ property }}:</span>
              <span class="content-value" v-if="['reviewed', 'expiry'].includes(property)">{{ formatDate(report[property]) }}</span>
              <span class="content-value" v-else>{{ report[property] }}</span>
            </li>
          </ul>
        </div>
        <div class="item-footer">&nbsp;</div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>