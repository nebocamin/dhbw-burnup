$(function () {
  $('#container').highcharts({
    title: {
      text: 'CSBO Sales Burn Up Chart',
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
      categories: ['Start','Sprint 1','Sprint 2','Sprint 3','Sprint 4','Sprint 5','Sprint 6','Sprint 7','Sprint 8']
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
        data: [0,60,189,340,486,628,770,912]
      }, {
        name: 'Actual',
        color: 'rgba(0,120,200,0.75)',
        KWker: {
          radius: 10
        },
        data: [0,60,189,340,486]
      }, {
        name: 'Startgeschwindigkeit',
        color: 'rgba(225,200,0,0.75)',
        KWker: {
          radius: 2
        },
        data: [0,60,120,180,240,300,360,420]
      }
    ]
  });
});
