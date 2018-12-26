import React, { Component } from "react";
import * as Message from "./../constants/Message";
class CartItem extends Component {
  onDelete(id) {
    var message = Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;
    var { onDeteleItem, onChangeMessage } = this.props;
    onDeteleItem(id);
    onChangeMessage(message);
  }
  onChangeQuantity = (id, value) => {
    var message = Message.MSG_UPDATE_TO_CART_SUCCESS;
    this.props.onChangeMessage(message);
    this.props.onChangeQuantity(id, value);
  };
  render() {
    var { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <button
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
              onClick={() => this.onChangeQuantity(item.product.id, 0)}
            >
              —
            </button>
            <button
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
              onClick={() => this.onChangeQuantity(item.product.id, 1)}
            >
              +
            </button>
          </div>
        </td>
        <td>{item.product.price * item.quantity}</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.product.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
