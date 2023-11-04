// ---------------------------------------------------------------------------------------
// Außenluftfeuchtigkeit check

var valuearray_aussenluftfeuchtigkeit = [];
var labelarray_aussenluftfeuchtigkeit = [];

$('.chartinfo-item').each(function(){
	if( this.matches('.w-condition-invisible')){}
  else{
  	if( this.matches('#aussenluftfeuchtigkeit') || this.matches('#aussenluftfeuchtigkeit-01') || 
    this.matches('#aussenluftfeuchtigkeit-02') || this.matches('#aussenluftfeuchtigkeit-03') || 
    this.matches('#aussenluftfeuchtigkeit-04') || this.matches('#aussenluftfeuchtigkeit-05') || 
    this.matches('#aussenluftfeuchtigkeit-06') || this.matches('#aussenluftfeuchtigkeit-07') || 
    this.matches('#aussenluftfeuchtigkeit-08') || this.matches('#aussenluftfeuchtigkeit-09') ||
    this.matches('#aussenluftfeuchtigkeit-10') || this.matches('#aussenluftfeuchtigkeit-11') ||
    this.matches('#aussenluftfeuchtigkeit-12') || this.matches('#aussenluftfeuchtigkeit-13') ||
    this.matches('#aussenluftfeuchtigkeit-14')
    ){
		    valueitem = $(this).text();
		    valuearray_aussenluftfeuchtigkeit.push(valueitem);
		    labelarray_aussenluftfeuchtigkeit.push(valueitem+" %");
		}
  }
});

new Chart(document.getElementById("aussenluftfeuchtiglkeit-chart"), {
    type: 'line',
    data: {
      labels: labelarray_aussenluftfeuchtigkeit,
      datasets: [
        {
        	label: ["Luftfeuchtigkeit Außen"],
          backgroundColor: ["#002e33"],
          borderColor: ["#002e33"],
          borderWidth: 1,
          data: valuearray_aussenluftfeuchtigkeit
          
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: {display: false},
          border: {display: false},
          ticks: {font: {size:9}}
        },
        y: {
          grid: {display: false},
          display: false
        }
      },
      title: {
        display: false,
        text: 'Popular Cereal 2020'
      },
      plugins: {
      	legend: {display: false}
      }
    }
});

// ---------------------------------------------------------------------------------------
// Innenluftfeuchtigkeit

var valuearray_innenluftfeuchtigkeit = [];
var labelarray_innenluftfeuchtigkeit = [];

$('.chartinfo-item').each(function(){
	if( this.matches('.w-condition-invisible')){}
  else{
  	if( this.matches('#innenluftfeuchtigkeit') || this.matches('#innenluftfeuchtigkeit-01') || 
    this.matches('#innenluftfeuchtigkeit-02') || this.matches('#innenluftfeuchtigkeit-03') || 
    this.matches('#innenluftfeuchtigkeit-04') || this.matches('#innenluftfeuchtigkeit-05') || 
    this.matches('#innenluftfeuchtigkeit-06') || this.matches('#innenluftfeuchtigkeit-07') || 
    this.matches('#innenluftfeuchtigkeit-08') || this.matches('#innenluftfeuchtigkeit-09') ||
    this.matches('#innenluftfeuchtigkeit-10') || this.matches('#innenluftfeuchtigkeit-11') ||
    this.matches('#innenluftfeuchtigkeit-12') || this.matches('#innenluftfeuchtigkeit-13') ||
    this.matches('#innenluftfeuchtigkeit-14')
    ){
		    valueitem = $(this).text();
		    valuearray_innenluftfeuchtigkeit.push(valueitem);
		    labelarray_innenluftfeuchtigkeit.push(valueitem+" %");
		}
  }
});

new Chart(document.getElementById("innenluftfeuchtiglkeit-chart"), {
    type: 'line',
    data: {
      labels: labelarray_innenluftfeuchtigkeit,
      datasets: [
        {
          label: ["Luftfeuchtigkeit Innen"],
          backgroundColor: ["#002e33"],
          borderColor: ["#002e33"],
          borderWidth: 1,
          data: valuearray_innenluftfeuchtigkeit
          
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: {display: false},
          border: {display: false},
          ticks: {font: {size:9}}
        },
        y: {
          grid: {display: false},
          display: false
        }
      },
      title: {
        display: false,
        text: 'Popular Cereal 2020'
      },
      plugins: {
      	legend: {display: false}
      }
    }
});

