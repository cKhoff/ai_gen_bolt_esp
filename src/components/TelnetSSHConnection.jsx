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

    const TelnetSSHConnection = () => {
      const [host, setHost] = useState('')
      const [port, setPort] = useState('22')
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Connecting to ${host}:${port} with username: ${username}`)
      }

      return (
        <FormContainer>
          <FormTitle>Telnet/SSH Connection</FormTitle>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Label htmlFor="host">Host:</Label>
              <Input type="text" id="host" value={host} onChange={(e) => setHost(e.target.value)} required />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="port">Port:</Label>
              <Input type="text" id="port" value={port} onChange={(e) => setPort(e.target.value)} required />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="username">Username:</Label>
              <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password:</Label>
              <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </InputContainer>
            <Button type="submit">Connect</Button>
          </form>
        </FormContainer>
      )
    }

    export default TelnetSSHConnection
