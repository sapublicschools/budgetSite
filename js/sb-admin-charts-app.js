var ctx = document.getElementById("myBarChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Instruction", "Special Education",
             "Out-of-District Tuition / Transportation", "Benefits",
             "Support and Maintenance", "Other"],
    datasets: [{
      data: [5241463, 1468024, 3003899,
             2628192, 3875456,
             25743],
             backgroundColor: ['#4B0082', '#800080', '#8A2BE2', 
                        '#D8BFD8', "#9370DB", "#E6E6FA"],
    }]
  },
});

// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["13/14", "14/15", "15/16", "16/17", "17/18"],
    datasets: [{
      label: "Cost",
      lineTension: 0.3,
      backgroundColor: "rgba(86,35,133,0.2)",
      borderColor: "rgba(221,170,56,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(221,170,56,1)",
      pointBorderColor: "rgba(221,170,56,1)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(75,0,130, 1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [2149334, 2463380, 2729781, 3080168, 3003899],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 5
        }
      }],
      yAxes: [{
        ticks: {
          min: 2e6,
          max: 3.5e6,
          maxTicksLimit: 4
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});