// const totalCount = document.getElementById('total-count');
// const interviewCount = document.getElementById('interview-count');
// const rejectCount = document.getElementById('rejected-count');

// const cards = document.querySelectorAll('.job-card');


// function dashboard() {
//     const total = cards.length;
//     let interview = 0;
//     let rejected = 0;
//     for (let i = 0; i < cards.length; i++) {
//         if (cards[i].getAttribute('data-status') == 'interview') {
//             interview++
//         }
//         if (cards[i].getAttribute('data-status') == 'rejected') {
//             rejected++
//         }
//     }

//     totalCount.innerText = total;
//     interviewCount.innerText = interview;
//     rejectCount.innerText = rejected;
// }

// for (let i = 0; i < cards.length; i++) {
//     const interviewBtn = cards[i].getElementsByClassName('interview-btn')[0];
//     const rejectBtn = cards[i].getElementsByClassName('reject-btn')[0];
//     const deleteBtn = cards[i].getElementsByClassName('delete-btn')[0];

//     interviewBtn.onclick = function(){
//         cards[i].setAttribute('data-status', 'interview')
//         dashboard()
//     }

//     rejectBtn.onclick = function(){
//         cards[i].setAttribute('data-status', 'rejected');
//         dashboard();
//     }

//     deleteBtn.onclick = function(){
//         cards[i].remove();
//         dashboard()
//     }
// }
// dashboard()



const cardContainer = document.querySelector('.card-container');
const totalCountElement = document.getElementById('total-count');
const interviewCountElement = document.getElementById('interview-count');
const rejectedCountElement = document.getElementById('rejected-count');
const jobCountElement = document.getElementById('jobs-count')


// Tab er button gula k dhorte hobe
const allButton = document.getElementById('all-btn');
const interviewButton = document.getElementById('interview-btn');
const rejectedButton = document.getElementById('reject-btn');


function changeDashboard() {
    const allCards = document.querySelectorAll('.job-card');
    const interviewCards = document.querySelectorAll('.job-card[data-status="interview"]');
    const rejectedCards = document.querySelectorAll('.job-card[data-status="rejected"]');

    totalCountElement.innerText = allCards.length;
    interviewCountElement.innerText = interviewCards.length;
    rejectedCountElement.innerText = rejectedCards.length;


    jobCountElement.innerText = `${allCards.length} jobs`
}

function filterJobs(jobs) {
    const allCards = document.querySelectorAll('.job-card');
    allCards.forEach(card => {
        if (jobs === 'all') {
            card.style.display = 'block'
        }
        else {
            card.style.display = card.getAttribute('data-status') === jobs ? 'block' : 'none'
        }
    })

    [allButton, interviewButton, rejectedButton].forEach(btn => btn.classList.replace('btn-info', 'btn-soft'));
    event.currentTarget.classList.replace('btn-soft', 'btn-info');
}

cardContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.job-card');
    if (!card) return;

    const spanBadge = card.querySelector('span');
    const currentJobs = card.getAttribute('data-status');

    if (e.target.classList.contains('interview-btn')) {
        card.setAttribute('data-status', 'interview');
        spanBadge.innerText = 'Interview';
        spanBadge.className = 'text-white font-medium bg-success w-[150px] py-2 text-center rounded-md mb-4 inline-block';
    }

    if(e.target.classList.contains('reject-btn')){
        card.setAttribute('data-status', 'rejected');
        spanBadge.innerText = 'Rejected';
        spanBadge.className = 'text-white font-medium bg-error w-[150px] py-2 text-center rounded-md mb-4 inline-block';
    }

    if (e.target.classList.contains('delete-btn')) {
        card.remove();

    }
    changeDashboard();
})

allButton.addEventListener('click', (e)=> filterJobs('all'));
interviewButton.addEventListener('click', (e)=> filterJobs('interview'));
rejectedButton.addEventListener('click', (e)=> filterJobs('rejected'));


changeDashboard();




