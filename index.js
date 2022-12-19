import fs from "fs";

const findBtn = document.getElementById("find-btn");
const addBtn = document.getElementById("add-btn");

const addMeaning = () => {
  const word = document.getElementById("word").value;
  const meaning = document.getElementById("meaning").value;
  const data = `${word}-${meaning}`;

  fs.writeFileSync("meanings.txt", "utf-8", data);
};

const findMeaning = () => {
  const find = document.getElementById("find").value;

  const meaningsFile = fs.readFileSync("meanings.txt", "utf-8");
  const meanings = meaningsFile.split("\n");
  const foundWord = meanings.find((word) => word.split("-")[0] === find);

  const word1 = document.getElementById("word1");
  const meaning1 = document.getElementById("meaning1");
  word1.textContent = foundWord.word;
  meaning1.textContent = foundWord.meaning;
};

addBtn.addEventListener("click", addMeaning);
findBtn.addEventListener("click", findBtn);
