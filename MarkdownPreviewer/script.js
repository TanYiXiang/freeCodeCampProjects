/*
Got example for Github markup from:
https://github.com/zackharley/rick-and-morty
*/
const placeHolderContent = `# rick-and-morty [![Build Status](https://travis-ci.org/zackharley/rick-and-morty.svg?branch=master)](https://travis-ci.org/zackharley/rick-and-morty) {

> Get _**[Rick and Morty][1]**_ gifs

The gif list is just a [JSON file][2] and can be used wherever.

![Rick and Morty](https://github.com/zackharley/rick-and-morty/raw/master/rick-and-morty.gif)

## Install

\`$ npm install --save rick-and-morty\`

## Usage

\`\`\`js
const rickAndMorty = require('rick-and-morty');

rickAndMorty.random();
// -> 'http://i.giphy.com/l41lI4bYmcsPJX9Go.gif'
\`\`\`

## API

### .all: *string[]*

All gifs.

### .random(): *string*

Random name.

## Related

 - [rick-and-morty-cli][3] - CLI for this module

## License

2016 © [Zack Harley][4]
> :fork_and_knife: Fork away!

# }

[1]: https://en.wikipedia.org/wiki/Rick_and_Morty
[2]: https://github.com/zackharley/rick-and-morty/blob/master/rick-and-morty.json
[3]: https://github.com/zackharley/rick-and-morty-cli
[4]: https://github.com/zackharley`;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdownText: placeHolderContent };

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(e) {
    this.setState({
      markdownText: e.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "React Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { class: "container", style: { marginTop: '20px' } }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement(Editor, { handleMarkdown: this.updateMarkdown,
        markdown: this.state.markdownText }), /*#__PURE__*/
      React.createElement(Previewer, { markdown: this.state.markdownText })))));




  }}


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const labelStyle = {
      display: "block",
      textAlign: "justify",
      fontSize: "25px" };


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "col-sm-6" }, /*#__PURE__*/
      React.createElement("label", { for: "editor", style: labelStyle }, "Markdown Text Editor:"), /*#__PURE__*/


      React.createElement("textarea", {
        id: "editor",
        name: "Editor",
        rows: "30",
        cols: "70",
        style: { maxWidth: "100%" },
        value: this.props.markdown,
        onChange: this.props.handleMarkdown }))));




  }}


class Previewer extends React.Component {

  constructor(props) {
    super(props);
  }

  getMarkdownText() {
    var rawMarkup = marked(this.props.markdown);
    return { __html: rawMarkup };
  }


  render() {
    const labelStyle = {
      display: "block",
      textAlign: "justify",
      fontSize: "25px" };


    const borderStyle = {
      border: '0.5px solid black',
      height: "610px",
      overflow: 'scroll' };


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "col-sm-6" }, /*#__PURE__*/
      React.createElement("label", { for: "preview", style: labelStyle }, "Preview Text: "), /*#__PURE__*/

      React.createElement("div", { id: "preview", style: borderStyle, dangerouslySetInnerHTML: this.getMarkdownText() }))));




  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));