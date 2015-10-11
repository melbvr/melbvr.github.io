// main.js
/** @jsx React.DOM */

'use strict';

var data = [

];

var React = require('react');
var jQuery = require('jquery');
var CommentBox = require('./components/CommentBox.jsx')

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);