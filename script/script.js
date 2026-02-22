const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectCount = document.getElementById('rejected-count');

const cards = document.querySelectorAll('.job-card');


function dashboard() {
    const total = cards.length;
    let interview = 0;
    let rejected = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute('data-status') == 'interview') {
            interview++
        }
        if (cards[i].getAttribute('data-status') == 'rejected') {
            rejected++
        }
    }

    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectCount.innerText = rejected;
}

for (let i = 0; i < cards.length; i++) {
    const interviewBtn = cards[i].getElementsByClassName('interview-btn')[0];
    const rejectBtn = cards[i].getElementsByClassName('reject-btn')[0];
    const deleteBtn = cards[i].getElementsByClassName('delete-btn')[0];

    interviewBtn.onclick = function(){
        cards[i].setAttribute('data-status', 'interview')
        dashboard()
    }

    rejectBtn.onclick = function(){
        cards[i].setAttribute('data-status', 'rejected');
        dashboard();
    }

    deleteBtn.onclick = function(){
        cards[i].remove();
        dashboard()
    }
}
dashboard()