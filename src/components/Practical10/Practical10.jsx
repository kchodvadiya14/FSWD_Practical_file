import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Practical10.css'

const Practical10 = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: ''
  })
  const [showForm, setShowForm] = useState(false)
  const navigate = useNavigate()

  const API_URL = 'http://localhost:5000/api/products'

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API_URL)
      setProducts(response.data)
      setError('')
    } catch (err) {
      setError('Backend server not running. Start server: cd backend && npm run dev')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await axios.post(API_URL, formData)
      setFormData({ name: '', description: '', price: '', category: '', stock: '' })
      setShowForm(false)
      fetchProducts()
      setError('')
    } catch (err) {
      setError('Failed to add product. Check backend connection.')
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Delete this product?')) {
      try {
        await axios.delete(`${API_URL}/${id}`)
        fetchProducts()
      } catch (err) {
        setError('Failed to delete product.')
        console.error(err)
      }
    }
  }

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 10: Product API with React & Axios</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="info-banner">
          <h3>📦 Full Stack Product Management</h3>
          <p>Backend API: <code>http://localhost:5000/api/products</code></p>
          <p>Technology: Express.js + MongoDB + React + Axios</p>
        </div>

        {error && (
          <div className="error-banner">
            {error}
          </div>
        )}

        <div className="actions-bar">
          <button 
            onClick={() => setShowForm(!showForm)} 
            className="add-product-btn"
          >
            {showForm ? 'Cancel' : '+ Add New Product'}
          </button>
          <button onClick={fetchProducts} className="refresh-btn">
            🔄 Refresh
          </button>
        </div>

        {showForm && (
          <div className="product-form-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-row">
                <div className="form-field">
                  <label>Product Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter product name"
                  />
                </div>

                <div className="form-field">
                  <label>Category *</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    placeholder="e.g., Electronics, Clothing"
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  placeholder="Product description"
                  rows="3"
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Price *</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>

                <div className="form-field">
                  <label>Stock Quantity *</label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    required
                    placeholder="0"
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Add Product
              </button>
            </form>
          </div>
        )}

        <div className="products-section">
          <h2>Products ({products.length})</h2>
          
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="empty-state">
              <p>No products available. Add your first product!</p>
            </div>
          ) : (
            <div className="products-grid">
              {products.map(product => (
                <div key={product._id} className="product-card">
                  <div className="product-badge">
                    {product.category}
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-details">
                    <div className="detail-item">
                      <span className="label">Price:</span>
                      <span className="price">${parseFloat(product.price).toFixed(2)}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Stock:</span>
                      <span className={`stock ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
                        {product.stock > 0 ? `${product.stock} units` : 'Out of stock'}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(product._id)} 
                    className="delete-product-btn"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Practical10
