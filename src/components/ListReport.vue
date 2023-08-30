<script>
import reports from "@/modules/reports.js";
import _ from "lodash";

export default {
  name: "ListReport",
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
            this.reports = _.groupBy(d.data, (d) => d.resourceType);
          });
    } catch (e) {
      console.log('ListReport:', e);
    }
  }
}
</script>

<template>
  <div v-for="(group, name) in reports" class="list-group list-item">
    <div class="list-item"><h2>{{ name }}'s</h2></div>
    <div v-for="report in group" class="list-group-items list-item">
      <table class="list-group-table">
        <tbody>
        <tr v-for="item in metadata.display" class="list-group-row">
          <td class="list-group-item-left">{{ item }}</td>
          <td class="list-group-item-right">
            <i v-if="item == 'verdict'" class="fa fa-circle" :class="[report['colorCode']]"/>
            <span :class="[ item == 'verdict' ? 'verdict' : '']">{{ report[item] }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>