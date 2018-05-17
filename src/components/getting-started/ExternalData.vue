<template>
</template>

<script>
  export default {
    mounted() {
      d3.csv('data/ages.csv').then(data => {
        data.forEach(d => {
          d.age = +d.age
        })

        const svg = d3.select(this.$el).append('svg')
          .attr('width', 400)
          .attr('height', 400)

        const circles = svg.selectAll('circle')
          .data(data)

        circles.enter()
          .append('circle')
          .attr('cx', (d, i) => {
            return (i * 50) + 25
          })
          .attr('cy', 100)
          .attr('r', d => {
            return d.age * 2
          })
          .attr('fill', d => {
            return d.name === 'Tony' ? 'blue' : 'green'
          })
      })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>
