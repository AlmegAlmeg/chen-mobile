const express = require('express')
const cors = require('cors')
const app = express()

const json = require('../data/chen-mobile.json')

const PORT = 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
app.use(cors())

app.get('/brands', async (req, res) => {
  try {
    let brands = []

    json.devices.forEach((device) => brands.push(device.brand))
    brands = [...new Set(brands)]

    return res.status(200).json({ message: brands })
  } catch (error) {
    return res.status(400).json({ message: error })
  }
})

app.get('/brand/:brandName', async (req, res) => {
  try {
    const brandName = req.params.brandName.toLocaleLowerCase()
    if (!brandName) {
      return res.status(500).json({ message: 'Brand name cannot be empty' })
    }

    if (brandName === 'all') {
      return res.status(200).json({ message: json.devices })
    }

    const filteredDevices = json.devices.filter((device) => {
      return device.brand.toLocaleLowerCase() === brandName
    })
    if (filteredDevices.length === 0) {
      return res.status(200).json({ message: 'No devices found under the search' })
    }

    return res.status(200).json({ message: filteredDevices })
  } catch (error) {
    return res.status(400).json({ message: error })
  }
})
