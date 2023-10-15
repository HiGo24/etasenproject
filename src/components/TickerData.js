import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function TickerData() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[symbol,setSymbol]=useState('')
    const[open,setOpen]=useState('')
    const[close,setClose]=useState('')
    const[date1,setDate1]=useState('')
    const[tickerdata,setTickerData]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const tickerMain={symbol,open,close,date1}
    console.log(tickerMain)
    fetch("http://localhost:8080/tickerMain/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify()

  }).then(()=>{
    console.log("Ticker Data updated")
  })
}

useEffect(()=>{
 fetch("http://localhost:8080/tickerMain/getAll")
  //fetch("http://api.marketstack.com/v1/eod?access_key=e572ae5ca4bf9f5d52cb624037f93bad&symbols=AAPL,GOOG,MSFT")
  .then(res=>res.json())
  .then((result)=>{
    setTickerData(result);
  }
)
},[])
  return (

    <Container>
 
    <h1>Ticker Data</h1>

    <Paper elevation={3} style={paperStyle}>

      {tickerdata.map(tickerMain=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={tickerMain.id}>
         
         Symbol :{tickerMain.symbol}<br/>
         Open :{tickerMain.open}<br/>
         Close :{tickerMain.close}<br/>
         Date :{tickerMain.date1}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}