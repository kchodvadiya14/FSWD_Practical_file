import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Practical6.css'

const Practical6 = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products?limit=8')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = await response.json()
      setProducts(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 6: Product Card with API</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="api-info">
          <p>Fetching products from: <strong>https://fakestoreapi.com/products</strong></p>
        </div>

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>Error: {error}</p>
            <button onClick={fetchProducts} className="retry-btn">Retry</button>
          </div>
        )}

        {!loading && !error && (
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">
                    {product.description.substring(0, 100)}...
                  </p>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <div className="product-rating">
                      ⭐ {product.rating.rate} ({product.rating.count})
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Practical6
