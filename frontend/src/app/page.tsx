import Image from 'next/image'
import { useEffect, useState } from 'react'
import readD from '../api/readDir'

export default function Home() {
  return (
    <main>
      <input type="file" name="img" id="img" />
      
    </main>
  )
}
