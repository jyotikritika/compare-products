import React from 'react';

class Attributes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            attributes : {
                "price": true, 
                "colors" : true, 
                "condition": true, 
                "vendors" : true
            },
            attributesDisplayed: false
        }
    }

    render() {
        return(
            <div className="chart-column">
                <div className="chart-header chart-row-data">Attributes</div>
                {Object.keys(this.state.attributes).map((key) => 
                    {
                        if(this.state.attributes[key] === true) {
                            return (
                                <div className="chart-row-attributes chart-row-data">
                                    {key}
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    };
}

export default Attributes;