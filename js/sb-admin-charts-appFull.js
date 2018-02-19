var ctx = document.getElementById("myBarChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Reg. Instruction", "Special Education", 
             "After-School Activities", "Out-of-District Tuition",
             "Support Services", "Administrative Costs", 
             "Maintenance", "Transportation", "Benefits",
             "Capital Outlay", "Charter School Tuition"],
    datasets: [{
      data: [4954801, 1468024, 286662, 2159741,
             1312139, 1570600, 992717, 844158, 
             2628192, 1330, 24413],
             backgroundColor: ['#4B0082', '#800080', '#8A2BE2', 
                        '#D8BFD8', "#9370DB", "#E6E6FA", 
                        "#8B008B", "#FFDAB9", "#FFEFD5", 
                        "#FFFACD", "#BDB76B"],
    }]
  },
});