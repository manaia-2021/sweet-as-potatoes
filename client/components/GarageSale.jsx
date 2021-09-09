import React, { Component } from 'react'
import Items from './Items'
import Filter from './Filter'

class GarageSale extends Component {
  constructor (props) {
    super(props)
    this.state = { items: [], filteredItems: [] }
    this.handleChangeSort = this.handleChangeSort.bind(this)
  }

  componentWillMount () {
    // fetch("http://localhost:3000/").then(res => res.json())
    // .then(data => this.setState({
    //   items : data,
    //   filteredItems: data
    // }))
    this.setState({
      items: [{
        id: '1',
        name: 'Retro couch',
        price: '60',
        quantity: '2',
        category_id: '23',
        sale_id: '2'
      },
      {
        id: '2',
        name: 'Panasonic Microwave',
        price: '80',
        quantity: '2',
        category_id: '24',
        sale_id: '3'
      },
      {
        id: '3',
        name: 'Rice-Cooker',
        price: '20',
        quantity: '1',
        category_id: '25',
        sale_id: '4'
      },
      {
        id: '4',
        name: 'table',
        price: '10',
        quantity: '1',
        category_id: '26',
        sale_id: '2'
      },
      {
        id: '5',
        name: 'Wine-glasses',
        price: '10',
        quantity: '2',
        category_id: '23',
        sale_id: '2'
      }
      ],
      filteredItems: [{
        id: '1',
        name: 'Retro couch',
        price: '60',
        quantity: '2',
        category_id: '23',
        sale_id: '2'
      },
      {
        id: '2',
        name: 'Panasonic Microwave',
        price: '80',
        quantity: '2',
        category_id: '24',
        sale_id: '3'
      },
      {
        id: '3',
        name: 'Rice-Cooker',
        price: '20',
        quantity: '1',
        category_id: '25',
        sale_id: '4'
      },
      {
        id: '4',
        name: 'table',
        price: '10',
        quantity: '1',
        category_id: '26',
        sale_id: '2'
      },
      {
        id: '5',
        name: 'Wine-glasses',
        price: '10',
        quantity: '2',
        category_id: '23',
        sale_id: '2'
      }
      ]
    })
  }

  handleChangeSort (e) {
    this.setState({ sort: e.target.value })
    this.listItems()
  }

  listItems () {
    this.setState(state => {
      if (state.sort !== '') {
        state.items.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
      } else {
        state.items.sort((a, b) => (a.id < b.id ? 1 : -1))
      }
      return { filteredItems: state.items }
    })
  }

  render () {
    return (
      <div className="container">
        <h1> List Of garage Sales</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filter sort = {this.state.sort} handleChangeSort={this.handleChangeSort} />
            <hr/>
            <Items items= {this.state.filteredItems}/>
          </div>
          <div className="col-md-4">

          </div>
        </div>

      </div>
    )
  }
}
export default GarageSale
