<template>
  <div>
    <h1>Adding SVG</h1>
    <adding-svg />
    <hr>
    <h1>Data Joins</h1>
    <data-joins />
    <hr>
    <h1>External Data</h1>
    <external-data />
    <hr>
  </div>
</template>

<script>
  import AddingSvg from '../components/getting-started/AddingSvg'
  import DataJoins from '../components/getting-started/DataJoins'
  import ExternalData from '../components/getting-started/ExternalData'

  export default {
    components: {
      AddingSvg,
      DataJoins,
      ExternalData
    }
  }
</script>
