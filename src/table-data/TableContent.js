import React from 'react';

class TableContent extends React.Component {

  render() {
//  debugger
    const rowData = this.props.data.map((prop)=>{
    let color = '';
    if(prop.delta > 0) {
        color = 'green'
    } else if(prop.delta < 0) {
        color = 'red';
    }
        return (
                <tr>
                    <td>{prop.ticker}</td>
                    <td className={color}>{prop.price}</td>

                </tr>
            )
    })
    return rowData
  }
}

export default TableContent