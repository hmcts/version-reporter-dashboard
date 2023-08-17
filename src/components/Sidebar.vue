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
      <a href="#" title="Home" class="active nav-item">
        <i class="fa-solid fa-house" aria-hidden="true"></i>
      </a>
      <a href="#" title="Renovate Report" class="nav-item">
        <i class="fa-solid fa-code-compare" aria-hidden="true"></i>
      </a>
      <a href="#" title="Helm Report" class="nav-item">
        <i class="fa-solid fa-thermometer" aria-hidden="true"></i>
      </a>
      <a href="#" title="Palo Alto Report" class="nav-item">
        <i class="fa-solid fa-building-shield" aria-hidden="true"></i>
      </a>
      <a href="#" title="Docs Out-of-Date Report" class="nav-item">
        <i class="fa fa-book" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}

</script>

<style scoped>

</style>