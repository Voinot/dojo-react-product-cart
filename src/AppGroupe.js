// import React from 'react';
// import './App.css';

// const initialProductList = [
//   { id: 1, name: 'produit 1', price: 50, quantity: 1 },
//   { id: 2, name: 'produit 2', price: 75, quantity: 2 },
//   { id: 3, name: 'produit 3', price: 20, quantity: 5 }
// ];

// class App extends React.Component {

//   state = { initialProductList }


//   handleChange = (id, e) => {

//     let quantite = parseInt(e.target.value)

//     if (quantite === 0) {
//       if (window.confirm("Etes-vous sûr de bien vouloir retirer ce produit de la liste ?")) {
//         this.setState(prevState => ({
//           initialProductList: prevState.initialProductList
//             .map(product => (product.id === id ? Object.assign(product, { quantity: quantite }) : product))
//         }))
//       }
//     }

//     else {
//       this.setState(prevState => ({
//         initialProductList: prevState.initialProductList.map(
//           product => (product.id === id ? Object.assign(product, { quantity: quantite }) : product))
//       }))
//     }
//   }

//   handleAddingProduct = (e) => {
//     e.preventDefault()
//     let etat = this.state.initialProductList
//     let aleatoire = Math.floor(Math.random() * 100)
//     let nom = document.getElementById("newProduct").value
//     let prix = document.getElementById("newPrice").value
//     etat.push({ id: aleatoire, name: nom, price: prix, quantity: 1 })

//     this.setState(prevState => ({
//       initialProductList: etat
//     }))
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>Ma commande</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Produit</th>
//               <th>Prix unitaire</th>
//               <th>Quantité</th>
//               <th>Prix total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.initialProductList.map(product => (
//               <tr key={product.id}>
//                 <td>{product.name}</td>
//                 <td>{product.price}</td>
//                 <td><input type="number" value={product.quantity} onChange={(e) => this.handleChange(product.id, e)} /></td>
//                 <td>{product.quantity * product.price} </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <p>Montant total de la commande : {
//           this.state.initialProductList
//             .map(product =>
//               product.quantity * product.price
//             )
//             .reduce((reducer, currentValue) => reducer + currentValue, 0)
//         }</p>
//         <form onSubmit={this.handleAddingProduct}>
//           <h2>Ajouter un produit</h2>
//           <label htmlFor="name">Nom</label>
//           <input className="field" type="text" id="newProduct" name="newProduct" required />
//           <label htmlFor="name">Prix</label>
//           <input className="field" type="number" id="newPrice" name="newPrice" required />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }

// }

// export default App;


