import React, { Component } from 'react'

export default class Items extends Component {
  render () {
    const productItems = this.props.items.map(item => (
      <div className="col-md-4" key = {item.id}>
        <div className="thumbnail text-center">
          <a href = {`# ${item.id}`}>
            <img className="pics" src = {`/items/${item.id}.jpg`} alt= {item.name} />
            <p>
              {item.name}
            </p>
          </a>
          <div>
            <b>${parseFloat(item.price).toFixed(2)}</b>
          </div>
        </div>
      </div>
    )
    )
    return (
      <div className="row">
        {productItems}
      </div>
    )
  }
}
