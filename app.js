const daysLeft_span = document.getElementById('days-left');

function countdown() {
    let days = 0;
    let diff = 0;

    let todaysDate = new Date();
    let examDay = new Date('06/06/2021');

    diff = examDay - todaysDate;
    
    days = Math.round(diff/(1000 * 60 * 60 * 24));

    daysLeft_span.innerText = days + 1;
}

countdown();