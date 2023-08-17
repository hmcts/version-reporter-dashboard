<script setup>
import Dashboard from './Dashboard.vue'

defineProps({
  reportName: String,
})

</script>

<template>
  <div id="center-section" class="wrapper main-panel">
    <div id="center-section-top" class="navbar navbar-light">
      <div class="container-fluid hmcts-title">
        <div class="h3">HM Courts &amp; Tribunal Service</div>
        <div class="h7">Version Reporter Dashboard</div>
      </div>
    </div>
    <div id="center-section-middle" class="content">
      <div class="container-fluid">
        <div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">
                    [[ Report Title ]]
                  </h4>
                  <p class="card-category">
                    [[ Report metadata ]]
                  </p>
                </div>
                <div class="card-body">
                  <div class="vrs-report">
                    <Dashboard />
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
                      <span><i class="fa fa-refresh"></i> Updated [x] [minutes] ago</span></div>
                    <div class="pull-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer id="center-section-bottom" class="footer">
      <div class="container-fluid justify-content-between d-flex flex-wrap">
        <nav>
          <ul>
            <li><a href="https://hmcts.github.io/" target="_blank" title="The HMCTS Way">The HMCTS Way</a></li>
          </ul>
        </nav>
        <div class="copyright d-flex flex-wrap">
          &copy; Coded by:&nbsp;HMCTS <a href="#" target="_blank">&nbsp;Platform Operations Team</a></div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: "MainPanel"
}
</script>

<style scoped>

</style>