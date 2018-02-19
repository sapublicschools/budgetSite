// -- Pie Chart Example
var ctx3 = document.getElementById("fullRevenueChart");
var revenueChart = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ["Local Tax Levy (57%)", "State Aid (41%)", "Excess Surplus FY15 (FY15)", "SEMII (0%)", "Budgeted Interest (0%)", "Extra Ordinary Aid estimate (1%)", "Miscellaneous Sources (1%)"],
    datasets: [{
      data: [9307516, 6627860, 10333, 34402, 300, 135575, 75000],
      backgroundColor: ['#42033D', '#680E4B', '#7C238C', '#854798', "#7C72A0", "#95818D"],
    }],
  },
});

// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 111", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(86,35,133,0.2)",
      borderColor: "rgba(221,170,56,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(221,170,56,1)",
      pointBorderColor: "rgba(86,35,133,1)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [1, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
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
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
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