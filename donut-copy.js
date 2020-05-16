new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Body Image", "Sleep", "Fear of missing out (FOMO)", "Bullying", "Anxiety", "Depression"],
      datasets: [
        {
          label: "% Percentage",
          backgroundColor: ["#A61D17", "#D84039","#E7861F","#F5BB1E","#FCE373", "#FFFACD"],
          // ['#FFFACD', '#DAA520', '#DDA0DD', '#3c1f41','#87CEFA','#4682B4' ]},
          data: [55,13,12,11,10,6]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Negative effects of Instagram (ranked by percentage)'
      },
      animation: {
               animateScale: true,
               animateRotate: true
           },
           tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
        	var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor(((currentValue/total) * 100)+0.5);
          return percentage + "%";
        }
      }
    }
    }
});
