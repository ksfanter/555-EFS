const addfunction = () => {
  console.log("Add function is called");
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const result = document.getElementById("result");
  result.value = parseFloat(first.value) + parseFloat(second.value);
};
// document.getElementById("add").onclick = addfunction;
document.getElementById("first").onchange = addfunction;
document.getElementById("second").onchange = addfunction;

//<input id="add" type="button" value="Add Me Up!" />;
