const sounds = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: 'Welcome' };

    this.changeDisplay = this.changeDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
  }

  changeDisplay(message) {
    this.setState({
      displayMessage: message });



    setTimeout(this.resetDisplay, 500);
  }

  resetDisplay() {
    this.setState({
      displayMessage: "" });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement(TitleComp, null), /*#__PURE__*/
      React.createElement(DisplayComp, { message: this.state.displayMessage }), /*#__PURE__*/
      React.createElement("div", { id: "padSection" },
      sounds.map(sound => {
        return /*#__PURE__*/React.createElement(Drumpad, { soundItem: sound, change: this.changeDisplay });
      }))));



  }}


class Drumpad extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }


  handleClick() {
    this.audio.play();
    this.props.change(this.props.soundItem.id);
  }

  handleKeyDown(e) {
    if (e.keyCode == this.props.soundItem.keyCode || e.keyCode == this.props.soundItem.keyCode + 32) {
      this.handleClick();
    }
  }

  render() {

    const padItem = this.props.soundItem;

    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", id: padItem.keyTrigger, onClick: this.handleClick, onKeyDowh: this.handleKeyDown },
      padItem.keyTrigger, /*#__PURE__*/
      React.createElement("audio", { ref: ref => this.audio = ref, className: "clip", id: padItem.keyTrigger, src: padItem.url })));


  }}


const DisplayComp = function (props) {
  return /*#__PURE__*/(
    React.createElement("p", { id: "display" }, props.message));


};

const TitleComp = function () {
  return /*#__PURE__*/(
    React.createElement("h3", { id: "title" }, "FCC DRUM MACHINE"));

};

ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById('root'));