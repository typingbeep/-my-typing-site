function startTest() {
    const sampleText = document.getElementById('sample-text').textContent;
    const inputText = document.getElementById('input-text').value;
    const startTime = new Date();
    const words = inputText.trim().split(/\s+/).length;
    const timeTaken = (new Date() - startTime) / 1000 / 60; // minutes
    const wpm = Math.round(words / timeTaken) || 0;
    const accuracy = inputText === sampleText ? 100 : Math.round((inputText.length / sampleText.length) * 100);
    document.getElementById('result').textContent = `WPM: ${wpm}, एक्यूरेसी: ${accuracy}%`;
}

function submitAudioTest() {
    const audioInput = document.getElementById('audio-input').value;
    document.getElementById('audio-result').textContent = `जमा किया: ${audioInput}`;
}