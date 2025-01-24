console.log("CONNECTED!");
const cardContent = document.querySelector(".card-content");
const costPerCredit = document.querySelector(".cost-per-credit span");
const totalTuition = document.querySelector(".total-tuition span");
const totalFeesEl = document.querySelector(".total-fees span");
const creditHours = document.querySelector(".credit-hours span");
const courseProgram = document.querySelector(".program span");

const {
  dataset: { school, program },
} = cardContent;

const getData = async (school, program) => {
  if (!school || typeof school !== "string" || school.length < 3) return;
  if (!program || typeof program !== "string") return;

  const url = `https://dintprx.erp.fordham.edu/student_calculator/data/calcjson.jsp?wchSchool=${school}`;

  // Temporary
  courseProgram.innerText = program;

  try {
    const res = await fetch(url);
    const data = await res.json();
    let totalCreditCost = 0;
    let totalFees = 0;

    const totalCreditHours = parseInt(creditHours.innerText);
    const { value } = data;

    value.forEach((val) => {
      const { costtype, section } = val;
      if (costtype.toLowerCase() === "direct" && section.toLowerCase() === program.toLowerCase()) {
        val.order === 1 ? (totalCreditCost = val.default) : (totalFees = val.default * 2);
        return;
      }
    });

    costPerCredit.innerText = `$ ${totalCreditCost}`;
    totalFeesEl.innerText = `$ ${totalFees}`;
    totalTuition.innerText = `$ ${totalCreditHours * totalCreditCost + totalFees}`;
  } catch (err) {
    throw err.message;
  }
};

document.addEventListener("DOMContentLoaded", getData(school, program));
