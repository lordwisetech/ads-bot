let accessKey = 'bot'; // Set your access key here
let ads = [
    "https://mysteriousborder.com/bD3ZV.0AP-3NpUvkbMmXVtJ/Z/DR0p2RM_Txg/wuMXjucV3sLuT/YOxhOJDkAvyeNIzZgA",
    "https://mysteriousborder.com/b/3SV.0LPb3wp/vgbdm/V/JuZBDD0t1GNBzzA/3/MZz/A-4BLsTCUg3KMDDOcRzGMNDkkB"];






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
    let timeLeft = 0; // 0 secons 
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
