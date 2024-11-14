import React from 'react'
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

    const CoAPConnection = () => {
      return (
        <FormContainer>
          <FormTitle>CoAP Connection</FormTitle>
          <p>This feature is not directly supported in this environment.</p>
        </FormContainer>
      )
    }

    export default CoAPConnection
