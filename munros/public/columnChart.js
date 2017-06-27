var ColumnChart = function (title, data, categories) {

  var container = document.querySelector('#column-chart');

  var chart = Highcharts.chart(container, {
      chart: {
          type: 'line'
      },
      title: {
          text: title
      },
      xAxis: {
          categories: categories
      },
      yAxis: {
          title: {
              text: 'Scotland's Munros'
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          name: 'Munro Heights',
          data: data
      }]
  });
}
