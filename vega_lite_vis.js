var vgSpec = 'fifa_map.vg.json';

vegaEmbed('#map_chart', vgSpec, { actions: false })
  .then(function(_) {
  })
  .catch(console.error);