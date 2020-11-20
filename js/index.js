$(function () {
  $('#container').highcharts({
    title: {
      text: 'Scrum Seminar Agenda Burn Up Chart',
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
      categories: ['Start','T1 Mittag','T1 Ende','T2 Mittag','T2 Ende']
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
        data: [0,37,74,93,124]
      }, {
        name: 'Actual',
        color: 'rgba(0,120,200,0.75)',
        KWker: {
          radius: 10
        },
        data: [0,36,62, 99]
      }, {
        name: 'Maximal',
        color: 'rgba(225,200,0,0.75)',
        KWker: {
          radius: 2
        },
        data: [174,175,175,173,147]
      }
    ]
  });
});
