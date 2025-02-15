# Web Data Extractor using Regular Expressions

## Project Overview

This project is a **Web Data Extractor** that uses **Regular Expressions (Regex)** to extract structured information from unstructured text. It is designed to process large amounts of textual data and extract key elements such as:

- **Email Addresses**
- **URLs**
- **Phone Numbers**
- **Credit Card Numbers**
- **Time Formats (12-hour & 24-hour formats)**

The extracted data can be used for further processing in applications like **data validation, content filtering, and automated analysis**.

---

## Features

✅ Extracts multiple data formats using optimized Regex patterns\
✅ Handles various edge cases and malformed input data\
✅ Provides clean, structured outputs for easy analysis\
✅ Includes validation mechanisms to ensure high accuracy\
✅ Fully documented and structured for team collaboration

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Latest LTS version recommended)
- A text editor (VS Code, Sublime, or any IDE of choice)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo/web-data-extractor.git
   ```
2. Navigate to the project directory:
   ```bash
   cd web-data-extractor
   ```
3. Install dependencies (if required):
   ```bash
   npm install
   ```
4. Run the script:
   ```bash
   node index.js
   ```

---

## Usage

To extract specific data from a given text, modify the `sampleText` variable inside `index.js` and run the script. The output will display extracted data for each category.

### Example Output:

```
Extracted Emails: ['user@example.com', 'firstname.lastname@company.co.uk']
Extracted URLs: ['https://www.example.com', 'https://subdomain.example.org/page']
Extracted Phone Numbers: ['(123) 456-7890', '123-456-7890']
Extracted Credit Cards: ['1234 5678 9012 3456', '1234-5678-9012-3456']
Extracted Time: ['14:30', '2:30 PM']
```

## Repository Guidelines

### Contribution Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature-branch-name
   ```
2. Make your changes and commit:
   ```bash
   git commit -m "Added regex for additional validation"
   ```
3. Push to the repository:
   ```bash
   git push origin feature-branch-name
   ```
4. Open a Pull Request (PR) for review and merging.

### Commit Message Guidelines

- Use **clear, concise** commit messages
- Follow a format such as:
  - `feat: Added phone number validation`
  - `fix: Resolved incorrect email extraction edge case`
  - `docs: Updated README with setup instructions`

---

## Edge Case Handling

This project includes built-in checks for: ✅ Malformed emails (`invalid-email@com` rejected)\
✅ Incorrect phone numbers (`1234567` rejected)\
✅ Invalid URLs (`invalid.url` rejected)\
✅ Incorrect credit card formats (`1234-567` rejected)\
✅ Time validation (`25:61` rejected)

---

## Contact

For any inquiries or contributions, please reach out to: 📧 Email: [H.jama@alustudent.com](mailto\:H.jama@alustudent.com)\
🔗 GitHub: [My GitHub Profile](https://github.com/hamse-ai)

Happy coding! 🚀

