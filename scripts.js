let totalPointsWeek = 0;

// Function to update total points
function updatePoints() {
    let totalPointsToday = 0;
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        if (task.checked) {
            totalPointsToday += parseInt(task.value);
        }
    });
    document.getElementById('totalPointsToday').textContent = totalPointsToday;
    document.getElementById('totalPointsWeek').textContent = totalPointsWeek + totalPointsToday;
    updateReward(totalPointsWeek + totalPointsToday);
}

// Function to update reward based on weekly points
function updateReward(totalPoints) {
    let rewardMessage = '';
    if (totalPoints > 400) {
        rewardMessage = 'Oreo Shake!';
    } else if (totalPoints <= 400 && totalPoints >= 300) {
        rewardMessage = 'Drawing Book worth Rs. 40';
    } else if (totalPoints < 300 && totalPoints >= 200) {
        rewardMessage = 'Drawing Pencils';
    } else if (totalPoints < 200 && totalPoints >= 100) {
        rewardMessage = 'Notebook';
    } else {
        rewardMessage = 'Pen';
    }
    document.getElementById('weeklyReward').textContent = rewardMessage;
}

// Function to check reward on the rewards page
function checkReward() {
    const points = parseInt(document.getElementById('pointsInput').value);
    let rewardMessage = '';
    if (points > 400) {
        rewardMessage = 'You get an Oreo Shake!';
    } else if (points <= 400 && points >= 300) {
        rewardMessage = 'You get a Drawing Book worth Rs. 40';
    } else if (points < 300 && points >= 200) {
        rewardMessage = 'You get Drawing Pencils';
    } else if (points < 200 && points >= 100) {
        rewardMessage = 'You get a Notebook';
    } else {
        rewardMessage = 'You get a Pen';
    }
    document.getElementById('rewardMessage').textContent = rewardMessage;
}

// Add event listeners to tasks
document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('change', updatePoints);
});

// Function to simulate the end of a day (for demonstration purposes)
function endOfDay() {
    totalPointsWeek += parseInt(document.getElementById('totalPointsToday').textContent);
    document.getElementById('totalPointsToday').textContent = 0;
    document.querySelectorAll('.task').forEach(task => {
        task.checked = false;
    });
    document.getElementById('totalPointsWeek').textContent = totalPointsWeek;
    updateReward(totalPointsWeek);
}

console.log("Welcome to our Environmental Sustainability website!");
