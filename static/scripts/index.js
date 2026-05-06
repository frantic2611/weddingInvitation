

const weddingDate = new Date(2026, 6, 11);

function updateDate(){
    const current = new Date();
    let diff = weddingDate - current;

    if(diff<0){
        document.querySelector('.num-months').textContent = '0';
        document.querySelector('.num-weeks').textContent = '0';
        document.querySelector('.num-days').textContent = '0';
        return;
    }

    let totalDays = Math.floor(diff/ (1000*60*60*24));
    const months = Math.floor(totalDays/30);
    totalDays = totalDays - months*30;
    const weeks = Math.floor(totalDays/7);
    totalDays = totalDays - 7*weeks;
    const days = totalDays;
    let monthsText, weeksText, daysText;


    if(months === 1 ){
        monthsText = 'месяц';
    } else if(months === 2 || months === 3 || months === 4){
        monthsText = 'месяца';
    }else { monthsText = 'месяцев';}

    if(weeks === 1){
        weeksText = 'неделя';
    } else if(weeks === 2 || weeks === 3 || weeks === 4){
        weeksText = 'недели';
    } else {
        weeksText = 'недель';
    }

    if(days === 1 ){
        daysText = 'день';
    } else if (days === 2 || days === 3 || days === 4){
        daysText = 'дня';
    } else {
        daysText = 'дней';
    }


    document.querySelector('.num-months').textContent = months.toString();
    document.querySelector('.num-weeks').textContent = weeks.toString();
    document.querySelector('.num-days').textContent = days.toString();


    document.querySelector('.word-months').textContent = monthsText;
    document.querySelector('.word-weeks').textContent = weeksText;
    document.querySelector('.word-days').textContent = daysText;


}

document.addEventListener('DOMContentLoaded', function() {
    updateDate();
});
