import React from 'react';

class ComparisonChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        const {name, price, colors, condition, vendor} = this.props;
        return(
            <div className="chart-column">
                <div className="chart-header chart-row-data">{name}</div>
                <div className="chart-row-data">{price}</div>
                <div className="chart-row-data">
                    {colors.map((item) => 
                        {
                            const name1 = "color-circle " + item;
                            return(
                                <div className={name1}>
                                    {/* {item} */}
                                </div>
                            );
                            
                        })
                    }
                </div>
                <div className={condition === "Fresh" ? "chart-row-data fresh" : "chart-row-data frozen"}>
                    {condition}
                </div>
                <div className="chart-row-data">
                    {vendor.map((item, i) => {
                        if(i>0) {
                            return (", " + item)
                        } else {
                            return item;
                        }
                    })}
                </div>
            </div>
        );
    };
}

export default ComparisonChart;