<template>
  <div ref="graph"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'Graph',
  data() {
    return {
      nodes: [
        { id: 'Herb', center: true },
        { id: 'Celery' },
        { id: 'Garlic Clove' },
        { id: 'Garlic' },
        { id: 'Green Onion' },
        { id: 'Cilantro' },
        { id: 'Garlic Powder' }
      ],
      links: [
        { source: 'Herb', target: 'Celery' },
        { source: 'Herb', target: 'Garlic Clove' },
        { source: 'Herb', target: 'Garlic' },
        { source: 'Herb', target: 'Green Onion' },
        { source: 'Herb', target: 'Cilantro' },
        { source: 'Herb', target: 'Garlic Powder' }
      ]
    };
  },
  mounted() {
    this.createGraph();
  },
  methods: {
    createGraph() {
      const width = 600;
      const height = 600;
      const svg = d3.select(this.$refs.graph)
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

      const simulation = d3.forceSimulation(this.nodes)
                           .force('link', d3.forceLink(this.links).id(d => d.id).distance(100))
                           .force('charge', d3.forceManyBody().strength(-500))
                           .force('center', d3.forceCenter(width / 2, height / 2));

      const link = svg.append('g')
                      .attr('class', 'links')
                      .selectAll('line')
                      .data(this.links)
                      .enter()
                      .append('line')
                      .attr('stroke-width', 2)
                      .attr('stroke', '#ccc');

      const node = svg.append('g')
                      .attr('class', 'nodes')
                      .selectAll('circle')
                      .data(this.nodes)
                      .enter()
                      .append('circle')
                      .attr('r', d => d.center ? 20 : 10) // 设置中心节点的半径为20，其他节点为10
                      .attr('fill', '#000');

      const text = svg.append('g')
                      .attr('class', 'texts')
                      .selectAll('text')
                      .data(this.nodes)
                      .enter()
                      .append('text')
                      .text(d => d.id)
                      .attr('dy', d => d.center ? -25 : -15) // 调整文字位置
                      .attr('text-anchor', 'middle');

      simulation.on('tick', () => {
        link.attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('cx', d => d.x)
            .attr('cy', d => d.y);

        text.attr('x', d => d.x)
            .attr('y', d => d.y);
      });
    }
  }
};
</script>

<style scoped>
.nodes circle {
  cursor: pointer;
  stroke: #fff;
  stroke-width: 1.5px;
}

.texts {
  font: 12px sans-serif;
  pointer-events: none;
}
</style>


  