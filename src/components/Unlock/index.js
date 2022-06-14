// Write your code here
import {useState} from 'react'
import {
  LockContainer,
  LockBox,
  LockImage,
  Description,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(false)

  const onClickLockButton = () => {
    setLock(prevState => !prevState)
  }

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const imageAltText = isLocked ? 'unlock' : 'lock'
  const lockText = isLocked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const buttonText = isLocked ? 'Lock' : 'Unlock'

  return (
    <LockContainer>
      <LockBox>
        <LockImage src={imageUrl} alt={imageAltText} />
        <Description>{lockText}</Description>
      </LockBox>
      <Button type="button" onClick={onClickLockButton}>
        {buttonText}
      </Button>
    </LockContainer>
  )
}
export default Unlock
