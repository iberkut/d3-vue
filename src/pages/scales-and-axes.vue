<template>
  <div>
    <h1>Linear Scales</h1>
    <linear-scales />
    <h1>Band Scales</h1>
    <band-scales />
    <h1>Min, Max, Extent</h1>
    <min-max-extent />
  </div>
</template>

<script>
  import LinearScales from '../components/scales-and-axes/LinearScales'
  import BandScales from '../components/scales-and-axes/BandScales'
  import MinMaxExtent from '../components/scales-and-axes/MinMaxExtent'
  export default {
    components: {
      LinearScales,
      BandScales,
      MinMaxExtent
    }
  }
</script>
