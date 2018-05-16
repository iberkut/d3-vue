<template>
  <div class="about">
  </div>
</template>

<script>
  export default {
    mounted() {
      const data = [25, 20, 10, 12, 15]

      const svg = d3.select('.about').append('svg')
        .attr('width', 400)
        .attr('height', 400)

      const circles = svg.selectAll('circle')
        .data(data)

      circles.enter()
        .append('circle')
          .attr('cx', (d, i) => {
            console.log(`Item: ${d} Index: ${i}`)
            return (i * 50) + 25
          })
          .attr('cy', 100)
          .attr('r', d => {
            console.log(`Item: ${d}`)
            return d
          })
          .attr('fill', 'red')

    }
  }
</script>
