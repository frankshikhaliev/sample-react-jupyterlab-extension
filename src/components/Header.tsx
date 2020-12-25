import React from 'react'

export const Header = (): JSX.Element => {
  return (
    <div>
      <h1>This is a new comonent!</h1>
      <h3>
        <a
          href="https://daviseford.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'yellow' }}
        >
          by frank
        </a>
      </h3>
    </div>
  )
}
