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



// Selecting key elements
const cardContainer = document.querySelector('.card-container');
const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');
const jobsCountEl = document.getElementById('jobs-count');

// Tab buttons
const allBtn = document.getElementById('all-btn');
const interviewTabBtn = document.getElementById('interview-btn');
const rejectTabBtn = document.getElementById('reject-btn');

function updateDashboard() {
    const allCards = document.querySelectorAll('.job-card');
    const interviewCards = document.querySelectorAll('.job-card[data-status="interview"]');
    const rejectedCards = document.querySelectorAll('.job-card[data-status="rejected"]');

    // Update Dashboard Counts
    totalCountEl.innerText = allCards.length;
    interviewCountEl.innerText = interviewCards.length;
    rejectedCountEl.innerText = rejectedCards.length;

    // Update "Available Jobs" count based on current filter/total
    jobsCountEl.innerText = `${allCards.length} Jobs`;
}

function filterJobs(status) {
    const allCards = document.querySelectorAll('.job-card');
    allCards.forEach(card => {
        if (status === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = card.getAttribute('data-status') === status ? 'block' : 'none';
        }
    });

    // Update Tab UI (Active state)
    [allBtn, interviewTabBtn, rejectTabBtn].forEach(btn => btn.classList.replace('btn-info', 'btn-soft'));
    event.currentTarget.classList.replace('btn-soft', 'btn-info');
}

// Event Delegation for Card Buttons
cardContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.job-card');
    if (!card) return;

    const statusBadge = card.querySelector('span');
    const currentStatus = card.getAttribute('data-status');

    // Handle Interview Button Click
    if (e.target.classList.contains('interview-btn')) {
        card.setAttribute('data-status', 'interview');
        statusBadge.innerText = 'Interview';
        statusBadge.className = "text-white font-medium bg-success w-[150px] py-2 text-center rounded-md mb-4 inline-block";
    }

    // Handle Rejected Button Click
    if (e.target.classList.contains('reject-btn')) {
        card.setAttribute('data-status', 'rejected');
        statusBadge.innerText = 'Rejected';
        statusBadge.className = "text-white font-medium bg-error w-[150px] py-2 text-center rounded-md mb-4 inline-block";
    }

    // Handle Delete Button Click
    if (e.target.classList.contains('delete-btn')) {
        card.remove();
    }

    updateDashboard();
});

// Tab Listeners
allBtn.addEventListener('click', (e) => filterJobs('all'));
interviewTabBtn.addEventListener('click', (e) => filterJobs('interview'));
rejectTabBtn.addEventListener('click', (e) => filterJobs('rejected'));

// Initial Count
updateDashboard();





