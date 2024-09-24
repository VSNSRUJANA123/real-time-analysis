
# Real-Time Text Analysis and String Replacement

This is a React application that provides real-time text analysis, including the count of unique words, the number of characters excluding spaces and punctuation, and the ability to replace strings dynamically within the text.

## Features

- **Real-Time Unique Word Count**: Calculates the number of unique words entered in the textarea, case-insensitive.
- **Character Count (Excluding Spaces and Punctuation)**: Displays the number of characters, excluding spaces and punctuation.
- **String Replacement**: Provides two input fields to search for a string and replace it with another. Includes a "Replace All" button to replace all occurrences of the search string.
- **Bonus Feature**: Optionally highlights the replaced words in the text after replacement.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/real-time-text-analysis.git
   cd real-time-text-analysis
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Text Input**: Enter your text in the large textarea.
2. **View Statistics**: Real-time updates will show the count of unique words and characters (excluding spaces and punctuation).
3. **String Replacement**:
   - Enter the string you want to search for in the first input field.
   - Enter the replacement string in the second input field.
   - Click the "Replace All" button to replace all occurrences of the search string in the textarea.

## Bonus Feature

After replacement, the replaced words can be highlighted in the text area.

## Technologies Used

- React.js (Functional Components with Hooks)
- JavaScript
- HTML/CSS

## Folder Structure

```
/src
  ├── App.js         # Main component containing the text analysis logic
  ├── App.css        # Styles for the app
  ├── index.js       # Entry point of the application
/public
  └── index.html     # HTML template for React
```

## License

This project is open-source and available under the MIT License.

