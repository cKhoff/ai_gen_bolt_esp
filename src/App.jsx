import React, { useState } from 'react'
    import styled from 'styled-components'
    import WiFiConnection from './components/WiFiConnection'
    import SerialConnection from './components/SerialConnection'
    import BLEConnection from './components/BLEConnection'
    import USBConnection from './components/USBConnection'
    import HTTPConnection from './components/HTTPConnection'
    import MQTTConnection from './components/MQTTConnection'
    import CoAPConnection from './components/CoAPConnection'
    import WebSocketConnection from './components/WebSocketConnection'
    import TelnetSSHConnection from './components/TelnetSSHConnection'
    import LoRaWANConnection from './components/LoRaWANConnection'

    const Container = styled.div`
      background: linear-gradient(135deg, #0f2027, #2c5364);
      color: white;
      font-family: 'Courier New', Courier, monospace;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const Title = styled.h1`
      text-align: center;
      margin-bottom: 20px;
      color: #ff5733;
    `

    const ConnectionContainer = styled.div`
      background: rgba(0, 0, 0, 0.8);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    `

    const ConnectionButton = styled.button`
      background: #ff5733;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      margin: 5px;
      cursor: pointer;

      &:hover {
        background: #e64c2d;
      }
    `

    const App = () => {
      const [activeConnection, setActiveConnection] = useState(null)

      return (
        <Container>
          <div>
            <Title>ESP32-C3 Connection Tool</Title>
            <ConnectionContainer>
              <ConnectionButton onClick={() => setActiveConnection('WiFi')}>Wi-Fi</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('Serial')}>Serial</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('BLE')}>BLE</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('USB')}>USB</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('HTTP')}>HTTP</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('MQTT')}>MQTT</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('CoAP')}>CoAP</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('WebSocket')}>WebSocket</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('TelnetSSH')}>Telnet/SSH</ConnectionButton>
              <ConnectionButton onClick={() => setActiveConnection('LoRaWAN')}>LoRaWAN</ConnectionButton>
            </ConnectionContainer>
            {activeConnection === 'WiFi' && <WiFiConnection />}
            {activeConnection === 'Serial' && <SerialConnection />}
            {activeConnection === 'BLE' && <BLEConnection />}
            {activeConnection === 'USB' && <USBConnection />}
            {activeConnection === 'HTTP' && <HTTPConnection />}
            {activeConnection === 'MQTT' && <MQTTConnection />}
            {activeConnection === 'CoAP' && <CoAPConnection />}
            {activeConnection === 'WebSocket' && <WebSocketConnection />}
            {activeConnection === 'TelnetSSH' && <TelnetSSHConnection />}
            {activeConnection === 'LoRaWAN' && <LoRaWANConnection />}
          </div>
        </Container>
      )
    }

    export default App
