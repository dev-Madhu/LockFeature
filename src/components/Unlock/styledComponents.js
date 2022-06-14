// Style your elements here
import styled from 'styled-components/macro'

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #000000, #3c2940);
  font-family: 'Roboto';
`

export const LockBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`
export const LockImage = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
`

export const Description = styled.p`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #e2e8f0;
`

export const Button = styled.button`
  padding: 8px 24px;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto';
  background-color: #06b6d4;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`
