const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json([
    {
      name: 'Ciambellone',
      ingredienti: ['farina', 'zucchero', 'uova', 'latte', 'olio di semi', 'lievito per dolci',],
      image: 'http://localhost:3000/plates/ciambellone.jpeg'
    },
    {
      name: 'Cracker barbabietola',
      ingredienti: ['farina', 'barbabietola', 'oilo', 'acqua', 'semi misti', 'lievito', 'sale'],
      image: 'http://localhost:3000/plates/cracker_barbabietola.jpeg'
    },
    {
      name: 'Pane fritto dolce',
      ingredienti: ['pane', 'zucchero', 'uova', 'latte', 'olio di semi', 'miele',],
      image: 'http://localhost:3000/plates/pane_fritto_dolce.jpeg'
    },
    {
      name: 'Pasta barbabietola',
      ingredienti: ['pasta', 'barbabietola', 'olio', 'sale', 'pistacchi', 'salvia',],
      image: 'http://localhost:3000/plates/pasta_barbabietola.jpeg'
    },
    {
      name: 'Torta Paesana',
      ingredienti: ['pane raffermo', 'zucchero', 'uova', 'latte', 'olio di semi', 'lievito per dolci', 'cacao', 'uvetta', 'amaretti sbriciolati', 'scorza di limone'],
      image: 'http://localhost:3000/plates/torta_paesana.jpeg'
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})