// ---------------------------------------------------------------------------------------
// Außentemperatur

var valuearray_aussentemperatur = [];
var labelarray_aussentemperatur = [];

$('.chartinfo-item').each(function(){
	if( this.matches('.w-condition-invisible')){}
  else{
  	if( this.matches('#aussentemperatur') || this.matches('#aussentemperatur-01') || 
    this.matches('#aussentemperatur-02') || this.matches('#aussentemperatur-03') || 
    this.matches('#aussentemperatur-04') || this.matches('#aussentemperatur-05') || 
    this.matches('#aussentemperatur-06') || this.matches('#aussentemperatur-07') || 
    this.matches('#aussentemperatur-08') || this.matches('#aussentemperatur-09') ||
    this.matches('#aussentemperatur-10') || this.matches('#aussentemperatur-11') ||
    this.matches('#aussentemperatur-12') || this.matches('#aussentemperatur-13') ||
    this.matches('#aussentemperatur-14')
    ){
		    valueitem = $(this).text();
		    valuearray_aussentemperatur.push(valueitem);
		    labelarray_aussentemperatur.push(valueitem+" "+String.fromCharCode(0x2103));
		}
  }
});

new Chart(document.getElementById("aussentemperatur-chart"), {
    type: 'line',
    data: {
      labels: labelarray_aussentemperatur,
      datasets: [
        {
          label: ["Temperatur Außen"],
          backgroundColor: ["#002e33"],
          borderColor: ["#002e33"],
          borderWidth: 1,
          data: valuearray_aussentemperatur
          
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: {display: false},
          border: {display: false},
          ticks: {font: {size:9}}
        },
        y: {
          grid: {display: false},
          display: false
        }
      },
      title: {
        display: false,
        text: 'Popular Cereal 2020'
      },
      plugins: {
      	legend: {display: false}
      }
    }
});


// ---------------------------------------------------------------------------------------
// Innentemperatur

var valuearray_innentemperatur = [];
var labelarray_innentemperatur = [];

$('.chartinfo-item').each(function(){
	if( this.matches('.w-condition-invisible')){}
  else{
  	if( this.matches('#innentemperatur') || this.matches('#innentemperatur-01') || 
    this.matches('#innentemperatur-02') || this.matches('#innentemperatur-03') || 
    this.matches('#innentemperatur-04') || this.matches('#innentemperatur-05') || 
    this.matches('#innentemperatur-06') || this.matches('#innentemperatur-07') || 
    this.matches('#innentemperatur-08') || this.matches('#innentemperatur-09') ||
    this.matches('#innentemperatur-10') || this.matches('#innentemperatur-11') ||
    this.matches('#innentemperatur-12') || this.matches('#innentemperatur-13') ||
    this.matches('#innentemperatur-14')
    ){
		    valueitem = $(this).text();
		    valuearray_innentemperatur.push(valueitem);
		    labelarray_innentemperatur.push(valueitem+" "+String.fromCharCode(0x2103));
		}
  }
});

new Chart(document.getElementById("innentemperatur-chart"), {
    type: 'line',
    data: {
      labels: labelarray_innentemperatur,
      datasets: [
        {
          label: ["Temperatur Innen"],
          backgroundColor: ["#002e33"],
          borderColor: ["#002e33"],
          borderWidth: 1,
          data: valuearray_innentemperatur
          
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: {display: false},
          border: {display: false},
          ticks: {font: {size:9}}
        },
        y: {
          grid: {display: false},
          display: false
        }
      },
      title: {
        display: false,
        text: 'Popular Cereal 2020'
      },
      plugins: {
      	legend: {display: false}
      }
    }
});

// ---------------------------------------------------------------------------------------
// Gewicht

$('.gewichtstrend').each(function(){
	console.log( parseFloat($(this).text()).toFixed(2));
	if( parseFloat($(this).text()).toFixed(2) > 0 ) {
		var text_insert = $(this).text();
		$(this).text(String.fromCharCode(0x25B2)+" "+text_insert);
		// console.log( $(this).text() );
	}
	else if( parseFloat($(this).text()).toFixed(2) < 0 ) {
		var text_insert = $(this).text();
		$(this).text(String.fromCharCode(0x25BC)+" "+text_insert);
		// console.log( $(this).text() );
	}
});

// ---------------------------------------------------------------------------------------
// G25 häufgste Pflanzensorten

//231102_edna_neusserweg-chart
