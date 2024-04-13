function summarizeText() {
    const textInput = document.getElementById('textInput').value;

    // Dummy function to simulate text summarization (replace with actual library or AI model)
    const summary = dummyTextSummarization(textInput);
    document.getElementById('summaryResult').innerText = summary;
}

// Dummy function to simulate text summarization (replace with actual library or AI model)
function dummyTextSummarization(text) {
    // In a real application, you would use a text summarization library or AI model
    // For simplicity, let's just return the first 50 characters of the input text
    return text.substring(0, 100);
}
