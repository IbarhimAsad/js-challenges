/***********************
 CHALLENGE 1
***********************/
function statusByAge(age) {
  const status = age < 13 ? "child" : age <= 17 ? "teen" : "adult";
  return status;
}

/***********************
 CHALLENGE 2
***********************/
function truthyFalsyDemo(x) {
  return x ? "truthy" : "falsy";
}

/***********************
 CHALLENGE 3
***********************/
function signOf(num) {
  if (num > 0) return "positive";
  if (num < 0) return "negative";
  return "zero";
}

/***********************
 CHALLENGE 4
***********************/
function looseStrictComparison(a, b) {
  return {
    loose: a == b,
    strict: a === b,
  };
}

/***********************
 CHALLENGE 5
***********************/
function grade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

/***********************
 CHALLENGE 6
***********************/
function tempStatus(temp) {
  if (temp > 30) return "hot";
  if (temp >= 20) return "warm";
  return "cold";
}

/***********************
 CHALLENGE 7
***********************/
function evenOdd(n) {
  return n % 2 === 0 ? "even" : "odd";
}

/***********************
 CHALLENGE 8
***********************/
function canEdit(user) {
  return (user.role === "admin" || user.role === "editor") && user.active
    ? "can-edit"
    : "no-access";
}

/***********************
 CHALLENGE 9
***********************/
function sumTo100() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) sum += i;
  return sum;
}

/***********************
 CHALLENGE 10
***********************/
function countdownFrom5() {
  const arr = [];
  let i = 5;
  while (i >= 1) {
    arr.push(i);
    i--;
  }
  return arr;
}

/***********************
 CHALLENGE 11
***********************/
function doWhileTo3() {
  let count = 0;
  const out = [];
  do {
    out.push(count);
    count++;
  } while (count < 3);
  return out;
}

/***********************
 CHALLENGE 12
***********************/
function multiplesOf3() {
  const arr = [];
  for (let i = 1; i <= 10; i++) arr.push(3 * i);
  return arr;
}

/***********************
 CHALLENGE 13
***********************/
function fixedLoop() {
  const arr = [];
  for (let i = 0; i < 3; i++) arr.push(i);
  return arr;
}

/***********************
 CHALLENGE 14
***********************/
function factorial(n) {
  if (n === 0) return 1;
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

/***********************
 CHALLENGE 15
***********************/
function buildHashes() {
  let s = "";
  for (let i = 0; i < 5; i++) s += "#";
  return s;
}

/***********************
 CHALLENGE 16
***********************/
function countDivisible() {
  let count = 0;
  for (let i = 1; i <= 50; i++) if (i % 10 === 0) count++;
  return count;
}

/***********************
 CHALLENGE 17
***********************/
function dayType(day) {
  switch (day) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
      return "weekday";
    case "Sat":
    case "Sun":
      return "weekend";
    default:
      return "invalid";
  }
}

/***********************
 CHALLENGE 18
***********************/
function monthToSeason(m) {
  switch (m) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "invalid";
  }
}

/***********************
 CHALLENGE 19
***********************/
function colorAction(color) {
  switch (color) {
    case "red":
      return "stop";
    case "yellow":
      return "slow";
    default:
      return "go";
  }
}

/***********************
 CHALLENGE 20
***********************/
function handleCommand(cmd) {
  switch (cmd) {
    case "start":
      return "started";
    case "stop":
      return "stopped";
    case "pause":
      return "paused";
    default:
      return "unknown";
  }
}

/***********************
 CHALLENGE 21
***********************/
function add(a, b) {
  return a + b;
}

/***********************
 CHALLENGE 22
***********************/
const greet = function (name) {
  return `Hello, ${name}`;
};

/***********************
 CHALLENGE 23
***********************/
function delayedMsg() {
  return "done";
}

/***********************
 CHALLENGE 24
***********************/
function hoistingDemo() {
  return {
    declared: "A",
    expressed: "B",
  };
}

