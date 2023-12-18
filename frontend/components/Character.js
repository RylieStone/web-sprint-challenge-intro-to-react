import React, { useState } from 'react'

function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [homeworldShown, showHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card' onClick={() => {showHomeworld(!homeworldShown)}}>
      <h3 className='character-name'>{character.name}</h3>
      {homeworldShown ? <p>Planet:
        <span className='character-planet'> {character.homeworld}</span>
      </p> : null}
    </div>
  )
}

export default Character
