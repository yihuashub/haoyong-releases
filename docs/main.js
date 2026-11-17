// 首屏演示：打 l，选三次「了」，「了」排到第一，标语后半句跟着描实
(() => {
  document.documentElement.classList.add("js");

  const input = document.getElementById("demo-input");
  const list = document.getElementById("cands");
  const msg = document.getElementById("demo-msg");
  const again = document.getElementById("again");
  const tallies = [...document.querySelectorAll(".tally .t")];
  const groups = [1, 2, 3].map(g => [...document.querySelectorAll(`.hero .ch[data-g="${g}"]`)]);
  const TARGET = "了";
  let picks = 0;

  const order = () => (picks >= 3 ? ["了", "来", "老", "里"] : ["来", "了", "老", "里"]);

  function render() {
    const v = input.value.trim().toLowerCase();
    list.replaceChildren();
    if (v !== "l") {
      const li = document.createElement("li");
      li.className = "none";
      li.textContent = v ? "这里只演示 l，删掉重打试试" : "打 l";
      list.append(li);
      return;
    }
    order().forEach((ch, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.innerHTML = `<small>${i + 1}</small>${ch}`;
      b.setAttribute("aria-label", `第 ${i + 1} 个候选：${ch}`);
      b.addEventListener("click", () => pick(ch));
      li.append(b);
      list.append(li);
    });
  }

  function pick(ch) {
    if (ch !== TARGET) {
      msg.textContent = `选了「${ch}」。它也会记下来，不过这里只看「了」。`;
      return;
    }
    if (picks >= 3) {
      msg.textContent = "「了」已经排在第一了。按 1 或空格就上屏。";
      return;
    }
    picks += 1;
    tallies[picks - 1].classList.add("on");
    groups[picks - 1].forEach((el, i) => setTimeout(() => el.classList.add("on"), i * 140));
    msg.textContent = picks < 3
      ? `第 ${picks} 次选「了」。再选 ${3 - picks} 次。`
      : "记住了：下次打 l，「了」排第一。";
    if (picks === 3) {
      again.hidden = false;
      render();
    }
  }

  function reset() {
    picks = 0;
    tallies.forEach(t => t.classList.remove("on"));
    groups.flat().forEach(el => el.classList.remove("on"));
    again.hidden = true;
    input.value = "l";
    msg.textContent = "别的输入法给你「来」。选三次「了」，看看会怎样。";
    render();
    input.focus();
  }

  input.addEventListener("input", render);
  input.addEventListener("keydown", e => {
    if (input.value.trim().toLowerCase() !== "l") return;
    const n = e.key === " " ? 1 : Number(e.key);
    if (n >= 1 && n <= 4) {
      e.preventDefault();
      pick(order()[n - 1]);
    }
  });
  again.addEventListener("click", reset);
  render();

})();
