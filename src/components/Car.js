import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { Chip, Paper, Container } from '@material-ui/core';
import './Car.css'


const Car = (props) => {
    const id = +props.match.params.id

    let thisCar = cars.find(car => car.id === +id)
    
    return (
        <Container className="conatiner" maxWidth='sm'>
            <Paper className="paper" variant="outlined">
                <h1>{thisCar.Name.toUpperCase()}</h1>
                <div className='chip'>
                    <Chip label={`id: ${thisCar.id}`} />
                    <Chip label={`Name: ${thisCar.Name.toUpperCase()}`} />
                    <Chip label={`MPG: ${thisCar.Miles_per_Gallon}`} />
                    <Chip label={`Cylinders: v${thisCar.Cylinders}`} />
                    <Chip label={`Displacement: ${thisCar.Displacement}`} />
                    <Chip label={`HorsePower: ${thisCar.Horsepower}hp`} />
                    <Chip label={`Weight in lbs: ${thisCar.Weight_in_lbs}lbs`} />
                    <Chip label={`Acceleration: ${thisCar.Acceleration}`} />
                    <Chip label={`Year: ${thisCar.Year}`} />
                    <Chip label={`Origin: ${thisCar.Origin}`} />
                </div>

            </Paper>
        </Container>
    )
}

export default Car