/***********************
 CHALLENGE 25
***********************/
function isEven(n) {
  return n % 2 === 0;
}

/***********************
 CHALLENGE 26
***********************/
function pow(base, exp = 2) {
  return base ** exp;
}

/***********************
 CHALLENGE 27
***********************/
function formatName(first, last = "") {
  return `${first} ${last}`.trim();
}

/***********************
 CHALLENGE 28
***********************/
function safeDivide(a, b = 1) {
  return b === 0 ? "∞" : a / b;
}

/***********************
 CHALLENGE 29
***********************/
function applyDiscount(price, percent = 10) {
  return price * (1 - percent / 100);
}

/***********************
 CHALLENGE 30
***********************/
function repeatText(text, times = 1) {
  let out = "";
  for (let i = 0; i < times; i++) out += text;
  return out;
}

/***********************
 CHALLENGE 31
***********************/
const book = { title: "1984", author: "George Orwell", year: 1949 };

/***********************
 CHALLENGE 32
***********************/
function modifyBookPages() {
  const updated = { ...book };
  updated.pages = 300;
  delete updated.year;
  return updated;
}

/***********************
 CHALLENGE 33
***********************/
function fullName(user) {
  return `${user.first} ${user.last}`;
}

/***********************
 CHALLENGE 34
***********************/
function updateAge(person) {
  const copy = { ...person };
  copy.age++;
  return copy;
}

/***********************
 CHALLENGE 35
***********************/
function toggleTheme(settings) {
  const s = { ...settings };
  s.theme = s.theme === "light" ? "dark" : "light";
  return s;
}

/***********************
 CHALLENGE 36
***********************/
function modifyNums() {
  let nums = [5, 2, 9, 1];
  nums.push(10);
  nums.shift();
  return nums;
}

/***********************
 CHALLENGE 37
***********************/
function sortLetters() {
  let letters = ["b", "a", "c"];
  return letters.sort();
}

/***********************
 CHALLENGE 38
***********************/
function sortNumbers() {
  let scores = [40, 100, 1, 5, 25, 10];
  return scores.sort((a, b) => a - b);
}

/***********************
 CHALLENGE 39
***********************/
function addBlue() {
  let colors = ["red", "green"];
  colors.splice(1, 0, "blue");
  return colors;
}

/***********************
 CHALLENGE 40
***********************/
function removeCities() {
  let cities = ["Cairo", "Dubai", "Amman", "Doha", "Riyadh"];
  cities.splice(1, 2);
  return cities;
}

// Inject simple UI styles when loaded in a browser so every challenge page
// shows output in a pleasant, consistent way without editing each HTML file.
(function () {
  if (typeof document === "undefined") return;
  try {
    const css = `
      body{font-family:Segoe UI, Roboto, Arial, sans-serif;background:#ffffff;padding:20px;color:#111}
      h1{font-weight:600;margin-bottom:8px}
      #output{background:linear-gradient(180deg,#ffffff,#f8fafc);border:1px solid #e6e9ee;padding:12px;border-radius:8px;box-shadow:0 6px 18px rgba(15,23,42,0.06);font-family:Consolas,"Courier New",monospace;white-space:pre-wrap;word-wrap:break-word;line-height:1.5;max-width:1000px;overflow:auto}
      #output.empty{color:#6b7280;font-style:italic}
    `;
    const s = document.createElement("style");
    s.type = "text/css";
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);

    const out = document.getElementById("output");
    if (out && !out.textContent.trim()) out.classList.add("empty");
    // when show() is used in pages it appends text; remove the 'empty' class
    // automatically when content appears.
    const observer = new MutationObserver(() => {
      if (!out) return;
      if (out.textContent.trim()) out.classList.remove("empty");
    });
    if (out)
      observer.observe(out, {
        characterData: true,
        childList: true,
        subtree: true,
      });
  } catch (e) {
    /* ignore in non-browser env */
  }
})();
