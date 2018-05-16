<template>
  <div class="home">
  </div>
</template>

<script>
  export default {
    mounted() {
      const svg = d3.select('.home').append('svg')
        .attr('width', 400)
        .attr('height', 400)

      const circle = svg.append('circle')
        .attr('cx', 100)
        .attr('cy', 100)
        .attr('r', 100)
        .attr('fill', 'blue')

      const rect = svg.append('rect')
        .attr('x', 300)
        .attr('y', 300)
        .attr('width', 100)
        .attr('height', 70)
        .attr('fill', 'red')
    }
  }
</script>
