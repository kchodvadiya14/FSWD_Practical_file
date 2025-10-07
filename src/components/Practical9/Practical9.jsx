import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Practical9.css'

const Practical9 = () => {
  const [items, setItems] = useState([])
  const [formData, setFormData] = useState({ name: '', description: '', price: '' })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const API_URL = 'http://localhost:5000/api/items'

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API_URL)
      setItems(response.data)
      setError('')
    } catch (err) {
      setError('Server not running. Please start backend server.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData)
        setEditingId(null)
      } else {
        await axios.post(API_URL, formData)
      }
      
      setFormData({ name: '', description: '', price: '' })
      fetchItems()
      setError('')
    } catch (err) {
      setError('Failed to save item. Please check backend connection.')
      console.error(err)
    }
  }

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price
    })
    setEditingId(item._id)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`${API_URL}/${id}`)
        fetchItems()
        setError('')
      } catch (err) {
        setError('Failed to delete item.')
        console.error(err)
      }
    }
  }

  const handleCancel = () => {
    setFormData({ name: '', description: '', price: '' })
    setEditingId(null)
  }

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 9: CRUD with MongoDB</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="info-banner">
          <p>⚠️ Make sure MongoDB is running and backend server is started</p>
          <p>Backend: <code>cd backend && npm run dev</code></p>
        </div>

        {error && (
          <div className="error-banner">
            {error}
          </div>
        )}

        <div className="crud-layout">
          <div className="form-section">
            <h2>{editingId ? 'Update Item' : 'Create New Item'}</h2>
            
            <form onSubmit={handleSubmit} className="crud-form">
              <div className="form-field">
                <label>Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Item name"
                />
              </div>

              <div className="form-field">
                <label>Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  placeholder="Item description"
                  rows="3"
                />
              </div>

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

              <div className="form-buttons">
                <button type="submit" className="submit-btn">
                  {editingId ? 'Update' : 'Create'}
                </button>
                {editingId && (
                  <button type="button" onClick={handleCancel} className="cancel-btn">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="items-section">
            <h2>Items List ({items.length})</h2>
            
            {loading ? (
              <div className="loading">Loading items...</div>
            ) : items.length === 0 ? (
              <div className="empty-state">
                <p>No items found. Create your first item!</p>
              </div>
            ) : (
              <div className="items-grid">
                {items.map(item => (
                  <div key={item._id} className="item-card">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <span className="item-price">${parseFloat(item.price).toFixed(2)}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                    <div className="item-actions">
                      <button onClick={() => handleEdit(item)} className="edit-btn">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item._id)} className="delete-btn">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practical9
