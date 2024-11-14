import React, { useState } from 'react'
    import styled from 'styled-components'

    const FormContainer = styled.div`
      background: rgba(0, 0, 0, 0.8);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
      margin-top: 20px;
    `

    const FormTitle = styled.h2`
      color: #ff5733;
      text-align: center;
    `

    const InputContainer = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    `

    const Label = styled.label`
      color: white;
      margin-bottom: 5px;
    `

    const Input = styled.input`
      padding: 8px;
      border: none;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
    `

    const Button = styled.button`
      background: #ff5733;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #e64c2d;
      }
    `

    const SerialConnection = () => {
      const [baudRate, setBaudRate] = useState('9600')

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Serial Connection with Baud Rate: ${baudRate}`)
      }

      return (
        <FormContainer>
          <FormTitle>Serial Connection</FormTitle>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Label htmlFor="baudRate">Baud Rate:</Label>
              <Input type="text" id="baudRate" value={baudRate} onChange={(e) => setBaudRate(e.target.value)} required />
            </InputContainer>
            <Button type="submit">Connect</Button>
          </form>
        </FormContainer>
      )
    }

    export default SerialConnection