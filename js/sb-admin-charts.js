// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';



// -- Pie Chart Example
var ctx3 = document.getElementById("revenueChart");
var revenueChart = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ["Local Tax Levy (57%)", "State Aid (41%)", "Other (2%)"],
    datasets: [{
      data: [9307516, 6627860, 307401],
      backgroundColor: ['#42033D', '#680E4B', '#7C238C'],
    }],
  },
});

// -- Bar Chart Example
var ctx = document.getElementById("stateAidChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2015-2016", "2016-2017", "2017-2018"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "#4B0082",
      borderColor: "rgba(2,117,216,1)",
      data: [6739358, 6735524, 6744496],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 7000000,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// -- Pie Chart Example
var ctx2 = document.getElementById("appropriationChart");
var appropriationChart = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ["Transportation", "Benefits", "Capital Outlay", 
             "Charter School Tuition", "Regular Programs - Instruction", 
             "Special Education - Instruction", "After-School Activities", 
             "Out-of-District Tuition", "Support Services", 
             "Administrative Costs", "Custodial / Maintenance"],
    datasets: [{
      data: [5.0, 16.0, 0.1, 0.0, 31.0, 9.0, 2.0, 13.0, 8.0, 10.0, 6.0],
      backgroundColor: ['#4B0082', '#800080', '#8A2BE2', 
                        '#D8BFD8', "#9370DB", "#E6E6FA", 
                        "#8B008B", "#FFDAB9", "#FFEFD5", 
                        "#FFFACD", "#BDB76B"],
    }],
  },
});
