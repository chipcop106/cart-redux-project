import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import Cart from "./../components/Cart";
import * as Message from "./../constants/Message";
import * as actions from "./../actions/index";
class CartContainer extends Component {
  render() {
    var { cart } = this.props;

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCartItem = cart => {
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      var { onDeteleItem, onChangeMessage, onChangeQuantity } = this.props;
      result = cart.map((item, index) => {
        return (
          <CartItem
            onDeteleItem={onDeteleItem}
            onChangeMessage={onChangeMessage}
            key={index}
            item={item}
            index={index}
            onChangeQuantity={onChangeQuantity}
          />
        );
      });
    }
    return result;
  };

  showTotalAmount = cart => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onDeteleItem: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeteleItem: id => {
      dispatch(actions.actDeleteProductInCart(id));
    },
    onChangeMessage: message => {
      dispatch(actions.actChangeMessage(message));
    },
    onChangeQuantity: (id, value) => {
      dispatch(actions.actUpdateQuantity(id, value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
