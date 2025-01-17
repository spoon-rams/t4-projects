console.log("CONNECTED!");
const cardContent = document.querySelector(".card-content");
const costPerCredit = document.querySelector(".cost-per-credit span");
const totalTuition = document.querySelector(".total-tuition span");
const creditHours = document.querySelector(".credit-hours span");
const courseProgram = document.querySelector(".program span");

const {
  dataset: { school, program },
} = cardContent;

const getData = async (school, selectedProgram) => {
  if (!school || typeof school !== "string" || school.length < 3) return;
  if (!selectedProgram || typeof selectedProgram !== "string") return;

  const url = "https://dintprx.erp.fordham.edu/student_calculator/data/calcjson.jsp?wchSchool=" + school;

  try {
    const res = await fetch(url);
    const data = await res.json();
    let totalCreditCost = 0;
    let totalFees = 0;

    const totalCreditHours = parseInt(creditHours.innerText);
    const { value } = data;

    value.forEach((val) => {
      const { costtype, section } = val;
      const costType = costtype.toLowerCase();
      const program = section.toLowerCase();
      if (costType === "direct" && program === selectedProgram.toLowerCase()) {
        val.order === 1 ? (totalCreditCost = val.default) : (totalFees = val.default * 2);
        return;
      }
    });

    courseProgram.innerText = program;
    costPerCredit.innerText = "$" + totalCreditCost;
    totalTuition.innerText = "$" + (totalCreditHours * totalCreditCost + totalFees);
  } catch (err) {
    throw new Error(err.message);
  }
};

document.addEventListener("DOMContentLoaded", getData(school, program));
