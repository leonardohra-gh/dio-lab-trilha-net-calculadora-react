import { Container, Content, Row, Column } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => 
{
  const [currentNumber, setCurrentNumber] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [operation, setOperation] = useState("")

  const handleClear = () => 
  {
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation("")
  }
  const handleAddNumber = (number) =>
  {
    const newNumber = Number(`${currentNumber}${number}`)
    setCurrentNumber(`${newNumber}` )
  }

  const handleSumNumbers = () => 
  {
    if(firstNumber === '0')
    {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    }
    else
    {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubtractNumbers = () => 
    {
      if(firstNumber === '0')
      {
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('-')
      }
      else
      {
        const subtraction = Number(firstNumber) - Number(currentNumber)
        setCurrentNumber(String(subtraction))
        setOperation('')
      }
    }

    
  const handleMultiplyNumbers = () => 
    {
      if(firstNumber === '0')
      {
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('*')
      }
      else
      {
        const multiplication = Number(firstNumber) * Number(currentNumber)
        setCurrentNumber(String(multiplication))
        setOperation('')
      }
    }

    
  const handleDivideNumbers = () => 
    {
      if(firstNumber === '0')
      {
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('/')
      }
      else
      {
        const division = Number(firstNumber) / Number(currentNumber)
        setCurrentNumber(String(division))
        setOperation('')
      }
    }

  const handleEquals = () =>
  {
    if(firstNumber !== 0 && operation !== '' && currentNumber !== "0")
    {
      switch(operation)
      {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleSubtractNumbers()
          break
        case '*':
          handleMultiplyNumbers()
          break
        case '/':
          handleDivideNumbers()
          break
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="*" onClick={handleMultiplyNumbers}/>
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="n!" />
          <Button label="C" onClick={handleClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubtractNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
