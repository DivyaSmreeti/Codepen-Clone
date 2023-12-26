import React from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
const Container = styled(Box)`
background:#060606;
`

const Code = () => {

    const {html,
        setHtml,
        css,
        setCss,
        js,
        setJs} =useContext(DataContext);


  return (
    <Container display="flex">
    <Editor 
    heading="HTML"
    icon="/"
    color="#FF3C41"
    value={html}
    onChange={setHtml}
    />
    <Editor
    heading="CSS"
    icon="*"
    color="#0EBEFF"
    value={css}
    onChange={setCss}
    />
    <Editor
    heading="JS"
    icon="()"
    color="#FCD000"
    value={js}
    onChange={setJs}
    />
    </Container>
  )
}

export default Code