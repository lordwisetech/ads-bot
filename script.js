let accessKey = 'bot'; // Set your access key here
let ads = ["https://www.profitablecpmrate.com/pmy3b5m27r?key=a1a01ca4cf215de9523bf26ddc5532a8",
    "https://www.profitablecpmrate.com/zzse4wbzy1?key=05a1b5039f489d7a0d56be1584005f1f",
    "https://www.profitablecpmrate.com/xenzs7swd4?key=5c2f163830246a41565b5d8c2bd694cc",
    "https://www.profitablecpmrate.com/zb7muzm5yw?key=5d840a68ab542f32850f5f1ec5bcc061",
"https://www.profitablecpmrate.com/j3d6dv5s?key=3af9ee2141841b4a86a8303c7873c4aa",
"https://www.profitablecpmrate.com/xjwhfrene?key=b90e7ca701cbac772a9bae4c8ab9f01f"];
let currentAdIndex = 0;
let countdownInterval;

function submitAccessKey() {
    const enteredKey = document.getElementById('accessKey').value;
    if (enteredKey === accessKey) {
        document.getElementById('accessSection').style.display = 'none';
        document.getElementById('adInputSection').style.display = 'block';
    } else {
        alert('Invalid Access Key!');
    }
}

function addAd() {
    const adLink = document.getElementById('adLink').value;
    if (adLink) {
        ads.push(adLink);
        document.getElementById('adLink').value = ''; // Clear input after adding
        alert('Ad link added!');
    } else {
        alert('Please enter a valid ad link');
    }
}

function displayAds() {
    if (ads.length > 0) {
        document.getElementById('adInputSection').style.display = 'none';
        document.getElementById('adsDisplaySection').style.display = 'block';
        showAd(); // Show the first ad immediately
    } else {
        alert('No ads to display');
    }
}

function showAd() {
    if (ads.length === 0) return;

    // Open the current ad in a new window
    const adUrl = ads[currentAdIndex];
    window.open(adUrl, '_blank', 'width=800,height=600');

    // Start the countdown for this ad
    startCountdown();
}

function startCountdown() {
    let timeLeft = 5; // 3 minutes
    document.getElementById('timer').textContent = timeLeft;

    clearInterval(countdownInterval); // Clear previous countdown if any
    countdownInterval = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            currentAdIndex = (currentAdIndex + 1) % ads.length; // Move to the next ad
            showAd(); // Display the next ad in a new window
        }
    }, 1000); // Update every second
}
