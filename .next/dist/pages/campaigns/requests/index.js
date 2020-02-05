'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\HP\\Blockchain Course\\kickstart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
		(0, _inherits3.default)(RequestIndex, _Component);

		function RequestIndex() {
				(0, _classCallCheck3.default)(this, RequestIndex);

				return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
		}

		(0, _createClass3.default)(RequestIndex, [{
				key: 'renderRows',
				value: function renderRows() {
						var _this2 = this;

						return this.props.requests.map(function (request, index) {
								return _react2.default.createElement(_RequestRow2.default, {
										key: index,
										id: index,
										request: request,
										address: _this2.props.address,
										approversCount: _this2.props.approversCount,
										__source: {
												fileName: _jsxFileName,
												lineNumber: 30
										}
								});
						});
				}
		}, {
				key: 'render',
				value: function render() {
						var Header = _semanticUiReact.Table.Header,
						    Row = _semanticUiReact.Table.Row,
						    HeaderCell = _semanticUiReact.Table.HeaderCell,
						    Body = _semanticUiReact.Table.Body;

						return _react2.default.createElement(_Layout2.default, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 46
								}
						}, _react2.default.createElement('h3', {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 47
								}
						}, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
										fileName: _jsxFileName,
										lineNumber: 48
								}
						}, _react2.default.createElement('a', {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 49
								}
						}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
										fileName: _jsxFileName,
										lineNumber: 50
								}
						}, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 55
								}
						}, _react2.default.createElement(Header, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 56
								}
						}, _react2.default.createElement(Row, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 57
								}
						}, _react2.default.createElement(HeaderCell, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 58
								}
						}, 'ID'), _react2.default.createElement(HeaderCell, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 59
								}
						}, 'Description'), _react2.default.createElement(HeaderCell, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 60
								}
						}, 'Amount'), _react2.default.createElement(HeaderCell, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 61
								}
						}, 'Recipient'), _react2.default.createElement(HeaderCell, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 62
								}
						}, 'Approval Count'), _react2.default.createElement(HeaderCell, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 63
								}
						}, 'Approve'), _react2.default.createElement(HeaderCell, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 64
								}
						}, 'Finalize'))), _react2.default.createElement(Body, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 67
								}
						}, this.renderRows())), _react2.default.createElement('div', {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 69
								}
						}, 'Found ', this.props.requestCount, ' requests.'));
				}
		}], [{
				key: 'getInitialProps',
				value: function () {
						var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
								var address, campaign, requestCount, approversCount, requests;
								return _regenerator2.default.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																address = props.query.address;
																campaign = (0, _campaign2.default)(address);
																_context.next = 4;
																return campaign.methods.getRequestsCount().call();

														case 4:
																requestCount = _context.sent;
																_context.next = 7;
																return campaign.methods.approversCount().call();

														case 7:
																approversCount = _context.sent;
																_context.next = 10;
																return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
																		return campaign.methods.requests(index).call();
																}));

														case 10:
																requests = _context.sent;
																return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

														case 12:
														case 'end':
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						function getInitialProps(_x) {
								return _ref.apply(this, arguments);
						}

						return getInitialProps;
				}()
		}]);

		return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7aUNBbUJPO21CQUNUOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUNFLEFBQUM7ZUFBRCxBQUNPLEFBQ0w7Y0FGRixBQUVNLEFBQ0o7bUJBSEYsQUFHVyxBQUNUO21CQUFTLE9BQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjswQkFBZ0IsT0FBQSxBQUFLLE1BTHZCLEFBSzZCOztzQkFMN0I7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxTQURGO0FBRkosQUFBTyxBQVdSLE9BWFE7Ozs7NkJBYUQ7VUFBQSxBQUVBLFNBRkEsQUFFa0MsdUJBRmxDLEFBRUE7VUFGQSxBQUVRLE1BRlIsQUFFa0MsdUJBRmxDLEFBRVE7VUFGUixBQUVhLGFBRmIsQUFFa0MsdUJBRmxDLEFBRWE7VUFGYixBQUV5QixPQUZ6QixBQUVrQyx1QkFGbEMsQUFFeUIsQUFFakM7OzZCQUNDLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0M7QUFERDtBQUFBLE9BQUEsa0JBQ0MsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREQsQUFDQyxBQUNBLDZCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNRO0FBRFI7eUJBQ1EsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFFLGNBQXpDLEFBQXVDLEFBQWdCO29CQUF2RDtzQkFBQTtBQUFBO1NBSlgsQUFFQyxBQUNRLEFBQ0UsQUFLSixrQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBckJULEFBU08sQUFZRSxBQUFPLEFBQUssQUFFZCxnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsY0F4Qi9CLEFBQ0MsQUF1Qk8sQUFHUjs7Ozs7MkcsQUEvRDRCOzs7OzttQkFDbEI7QSwwQkFBWSxNQUFNLEEsTUFBbEIsQSxBQUNGO0EsMkJBQVcsd0JBQUEsQSxBQUFTOzt1QkFDQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixtQkFBakIsQUFBb0MsQTs7bUJBQXpEO0E7O3VCQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7bUJBQXpEO0E7O3lDQUVpQixBQUFRLFVBQ3ZCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUxrQixBQUNyQixBLGlCQUFBLENBRHFCOzttQkFBakI7QTtpREFRQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQXFCLGNBQXJCLGNBQW1DLGdCQUFuQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZmdCLEEsQUFtRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0hQL0Jsb2NrY2hhaW4gQ291cnNlL2tpY2tzdGFydCJ9