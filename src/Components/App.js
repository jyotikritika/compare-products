import React from 'react';
import '../App.css';
import ProductCard from './ProductCard';
import ComparisonChart from './ComparisonChart';
import Attributes from './Attributes';
import Products from '../products.json';

class App extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productSize: 0,
      selectedItems: {},
      countOfSelectedItems: 0,
      compareButtonEnabled: true,
      showComparisonChart: false
    }
  }

  componentDidMount() {
    console.log("Mounted!");
    let productsArray =  Products.products;
    // console.log(`products: ${productsArray}`);  why this is not working?
    console.log(productsArray);
    // console.log(productsList);
    if(productsArray) {
      this.setState({products: productsArray});
    }
    console.log(this.state.products);
  }

  compareButtonClicked = (id) => {
    console.log("compare button clicked with id: ", id);
    const selectedItemsObj = this.state.selectedItems;
    selectedItemsObj[id] = 1;
    const count = (this.state.countOfSelectedItems + 1);
    // console.log("count: ", count);
    this.setState({
      selectedItems: selectedItemsObj,
      countOfSelectedItems: count,
      compareButtonEnabled: false,
    });
    this.shouldShowComparisonChart(count);
  }

  removeButtonClicked = (id) => {
    console.log("remove button clicked for id: ", id);
    const selectedItemsObj = this.state.selectedItems;
    selectedItemsObj[id] = 0;
    const count = this.state.countOfSelectedItems - 1;
    this.setState({
      selectedItems: selectedItemsObj,
      countOfSelectedItems: count
    });
    this.shouldShowComparisonChart(count);
  }

  shouldShowComparisonChart = (count) => {
    const countOld = this.state.countOfSelectedItems;
    console.log(`should show comparison chart check called for ${count} items`);
    if(count > 1) {
      this.setState({showComparisonChart : true});
    }
    else {
      this.setState({showComparisonChart : false});
    }
  }

  render() {
    const productList = this.state.products;
    return (
      <div className="App-parent">
        <div className="product-listing" >
          {productList && productList.map((item) => {
              return <ProductCard 
                  key = {item.id}
                  id = {item.id}
                  name = {item.name}
                  description = {item.description}
                  price = {item.price}
                  image = {item.image}
                  compareModeEnabled = {this.state.compareButtonEnabled ? "true" : "false"}
                  isSelected = {(!this.state.compareButtonEnabled && this.state.selectedItems[item.id]) ? "true" : "false"}
                  compareButtonClicked = {(id) => this.compareButtonClicked(id)}
                  removeButtonClicked = {(id) => this.removeButtonClicked(id)}
                />
            })
          }
        </div>
        <div className="product-comparison">
          {(this.state.showComparisonChart) ?
            <div className="comparison-chart-parent">
              <Attributes />
              {productList.map((item) => {
                if(this.state.selectedItems[item.id]) {
                  return <ComparisonChart 
                    key = {item.id}
                    name = {item.name}
                    price = {item.price}
                    colors = {item.colors}
                    condition = {item.condition}
                    vendor = {item.vendors}
                  />
                }
              })}
            </div>
            :
            <div></div>
          }
        </div>
      </div>
    );
  }
}

export default App;
