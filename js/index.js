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
      categories: ['Sprint 1', 'Sprint 2', 'Sprint 3','Sprint 4','Sprint 5',]
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
        data: [1, 50, 100, 150, 200, 250, 300]
      }, {
        name: 'Actual',
        color: 'rgba(0,120,200,0.75)',
        KWker: {
          radius: 10
        },
        data: [1, 60, 189, 340]
      }, {
        name: 'Normal',
        color: 'rgba(225,200,0,0.75)',
        KWker: {
          radius: 2
        },
        data: [278,278,278,278,278,278,278,278,278]
      }
    ]
  });
});
