'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\HP\\Blockchain Course\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this campaign and can create requests to withdraw money',
				style: { overflowWrap: 'break-word' }
			}, {
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description: 'You must contribute at least this much wei to become an approver'
			}, {
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
			}, {
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Number of people who have already donated to this campaign'
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance (ether)',
				description: 'The balance is how much money this campaign has left to spend.'
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, 'View Requests')))))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								//console.log(props.query.address);
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
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

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O2dDQW9CUztnQkFPTixLQVBNLEFBT0Q7T0FQQyxBQUVSLGlCQUZRLEFBRVI7T0FGUSxBQUdSLGlCQUhRLEFBR1I7T0FIUSxBQUlSLDZCQUpRLEFBSVI7T0FKUSxBQUtSLHVCQUxRLEFBS1I7T0FMUSxBQU1SLHdCQU5RLEFBTVIsQUFHRjs7T0FBTTtZQUNKLEFBQ1UsQUFDUjtVQUZGLEFBRVEsQUFDTjtpQkFIRixBQUlJLEFBQ0Y7V0FBTyxFQUFFLGNBTkMsQUFDWixBQUtTLEFBQWdCO0FBTHpCLEFBQ0UsSUFGVTtZQVFaLEFBQ1UsQUFDUjtVQUZGLEFBRVEsQUFDTjtpQkFYVSxBQVFaLEFBSUk7QUFKSixBQUNFO1lBS0YsQUFDVSxBQUNSO1VBRkYsQUFFUSxBQUNOO2lCQWpCVSxBQWNaLEFBSUk7QUFKSixBQUNFO1lBS0YsQUFDVSxBQUNSO1VBRkYsQUFFUSxBQUNOO2lCQXZCVSxBQW9CWixBQUlJO0FBSkosQUFDRTtZQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ3QixBQUNVLEFBQTRCLEFBQ3BDO1VBRkYsQUFFUSxBQUNOO2lCQTdCSixBQUFjLEFBMEJaLEFBSUksQUFJTjtBQVJFLEFBQ0U7O3dDQU9HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNSO0FBRFE7SUFBQTs7OzsyQkFHRixBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxrQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ1E7QUFEUjtBQUFBLHNCQUNTLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNFO0FBREY7QUFBQSxzQkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQXlCO0FBQXpCO1dBREYsQUFDRSxBQUF5QixBQUFLLEFBRTlCLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO3NCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBTFosQUFDUSxBQUdFLEFBQ0UsQUFJSjtBQUpJO3lCQUlILGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNFO0FBREY7QUFBQSxzQkFDRyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDRTtBQURGO0FBQUEsc0JBQ0UsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO2VBQUE7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUE7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsc0JBQ0UsQUFBQyx5Q0FBTyxTQUFSO2VBQUE7aUJBQUE7QUFBQTtNQWhCbEIsQUFDQyxBQUVDLEFBU1EsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVdsQjs7Ozs7d0dBNUY0QixBOzs7OztZQUM1QjtBQUNNO0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQSxBQUFxQjs7ZUFFYixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBLEFBQThCOztZQUE5QztBOztrQkFJSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjs4QkFBcUIsUUFGaEIsQUFFZ0IsQUFBUSxBQUM3QjtrQkFBUyxRQUhKLEFBR0ksQUFBUSxBQUNqQjt3QkFBZSxRQUpWLEFBSVUsQUFBUSxBQUN2Qjt5QkFBZ0IsUUFMWCxBQUtXLEFBQVEsQUFDeEI7a0JBQVMsUUFBQSxBLEFBTkosQUFNWTtBQU5aLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWb0IsQSxBQWlHM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9IUC9CbG9ja2NoYWluIENvdXJzZS9raWNrc3RhcnQifQ==