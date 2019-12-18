import React, {Component} from 'react';
import {getTrips,} from "../../api/remote";
import toastr from 'toastr';
import TripCard from './../partials/TripCard'

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: []
           
        };     
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        let tripsArray = [];

        const res = await getTrips();

        if (res.success === false) {
            toastr.error('Loading unsuccessful');
            return;
        }

        for (let obj in res) {
            tripsArray.push(res[obj]);

        }
        toastr.success(`Successful Loading of Trips`);

        this.setState({trips: tripsArray});

    }
    
   
    render() {
        return (

            <main>
                <div className="train-logo">
                </div>
               
                <section className="added-trains">

                    {
                        this.state.trips.map((trip, index) => {
                            return <TripCard key={index} id={index} props={trip}/>
                        })
                    }

                </section>
                
            </main>
        );


    }
}