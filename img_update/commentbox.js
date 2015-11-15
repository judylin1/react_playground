// var x = "This is a string";
var imageJSON = {
  image: "http://sitmeanssit.com/dog-training-mu/houston-dog-training/files/2013/03/puppy.jpeg",
  name: "Golden Puppy"
};

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: imageJSON, image: imageJSON.image}
  },
  handleChange: function() {
    this.setState({image: event.target.value})
  },
  render: function() {
    var inlineStyle = {width: "500", height: '25', border: '1px solid black'};
    return (
      <div className = 'testClass'>
        <input type='text' value={this.state.image} onChange={this.handleChange} style={inlineStyle}/>
        <p></p>
        {/* <img src={this.props.data.image} width='200'/> */}
        <img src={this.state.image} width='200'/>
        {/*<SecondElement/>*/}
      </div>
    );
  }
});

{/*
var SecondElement = React.createClass({
  render: function() {
    return (
      <h2>Element inside another element</h2>
    );
  }
});
*/}

React.render(<CommentBox data={imageJSON}/>, document.getElementById('content'));
