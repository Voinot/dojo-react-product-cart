import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];

class App extends React.Component {
  state ={
    productList : initialProductList,
    newProductPrice: '',
    newProductName: ''
  }

  handleChamge = (e) => {
    const productsTmp = this.state.productList
    const index = productsTmp.findIndex(item => item.id === parseInt(e.target.id))
    const quantity = e.target.value ? parseInt(e.target.value) : ''
    if(quantity === 0){
      const remove = window.confirm("Etes-vous sûr de bien vouloir retirer ce produit de la liste ?")
      if(remove === true){
        productsTmp.splice(index,1)
      }
    }else{
      productsTmp[index].quantity = quantity
    }
    this.setState({ productList : productsTmp})
  }

  getTotal = () => {
    const total = this.state.productList.reduce((acc, product)=> acc +(product.price * product.quantity),0 )
    return total
  }

  handleNewProduct = (e) => {
    this.setState({[e.target.name]: e.target.value}, console.log(this.state))
  }

  addProduct = (e) =>{
    e.preventDefault()
    const productsTmp = this.state.productList
    const newProduct = {
      name: this.state.newProductName,
      price: this.state.newProductPrice,
      quantity: 1,
      id: this.state.productList.reduce((acc, initVal)=> acc + initVal.id + Math.floor(Math.random()*10),0)
    }
    console.log(newProduct.id)
    productsTmp.push(newProduct)
    this.setState({productList: productsTmp})
  }
  
  render(){
    return (
      <div className='App'>
        <h1>Ma commande</h1>
  
        <table>
            <thead>
              <tr>
                <td>
                  Produit
                </td>
    
                <td>
                  Prix unitaire
                </td>
    
                <td>
                  Quantité
                </td>
    
                <td>
                  Prix total
                </td>
              </tr>
            </thead>
  
            <tbody>
              {this.state.productList.map(product => {
                return(
                  <tr key={product.id}>
                    <td>
                      {product.name}
                    </td>
    
                    <td>
                      {product.price}
                    </td>
  
                    <td>
                      <input
                        id={product.id}
                        type="number"
                        onChange={(e)=>this.handleChamge(e)}
                        value={product.quantity}
                      />
                    </td>
  
                    <td>
                      {product.price * product.quantity}
                    </td>
                  </tr>
                )
              })}
            </tbody>
        </table>

        <p>{`Montant de la commande : ${this.getTotal()} $`}</p>
        
        <form onSubmit={(e)=>this.addProduct(e)}>
          <h2>Ajouter un produit</h2>
          <div className="field">
            <label>Nom</label>
            <input
              type="text"
              name="newProductName"
              onChange={(e)=>this.handleNewProduct(e)}
              required
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              type="number"
              name="newProductPrice"
              onChange={(e)=>this.handleNewProduct(e)}
              required
            />
          </div>

          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default App;
