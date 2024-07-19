var layout = {
  title: {
    text:'Plot Title',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: "orange",
  xaxis: {
    title: {
      text: 'x Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'y Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

var data = [
  {
    x: ['Blue (470)', 'Cyan (525)', 'Green (560)', 'Yellow (585)', 'Orange (610)', 'Red (645)', 'Deep Red (700)'],
    y: [31.92, 55.72, 45.16, 29.79, 24.75, 32.50, 49.25],
    marker:{
      color: ['rgba(0,14,255,0.75)', 'rgba(12,210,231,0.75)', 'rgba(20,200,35,0.75)', 'rgba(255,255,0,0.75)', 'rgba(255,200,0,0.75)', 'rgba(255,0,0,0.75)', 'rgba(152,1,1,0.75)']
    },
    type: 'bar'
  }
];

var layout = {
  title: 'Spectrometer Percent Reflectance by Color',
  yaxis: {title: 'Percent Reflectance'},
  xaxis: {title: 'Color'},
  barcornerradius: 10,
  barmode: 'stack'
};

Plotly.newPlot('data', data, layout);
