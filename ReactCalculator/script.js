class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      equation: '0',
      operatorFlag: false,
      decimalFlag: false };


    this.append = this.append.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
    this.addOperator = this.addOperator.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
  }

  append(num) {
    if (this.state.equation !== '0') {
      this.setState({
        equation: this.state.equation + num,
        operatorFlag: false });

    } else
    {
      this.setState({
        equation: num });

    }
  }

  addOperator(operator) {
    if (!this.state.operatorFlag) {
      this.setState({
        equation: this.state.equation + operator,
        operatorFlag: true,
        decimalFlag: false });

    } else
    {
      let currentEq = this.state.equation;
      currentEq = currentEq.slice(0, currentEq.length - 1);
      currentEq = currentEq + operator;
      this.setState({
        equation: currentEq });

    }
  }

  addDecimal() {
    if (!this.state.decimalFlag) {
      this.setState({
        equation: this.state.equation + ".",
        operatorFlag: false,
        decimalFlag: true });

    }
  }

  calculate() {
    try {
      this.setState({
        equation: (eval(this.state.equation) || "") + "",
        operatorFlag: false,
        decimalFlag: false });

    } catch (e) {
      this.setState({
        equation: '' });

    }
  }

  clear() {
    this.setState({
      equation: '0',
      operatorFlag: false,
      decimalFlag: false });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "main" }, /*#__PURE__*/
      React.createElement(TitleComp, null), /*#__PURE__*/
      React.createElement(DisplayComp, { display: this.state.equation }), /*#__PURE__*/
      React.createElement(ButtonPanel, { addOperator: this.addOperator, append: this.append, calculate: this.calculate, clear: this.clear, addDecimal: this.addDecimal })));


  }}



class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.props.clear, className: "btn btn-danger" }, "Clear"), /*#__PURE__*/
      React.createElement("button", { name: "/", onClick: e => this.props.addOperator(e.target.name), id: "divide", className: "btn btn-dark" }, "\xF7"), /*#__PURE__*/
      React.createElement("button", { name: "*", onClick: e => this.props.addOperator(e.target.name), id: "multiply", className: "btn btn-dark" }, "x")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { name: "7", onClick: e => this.props.append(e.target.name), id: "seven", className: "btn btn-dark" }, "7"), /*#__PURE__*/
      React.createElement("button", { name: "8", onClick: e => this.props.append(e.target.name), id: "eight", className: "btn btn-dark" }, "8"), /*#__PURE__*/
      React.createElement("button", { name: "9", onClick: e => this.props.append(e.target.name), id: "nine", className: "btn btn-dark" }, "9"), /*#__PURE__*/
      React.createElement("button", { name: "-", onClick: e => this.props.addOperator(e.target.name), id: "subtract", className: "btn btn-dark" }, "-")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { name: "4", id: "four", onClick: e => this.props.append(e.target.name), className: "btn btn-dark" }, "4"), /*#__PURE__*/
      React.createElement("button", { name: "5", id: "five", onClick: e => this.props.append(e.target.name), className: "btn btn-dark" }, "5"), /*#__PURE__*/
      React.createElement("button", { name: "6", id: "six", onClick: e => this.props.append(e.target.name), className: "btn btn-dark" }, "6"), /*#__PURE__*/
      React.createElement("button", { name: "+", id: "add", onClick: e => this.props.addOperator(e.target.name), className: "btn btn-dark" }, "+")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-sm-8" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { name: "1", id: "one", onClick: e => this.props.append(e.target.name), className: "btn btn-dark" }, "1"), /*#__PURE__*/
      React.createElement("button", { name: "2", id: "two", onClick: e => this.props.append(e.target.name), className: "btn btn-dark" }, "2"), /*#__PURE__*/
      React.createElement("button", { name: "3", id: "three", onClick: e => this.props.append(e.target.name), className: "btn btn-dark" }, "3")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { name: "0", onClick: e => this.props.append(e.target.name), id: "zero", className: "btn btn-dark" }, "0"), /*#__PURE__*/
      React.createElement("button", { name: ".", id: "decimal", onClick: this.props.addDecimal, className: "btn btn-dark" }, "."))), /*#__PURE__*/


      React.createElement("div", { className: "col-xs" }, /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.props.calculate, className: "btn btn-dark" }, "=")))));




  }}


const TitleComp = function () {
  return /*#__PURE__*/(
    React.createElement("h4", { id: "title" }, "JS React Calculator"));

};

const DisplayComp = function (props) {
  return /*#__PURE__*/(
    React.createElement("p", { id: "display" }, props.display));


};

ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('app'));