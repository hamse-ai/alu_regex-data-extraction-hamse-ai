// Regular expressions for different data types
const regexPatterns = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    url: /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s"]*/g,
    phone: /(?:\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}/g,
    creditCard: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
    time: /\b(?:[01]?\d|2[0-3]):[0-5]\d\b|\b(?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:AM|PM)\b/gi
};

// Function to extract matched patterns
function extractData(text, type) {
    return text.match(regexPatterns[type]) || [];
}

// Function to validate extracted data
function validateData(data, type) {
    if (!data || data.length === 0) {
        console.warn(`No valid ${type} found.`);
    }
    return data;
}

// Sample text for testing
const sampleText = `
    Emails: user@example.com, firstname.lastname@company.co.uk, invalid-email@com
    URLs: https://www.example.com, https://subdomain.example.org/page, invalid.url
    Phones: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567
    Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456, 1234-567
    Time: 14:30, 2:30 PM, 25:61
`;

// Running extraction with validation
console.log("Extracted Emails:", validateData(extractData(sampleText, "email"), "email"));
console.log("Extracted URLs:", validateData(extractData(sampleText, "url"), "url"));
console.log("Extracted Phone Numbers:", validateData(extractData(sampleText, "phone"), "phone"));
console.log("Extracted Credit Cards:", validateData(extractData(sampleText, "creditCard"), "credit card"));
console.log("Extracted Time:", validateData(extractData(sampleText, "time"), "time"));


