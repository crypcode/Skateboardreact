import React, {Component} from "react";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {buyerName: '', buyerSurname:'', buyerAddress:'', ItemId:'',
            productQuantity:'', orderSum:''};

        this.handleBuyerName = this.handleBuyerName.bind(this);
        this.handleBuyerSurname = this.handleBuyerSurname.bind(this);
        this.handleBuyerAddress = this.handleBuyerAddress.bind(this);
        this.handleItemId = this.handleItemId.bind(this);
        this.handleProductQuantity = this.handleProductQuantity.bind(this);
        this.handleOrderSum = this.handleOrderSum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBuyerName(event) {
        this.setState({buyerName: event.target.value});
    }

    handleBuyerSurname(event) {
        this.setState({buyerSurname: event.target.value});
    }

    handleBuyerAddress(event) {
        this.setState({buyerAddress: event.target.value});
    }

    handleItemId(event) {
        this.setState({itemId: event.target.value});
    }

    handleProductQuantity(event) {
        this.setState({productQuantity: event.target.value});
    }

    handleOrderSum(event) {
        this.setState({orderSum: event.target.value});
    }

    handleSubmit(event) {
        fetch(`http://shopend.test/api/store-orders`, {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        }).then(response => response.json()).then(results => console.log(results));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Buyer Name:
                    <input type="text" value={this.state.buyerName} onChange={this.handleBuyerName} />
                </label>
                <label>
                    Buyer Surname:
                    <input type="text" value={this.state.buyerSurname} onChange={this.handleBuyerSurname} />
                </label>
                <label>
                    Buyer Address:
                    <input type="text" value={this.state.buyerAddress} onChange={this.handleBuyerAddress} />
                </label>
                <label>
                    Product ID:
                    <input type="text" value={this.state.itemId} onChange={this.handleItemId} />
                </label>
                <label>
                    Product Quantity:
                    <input type="text" value={this.state.productQuantity} onChange={this.handleProductQuantity} />
                </label>
                <label>
                    Order Sum:
                    <input type="text" value={this.state.orderSum} onChange={this.handleOrderSum} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Orders;