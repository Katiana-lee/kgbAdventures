import api from './apiConfig'

export const getAdventures = async () => {
  try {
      const response = await api.get('/adventures')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getAdventure = async id => {
  try {
      const response = await api.get(`/adventures/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createAdventure = async adventure => {
  try {
      const response = await api.post('/adventures', adventure)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateAdventure = async (id, adventure) => {
  try {
      const response = await api.put(`/adventures/${id}`, adventure)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteAdventure = async id => {
  try {
      const response = await api.delete(`/adventures/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}