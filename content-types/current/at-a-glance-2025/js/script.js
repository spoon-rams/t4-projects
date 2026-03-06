// FUNCTIONS
function parseCSVtoJson(csv) {
  const rows = [];
  const regex = /("([^"]|"")*"|[^,]+)(?=,|$)/g;

  csv
    .trim()
    .split("\n")
    .forEach((line) => {
      const values = [];
      line.match(regex).forEach((field) => {
        field = field.trim();
        if (field.startsWith('"') && field.endsWith('"')) {
          field = field.slice(1, -1).replace(/""/g, '"');
        }
        values.push(field);
      });
      rows.push(values);
    });

  const headers = rows[0];

  const jsonData = rows.slice(1).map((row) =>
    Object.fromEntries(
      headers.map((h, i) => {
        let value = row[i]?.trim();

        if (h === "Cost Per Credit") {
          value = value.replace(/[$,]/g, "");
          // optional: convert to number
          // value = Number(value);
        }

        return [h, value];
      }),
    ),
  );
  return jsonData;
}

function animateNumbers(element, steps, duration) {
  element.forEach((number, i) => {
    const isCurrency = number.textContent.trim().startsWith("$");

    const targetValue = parseInt(number.textContent, 10);
    const increment = Math.ceil(targetValue / steps);
    const interval = Math.floor(duration / steps);
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= targetValue && !isCurrency) {
        current = targetValue;
        clearInterval(counter);
      }

      number.textContent = i === 1 ? `$${current.toLocaleString()}` : current;
    }, interval);
  });
}

function animateText(element) {
  element.forEach((span) => {
    const text = span.textContent;
    span.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        span.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
  });
}

// MAIN
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded and parsed");

  const numbers = document.querySelectorAll(".count");
  const letters = document.querySelectorAll(".letter-reveal");
  const program = document.querySelector(".program");
  const degree = document.querySelector(".degree");
  const enrollmentStatus = document.querySelector(".enrollment-status");
  const duration = 1000; // 1 second
  const steps = 30;

  // Fetch data from Google Sheets
  const testData = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuXHIKIUy3bou9EGY5JIqiBOtohPVdhkGFfdmRtmQVXZzunQoZhs5u9fy9SwTIzFhmd0j9JYSFKzdX/pub?output=csv";

  const google = await fetch(testData);

  if (google.ok) {
    const csv = await google.text();
    // Convert CSV → JSON
    const json = parseCSVtoJson(csv);

    degree.textContent = json[0]["Degree"];
    program.textContent = json[0]["Program"];
    enrollmentStatus.textContent = json[0]["Enrollment Status"];
    numbers[0].textContent = json[0]["Credit Hours"];
    numbers[1].textContent = json[0]["Cost Per Credit"];
    letters[0].textContent = json[0]["Duration"];
    letters[1].textContent = json[0]["Classes Begin"];
    letters[2].textContent = json[0]["Applications Due"];

    // Animate numbers
    animateNumbers(numbers, steps, duration);
    // Animate text (letter-by-letter)
    animateText(letters);
  }

  // Fallback to local data if Google Sheets fetch fails
  if (!google.ok) {
    const local = await fetch("./data/cost-of-tuition-backup.csv");

    if (!local.ok) {
      console.error("Local data fetch failed");
      return;
    }

    const csv = await local.text();
    // Convert CSV → JSON
    const json2 = parseCSVtoJson(csv);

    degree.textContent = json2[0]["Degree"];
    program.textContent = json2[0]["Program"];
    enrollmentStatus.textContent = json2[0]["Enrollment Status"];
    numbers[0].textContent = json2[0]["Credit Hours"];
    numbers[1].textContent = json2[0]["Cost Per Credit"];
    letters[0].textContent = json2[0]["Duration"];
    letters[1].textContent = json2[0]["Classes Begin"];
    letters[2].textContent = json2[0]["Applications Due"];

    // Animate numbers
    animateNumbers(numbers, steps, duration);

    // Animate text (letter-by-letter)
    animateText(letters);
  }
});
