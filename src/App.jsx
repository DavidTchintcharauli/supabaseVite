import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import './App.css'

const supabase = createClient("https://eulzlnhktzkukxufmbgd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bHpsbmhrdHprdWt4dWZtYmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxOTczNjgsImV4cCI6MjAzMTc3MzM2OH0.h_HqGqT1n0jzt8LOO5Z6ZFLR-At-Fcqa04h8jb5j0XY")

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await supabase.from("countries").select()
    setCountries(data)
  }

  return (
    <div>
      <ul>
        {countries.map((country) =>(
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
