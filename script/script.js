
const cardContainer = document.querySelector('.card-container');
const totalCountElement = document.getElementById('total-count');
const interviewCountElement = document.getElementById('interview-count');
const rejectedCountElement = document.getElementById('rejected-count');
const jobCountElement = document.getElementById('jobs-count')
let activeFilter = 'all';


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


function filterJobs(jobs, event) {
    activeFilter = jobs;
    const allCards = document.querySelectorAll('.job-card');
    const noJobsAvailable = document.getElementById('no-jobs-available');

    let showCount = 0;

    allCards.forEach(card => {
        if (jobs === 'all') {
            card.style.display = 'block';
            showCount++
        }
        else {
            if (card.getAttribute('data-status') === jobs) {
                card.style.display = 'block';
                showCount++
            }
            else {
                card.style.display = 'none';
            }
        }
    })

    if (showCount === 0) {
        noJobsAvailable.classList.remove('hidden');
    }
    else {
        noJobsAvailable.classList.add('hidden');
    }
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

    if (e.target.classList.contains('reject-btn')) {
        card.setAttribute('data-status', 'rejected');
        spanBadge.innerText = 'Rejected';
        spanBadge.className = 'text-white font-medium bg-error w-[150px] py-2 text-center rounded-md mb-4 inline-block';
    }

    if (e.target.classList.contains('delete-btn')) {
        card.remove();

    }
    changeDashboard();
    filterJobs(activeFilter);
})


allButton.addEventListener('click', (e) => filterJobs('all', e));
interviewButton.addEventListener('click', (e) => filterJobs('interview', e));
rejectedButton.addEventListener('click', (e) => filterJobs('rejected', e));

changeDashboard();





