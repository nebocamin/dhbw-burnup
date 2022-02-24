$(function () {
  $('#container').highcharts({
    title: {
      text: 'DHBW Burn Up Chart',
    },
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    xAxis: {
      categories: ['Start','1.Morgen','1. Nachmittag','2.Morgen','2.Nachmittag']
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      plotLines: [{
        value: 0,
        width: 1
      }]
    },
    tooltip: {
      valueSuffix: 'pos',
      crosshairs: true,
      shared: true
    },
    series: [
      {
        name: 'Ideal',
        color: 'rgba(0,255,0,0.25)',
        lineWidth: 1,
        data: [0,37,62,95,119]
      }, {
        name: 'Actual',
        color: 'rgba(0,120,200,0.75)',
        KWker: {
          radius: 10
        },
        data: [0,37,66,99,132]
      }, {
        name: 'Maximal',
        color: 'rgba(225,200,0,0.75)',
        KWker: {
          radius: 2
        },
        data: [119,119,119,119,119]
      }
    ]
  });
});
