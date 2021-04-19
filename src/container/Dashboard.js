import React, { Component } from "react";
import imgDC from '../../src/imgDC.png'
import { AppointmentCard } from "../components/appoinmentCard/AppointmentCard";
import { AppointmentList } from "../container/AppointmentsList/AppointementList";
import { Appointment } from "../components/Appoinment/Appointments";
import './Home.scss';

export function Dashboard(props) {

    return (
        <>
            {/*  <Appointment></Appointment> */}

            <AppointmentList>
                <AppointmentCard></AppointmentCard>
            </AppointmentList>
        </>

    )
}