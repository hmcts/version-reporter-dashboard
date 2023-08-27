<script setup>
import {ref} from "vue";
import {RouterLink} from "vue-router";

const reportName = ref("");

const setReport = (name) => {
  if (name == '/') {
    reportName.value = "";
  } else {
    reportName.value = name;
  }
};

</script>

<template>
  <div id="left-section" class="sidebar sidebar-wrapper">
    <div class="logo">
      <a href="#">
        <div class="logo-img">
          <img src="../assets/gov_crest.png">
        </div>
      </a>
    </div>
    <div id="menu-div" class="vertical-menu">
      <router-link :to="{ name: 'home' }" class="active nav-item" title="Home"
                   @click="setReport('/')">
        <i class="fa-solid fa-house" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: 'reports', params: { reportName: 'renovate' } }" title="Renovate Report"
                   class="nav-item"
                   :class="{'selected' :  reportName == 'renovate'}"
                   @click="setReport('renovate')">
        <i class="fa-solid fa-code-compare" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: 'reports', params: { reportName: 'helmcharts' } }" title="Helm Charts Report" class="nav-item"
                   :class="{'selected' : reportName == 'helmcharts'}"
                   @click="setReport('helmcharts')">
        <i class="fa-solid fa-thermometer" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: 'reports', params: { reportName: 'paloalto' } }" title="Palo Alto Report"
                   class="nav-item"
                   :class="{'selected' : reportName == 'paloalto'}"
                   @click="setReport('paloalto')">
        <i class="fa-solid fa-building-shield" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{ name: 'reports', params: { reportName: 'out-of-date' } }" title="Document Out-of-Date Report"
                   class="nav-item"
                   :class="{'selected' : reportName == 'out-of-date'}"
                   @click="setReport('out-of-data')">
        <i class="fa fa-book" aria-hidden="true"></i>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>