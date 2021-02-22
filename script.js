function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const sign2 =
["+", "-", "/", "*"];
const sign1 =
["add", "subtract", "divide", "multiply"];
var cur_formula = "";
var cur_num_formula = "";
const Max_digits = 12;

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",
















    e => {
      var cur_formula = this.state.formula;
      var x = arr.findIndex(index => index == e.target.id);
      var Cur_num = this.state.Num;
      if (Cur_num.length > Max_digits) {return 0;}
      if (this.state.Num == "0") {
        if (x == "0") {return 0;}
        if (x != "0" && cur_formula == "0") {Cur_num = "";cur_formula = "";}
      }
      console.log(this.state.Num);
      this.setState({
        Num: Cur_num + x,
        formula: cur_formula + x,
        Text: "" });

    });_defineProperty(this, "clear",

    () => {
      this.setState({
        formula: "0",
        Num: "0",
        Text: "",
        curform: "",
        dot: "" });


    });_defineProperty(this, "handleSign",

    e => {
      console.log(this.state.formula);
      var next_formula = "";
      var x = sign2[sign1.findIndex(index => index == e.target.id)];
      var cur_text = this.state.Text;
      var cur_text1;
      var cur_formula = this.state.formula;
      if (cur_text.length == 0) {next_formula = cur_formula + x;cur_text1 = "";}
      if (cur_text.length == 1) {
        if (x == "-") {next_formula = cur_formula + x;cur_text1 = x;} else
        {next_formula = cur_formula.slice(0, cur_formula.length - 1) + x;cur_text1 = "";}
      }
      if (cur_text.length == 2) {
        if (x == "-") {return 0;} else
        {next_formula = cur_formula.slice(0, cur_formula.length - 2) + x;cur_text1 = "";}
      }

      this.setState({
        Num: "",
        Text: cur_text1 + x,
        formula: next_formula,
        dot: "" });

    });_defineProperty(this, "handleAns",

    () => {
      var ans = eval(this.state.formula);
      this.setState({
        formula: ans,
        Num: ans });

    });_defineProperty(this, "handleDec",

    () => {
      var text = this.state.dot;
      var form = this.state.formula;
      console.log(text.length);
      if (text.length >= 1 || this.state.Text != "") {
        return 0;
      }
      this.setState({
        formula: form + ".",
        dot: text + "." });

    });this.state = { formula: "0", Num: "0", Text: "", curform: "", dot: "" };}componentDidMount() {}componentWillUpdate() {}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "container" }, /*#__PURE__*/
      React.createElement("h1", null, "Calculator"), /*#__PURE__*/
      React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "display" },
      this.state.formula), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.clear }, "c"), /*#__PURE__*/
      React.createElement("button", { id: "divide", onClick: this.handleSign }, "/")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: this.handleClick }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: this.handleClick }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: this.handleClick }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", onClick: this.handleSign }, "x")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: this.handleClick }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: this.handleClick }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: this.handleClick }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", onClick: this.handleSign }, "-")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "seven", onClick: this.handleClick }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: this.handleClick }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: this.handleClick }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: this.handleSign }, "+")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: this.handleClick }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", onClick: this.handleDec }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.handleAns }, "=")))));




  }}





ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));