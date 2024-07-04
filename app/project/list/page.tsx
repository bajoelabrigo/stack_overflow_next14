import Link from 'next/link'
import React from 'react'

const ProjectList = () => {
  return (
    <main>
        <h1>project list</h1>
        <ul>
            <li>
                <Link href='/project/jobit'>
                Jobit
                </Link>
            </li>
            <li>
                <Link href='/project/carrent'>
                carrent
                </Link>
            </li>
            <li>
                <Link href='/project/hipnode'>
                hipnode
                </Link>
            </li>
        </ul>
    </main>
  )
}

export default ProjectList