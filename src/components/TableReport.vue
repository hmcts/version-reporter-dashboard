<script>
import reports from "@/modules/reports.js";
import _ from "lodash";

export default {
  name: "TableReport",
  props: ['reportName'],
  data() {
    return {
      display: null,
      rowData: [],
      metadata: {type: Object},
      totalPages: 0,
      currentPage: 1,
      isFiltered: true,
      tableFilters: {
        columns: {value: '', keys: ['title', 'repository','verdict', 'createdAt']}
      }
    };
  },
  methods: {
    formatDate: (data) => {
      return new Intl.DateTimeFormat('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'Europe/London'
      }).format(new Date(data));
    }
  },
  beforeMount() {
    try {
      this.metadata = reports.getMetadata(this.reportName);
      this.display = this.metadata.display;
      reports
          .getAllRecords(this.reportName)
          .then((d) => {
            this.rowData = d.data;
            _.each(this.rowData, (data) => {
              data['createdAt'] = this.formatDate(data['createdAt']);
            });
          });
    } catch (e) {
      console.log('TableReport:', e);
    }
  },
}
</script>

<template>
  <div class="table-filter">
    <label>Filter by: Title | Repo | Verdict | Date</label>
    <input type="text" v-model="tableFilters.columns.value"/>
  </div>
  <VTable
      :data="rowData"
      :pageSize="15"
      :filters="tableFilters"
      v-model:currentPage="currentPage"
      @totalPagesChanged="totalPages = $event"
  >
    <template #head>
      <tr>
        <th class="verdict-column">&nbsp</th>
        <slot v-for="item in display.column">
          <VTh :sortKey="item.field">{{ item.title }}</VTh>
        </slot>
      </tr>
    </template>
    <template #body="{rows}">
      <tr v-for="row in rows" :key="row.id" :class="[row['colorCode']]">
        <td class="verdict-column" :class="[row['colorCode']]">&nbsp;</td>
        <td><a :href="row.url" target="_blank" :title="row.repositoryWithOwner">{{ row.title }}</a></td>
        <td>{{ row.repository }}</td>
        <td>{{ row.createdBy }}</td>
        <td>{{ row.createdAt }}</td>
        <td class="center-text">{{ row.daysOpened }}</td>
        <!--        <td class="center-text">{{ row.verdict }}</td>-->
      </tr>
    </template>
  </VTable>
  <VTPagination
      v-model:currentPage="currentPage"
      :total-pages="totalPages"
      :boundary-links="true"
  />
</template>


<style scoped>

</style>