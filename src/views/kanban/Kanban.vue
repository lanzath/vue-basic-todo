<template>
  <div class="container-board">
    <div class="columns">
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">A fazer</div>
          </div>
          <div class="panel-body">
            {{ todos }}
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Concluídos</div>
          </div>
          <div class="panel-body">
            <!-- contents -->
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style scoped>
.container-board {
  height: calc(100vh - 100px);
  margin-top: 8px;
  padding: 10px;
}

.columns {
  height: 100%;
}

.columns .column .panel {
  height: 100%;
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, .2);
}
</style>
